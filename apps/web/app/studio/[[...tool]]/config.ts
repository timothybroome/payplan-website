'use client';

import { defineConfig, defineType, defineField } from 'sanity';
import { structureTool } from 'sanity/structure';

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Default Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string', initialValue: '0800 316 1833' }),
    defineField({ name: 'trustpilotRating', title: 'Trustpilot Rating', type: 'string', initialValue: '4.5/5' }),
    defineField({ name: 'peopleHelped', title: 'People Helped', type: 'string', initialValue: '3m+' }),
    defineField({ name: 'yearsOperating', title: 'Years Operating', type: 'string', initialValue: '30+' }),
    defineField({ name: 'footerLegalText', title: 'Footer Legal Text', type: 'text', rows: 4 }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});

const solution = defineType({
  name: 'solution',
  title: 'Debt Solution',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'shortName', title: 'Short Name', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'region', title: 'Region', type: 'string', options: { list: [{ title: 'England & Wales', value: 'england-wales' }, { title: 'Scotland', value: 'scotland' }, { title: 'Both', value: 'both' }] }, initialValue: 'england-wales' }),
    defineField({ name: 'atAGlance', title: 'At a Glance', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'label', type: 'string', title: 'Label' }), defineField({ name: 'value', type: 'string', title: 'Value' })] }] }),
    defineField({ name: 'eligibility', title: 'Eligibility', type: 'object', fields: [defineField({ name: 'maySuit', title: 'May suit you if', type: 'array', of: [{ type: 'string' }] }), defineField({ name: 'worthKnowing', title: 'Things worth knowing', type: 'array', of: [{ type: 'string' }] })] }),
    defineField({ name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faqItem' }] }] }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'shortName' } },
});

const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'name', title: 'Customer Name', type: 'string' }),
    defineField({ name: 'solution', title: 'Solution', type: 'reference', to: [{ type: 'solution' }] }),
    defineField({ name: 'source', title: 'Source', type: 'string', options: { list: [{ title: 'Trustpilot', value: 'trustpilot' }, { title: 'Google', value: 'google' }, { title: 'Direct', value: 'direct' }] } }),
    defineField({ name: 'rating', title: 'Star Rating', type: 'number', validation: (r) => r.min(1).max(5) }),
  ],
  preview: { select: { title: 'name', subtitle: 'quote' }, prepare: ({ title, subtitle }) => ({ title: title || 'Anonymous', subtitle: subtitle?.slice(0, 80) + '...' }) },
});

const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'array', of: [{ type: 'block' }], validation: (r) => r.required() }),
    defineField({ name: 'solutions', title: 'Related Solutions', type: 'array', of: [{ type: 'reference', to: [{ type: 'solution' }] }] }),
  ],
  preview: { select: { title: 'question' } },
});

const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: [{ title: 'Debt Info', value: 'debt-info' }, { title: 'Advice', value: 'advice' }, { title: 'Guides', value: 'guides' }] }, initialValue: 'debt-info' }),
    defineField({ name: 'relatedSolutions', title: 'Related Solutions', type: 'array', of: [{ type: 'reference', to: [{ type: 'solution' }] }] }),
    defineField({ name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'category' } },
});

const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'publishedAt', title: 'Published Date', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt' }, prepare: ({ title, subtitle }) => ({ title, subtitle: subtitle ? new Date(subtitle).toLocaleDateString('en-GB') : '' }) },
});

export default defineConfig({
  name: 'payplan',
  title: 'PayPlan',
  projectId: '0w7asqgt',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [siteSettings, solution, testimonial, faqItem, article, blogPost],
  },
});
