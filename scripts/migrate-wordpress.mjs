/**
 * WordPress → Sanity content migration
 *
 * Fetches pages and posts from the WordPress REST API at payplan.com,
 * converts HTML to Portable Text, categorises by URL path, and upserts
 * into Sanity as article, blogPost, or solution documents.
 *
 * Usage:
 *   node scripts/migrate-wordpress.mjs                    # dry run (preview)
 *   node scripts/migrate-wordpress.mjs --commit           # write to Sanity
 *   node scripts/migrate-wordpress.mjs --type=articles    # only articles
 *   node scripts/migrate-wordpress.mjs --type=posts       # only blog posts
 *   node scripts/migrate-wordpress.mjs --type=solutions   # only solution pages
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';

// ---------- Config ----------

const WP_BASE = 'https://www.payplan.com/wp-json/wp/v2';
const PER_PAGE = 50;

const env = readFileSync('.env', 'utf8');
const token = env.match(/SANITY_API_TOKEN=(.*)/)?.[1]?.trim();
if (!token) {
  console.error('Missing SANITY_API_TOKEN in .env');
  process.exit(1);
}

const sanity = createClient({
  projectId: '0w7asqgt',
  dataset: 'production',
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const args = process.argv.slice(2);
const COMMIT = args.includes('--commit');
const TYPE_FILTER = args.find((a) => a.startsWith('--type='))?.split('=')[1];

// ---------- HTML → Portable Text ----------

function htmlToBlocks(html) {
  if (!html || html.trim() === '') return [];

  const dom = new JSDOM(`<div>${html}</div>`);
  const doc = dom.window.document;
  const container = doc.querySelector('div');
  const blocks = [];
  let keyCounter = 0;

  function nextKey() {
    return `k${++keyCounter}`;
  }

  function extractText(node) {
    const spans = [];
    const markDefs = [];

    function walk(n, activeMarks = []) {
      if (n.nodeType === 3) {
        const text = n.textContent;
        if (text && text.trim() !== '') {
          spans.push({
            _type: 'span',
            _key: nextKey(),
            text,
            marks: [...activeMarks],
          });
        }
        return;
      }

      if (n.nodeType !== 1) return;

      const tag = n.tagName.toLowerCase();
      let newMarks = [...activeMarks];

      if (tag === 'strong' || tag === 'b') {
        newMarks.push('strong');
      } else if (tag === 'em' || tag === 'i') {
        newMarks.push('em');
      } else if (tag === 'a') {
        const href = n.getAttribute('href');
        if (href) {
          const markKey = nextKey();
          markDefs.push({ _key: markKey, _type: 'link', href });
          newMarks.push(markKey);
        }
      }

      for (const child of n.childNodes) {
        walk(child, newMarks);
      }
    }

    walk(node);
    return { spans, markDefs };
  }

  function processNode(node) {
    if (node.nodeType === 3) {
      const text = node.textContent?.trim();
      if (text) {
        blocks.push({
          _type: 'block',
          _key: nextKey(),
          style: 'normal',
          markDefs: [],
          children: [{ _type: 'span', _key: nextKey(), text, marks: [] }],
        });
      }
      return;
    }

    if (node.nodeType !== 1) return;

    const tag = node.tagName.toLowerCase();

    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)) {
      const { spans, markDefs } = extractText(node);
      if (spans.length > 0) {
        blocks.push({
          _type: 'block',
          _key: nextKey(),
          style: tag,
          markDefs,
          children: spans,
        });
      }
    } else if (tag === 'p') {
      const { spans, markDefs } = extractText(node);
      if (spans.length > 0) {
        blocks.push({
          _type: 'block',
          _key: nextKey(),
          style: 'normal',
          markDefs,
          children: spans,
        });
      }
    } else if (tag === 'ul' || tag === 'ol') {
      const listItem = tag === 'ul' ? 'bullet' : 'number';
      for (const li of node.querySelectorAll(':scope > li')) {
        const { spans, markDefs } = extractText(li);
        if (spans.length > 0) {
          blocks.push({
            _type: 'block',
            _key: nextKey(),
            style: 'normal',
            listItem,
            level: 1,
            markDefs,
            children: spans,
          });
        }
      }
    } else if (tag === 'blockquote') {
      const { spans, markDefs } = extractText(node);
      if (spans.length > 0) {
        blocks.push({
          _type: 'block',
          _key: nextKey(),
          style: 'blockquote',
          markDefs,
          children: spans,
        });
      }
    } else if (tag === 'div' || tag === 'section' || tag === 'article') {
      for (const child of node.childNodes) {
        processNode(child);
      }
    } else {
      // Fallback: extract text as paragraph
      const { spans, markDefs } = extractText(node);
      if (spans.length > 0) {
        blocks.push({
          _type: 'block',
          _key: nextKey(),
          style: 'normal',
          markDefs,
          children: spans,
        });
      }
    }
  }

  for (const child of container.childNodes) {
    processNode(child);
  }

  return blocks;
}

// ---------- WordPress API helpers ----------

async function fetchAll(endpoint, params = {}) {
  const results = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const searchParams = new URLSearchParams({
      per_page: String(PER_PAGE),
      page: String(page),
      ...params,
    });

    const url = `${WP_BASE}/${endpoint}?${searchParams}`;
    const res = await fetch(url);

    if (!res.ok) {
      if (res.status === 400 && page > 1) break;
      console.error(`  API error: ${res.status} for ${url}`);
      break;
    }

    totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error(`  JSON parse error on page ${page}, skipping`);
      page++;
      continue;
    }
    results.push(...data);
    console.log(`  Fetched page ${page}/${totalPages} (${data.length} items)`);
    page++;
  }

  return results;
}

function stripHtml(html) {
  if (!html) return '';
  const dom = new JSDOM(`<div>${html}</div>`);
  return dom.window.document.querySelector('div').textContent.trim();
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ---------- Categorise pages ----------

function categorisePage(page) {
  const link = page.link.replace('https://www.payplan.com', '').replace(/\/$/, '');

  // Debt info articles
  if (link.startsWith('/debt-info/') && link !== '/debt-info') {
    return 'article';
  }

  // Advice articles
  if (link.startsWith('/advice/') && link !== '/advice') {
    return 'article';
  }

  // Debt advice topics
  if (link.startsWith('/debt-advice-topics/')) {
    return 'article';
  }

  // Top-level solution pages (not sub-articles — those are redirected)
  if (link === '/debt-solutions/trust-deed' ||
      link === '/debt-solutions/debt-arrangement-scheme' ||
      link === '/debt-solutions/sequestration' ||
      link === '/debt-solutions/minimal-asset-process' ||
      link === '/debt-solutions/administration-orders' ||
      link === '/debt-solutions/full-and-final-settlements' ||
      link === '/debt-solutions/debt-consolidation-loans' ||
      link === '/debt-solutions/debt-write-off' ||
      link === '/debt-solutions/repayment-arrangement' ||
      link === '/debt-solutions/self-employed-debt-help') {
    return 'solution';
  }

  // Guide pages
  if (link.startsWith('/guide-to-dealing-with-your-debts/')) {
    return 'article';
  }

  return null;
}

// ---------- Migration ----------

async function migrateArticles() {
  console.log('\n📄 Fetching WordPress pages...');
  const pages = await fetchAll('pages', {
    _fields: 'id,title,slug,link,content,excerpt,date,modified',
    status: 'publish',
  });

  console.log(`  Total pages fetched: ${pages.length}`);

  const articles = pages.filter((p) => categorisePage(p) === 'article');
  console.log(`  Articles to migrate: ${articles.length}`);

  const documents = articles.map((page) => {
    const title = stripHtml(page.title.rendered);
    const summary = stripHtml(page.excerpt?.rendered || '').slice(0, 300);
    const body = htmlToBlocks(page.content.rendered);
    const link = page.link.replace('https://www.payplan.com', '').replace(/\/$/, '');

    let category = 'debt-info';
    if (link.startsWith('/advice/')) category = 'advice';
    if (link.startsWith('/guide-to-dealing-with-your-debts/')) category = 'guides';

    return {
      _id: `wp-article-${page.id}`,
      _type: 'article',
      title,
      slug: { _type: 'slug', current: page.slug },
      summary: summary || undefined,
      category,
      body,
      seoTitle: title,
      seoDescription: summary || undefined,
    };
  });

  return documents;
}

async function migratePosts() {
  console.log('\n📰 Fetching WordPress posts...');
  const posts = await fetchAll('posts', {
    _fields: 'id,title,slug,content,excerpt,date,status',
    status: 'publish',
  });

  console.log(`  Total posts fetched: ${posts.length}`);

  const documents = posts.map((post) => {
    const title = stripHtml(post.title.rendered);
    const summary = stripHtml(post.excerpt?.rendered || '').slice(0, 300);
    const body = htmlToBlocks(post.content.rendered);

    return {
      _id: `wp-post-${post.id}`,
      _type: 'blogPost',
      title,
      slug: { _type: 'slug', current: post.slug },
      publishedAt: post.date,
      summary: summary || undefined,
      body,
      seoTitle: title,
      seoDescription: summary || undefined,
    };
  });

  return documents;
}

async function migrateSolutions() {
  console.log('\n🏛️  Fetching solution pages...');
  const pages = await fetchAll('pages', {
    _fields: 'id,title,slug,link,content,excerpt',
    status: 'publish',
  });

  const solutionPages = pages.filter((p) => categorisePage(p) === 'solution');
  console.log(`  Solution pages to migrate: ${solutionPages.length}`);

  const documents = solutionPages.map((page) => {
    const title = stripHtml(page.title.rendered);
    const summary = stripHtml(page.excerpt?.rendered || '').slice(0, 300);
    const body = htmlToBlocks(page.content.rendered);

    return {
      _id: `wp-solution-${page.id}`,
      _type: 'solution',
      title,
      slug: { _type: 'slug', current: page.slug },
      summary: summary || undefined,
      body,
      seoTitle: title,
      seoDescription: summary || undefined,
    };
  });

  return documents;
}

async function commitToSanity(documents) {
  if (documents.length === 0) {
    console.log('  No documents to commit.');
    return;
  }

  // Batch in groups of 50 to avoid API limits
  const batchSize = 50;
  let committed = 0;

  for (let i = 0; i < documents.length; i += batchSize) {
    const batch = documents.slice(i, i + batchSize);
    const tx = sanity.transaction();
    for (const doc of batch) {
      tx.createOrReplace(doc);
    }
    const result = await tx.commit();
    committed += batch.length;
    console.log(`  Committed ${committed}/${documents.length} (tx: ${result.transactionId})`);
  }
}

// ---------- Main ----------

async function main() {
  console.log(`Mode: ${COMMIT ? '🔴 COMMIT (writing to Sanity)' : '🟢 DRY RUN (preview only)'}`);
  if (TYPE_FILTER) console.log(`Filter: ${TYPE_FILTER}`);

  let allDocuments = [];

  if (!TYPE_FILTER || TYPE_FILTER === 'articles') {
    const articles = await migrateArticles();
    allDocuments.push(...articles);
  }

  if (!TYPE_FILTER || TYPE_FILTER === 'posts') {
    const posts = await migratePosts();
    allDocuments.push(...posts);
  }

  if (!TYPE_FILTER || TYPE_FILTER === 'solutions') {
    const solutions = await migrateSolutions();
    allDocuments.push(...solutions);
  }

  console.log(`\n📊 Summary:`);
  const byType = {};
  for (const doc of allDocuments) {
    byType[doc._type] = (byType[doc._type] || 0) + 1;
  }
  for (const [type, count] of Object.entries(byType)) {
    console.log(`  ${type}: ${count}`);
  }
  console.log(`  Total: ${allDocuments.length}`);

  if (!COMMIT) {
    console.log('\n--- DRY RUN: showing first 5 documents ---\n');
    for (const doc of allDocuments.slice(0, 5)) {
      console.log(`  [${doc._type}] ${doc.title}`);
      console.log(`    slug: ${doc.slug.current}`);
      console.log(`    body blocks: ${doc.body?.length || 0}`);
      console.log('');
    }
    console.log('Run with --commit to write to Sanity.');
  } else {
    console.log('\n✍️  Writing to Sanity...');
    await commitToSanity(allDocuments);
    console.log('\n✅ Migration complete.');
  }
}

main().catch((err) => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
