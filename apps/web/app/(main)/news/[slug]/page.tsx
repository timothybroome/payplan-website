import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getBlogPost, getAllBlogSlugs } from '@/sanity/queries';

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return (slugs || []).map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-pp-cream/40 mb-8">
            <Link href="/" className="hover:text-pp-cream/70 transition-colors">Home</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
            <Link href="/news" className="hover:text-pp-cream/70 transition-colors">News</Link>
          </nav>
          <h1 className="pp-h-display max-w-3xl">{post.title}</h1>
          {post.publishedAt && (
            <time className="mt-6 block text-sm text-pp-cream/50">
              {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[740px] px-6">
          {post.body ? (
            <div className="pp-prose-body text-pp-ink/80 space-y-6 [&_h2]:pp-h-sub [&_h2]:text-pp-deep [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-pp-deep [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-pp-accent [&_a]:underline">
              <PortableText value={post.body} />
            </div>
          ) : (
            <p className="text-pp-ink/60">Content coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
