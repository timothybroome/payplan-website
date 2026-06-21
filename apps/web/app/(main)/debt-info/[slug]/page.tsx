import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getArticle, getAllArticleSlugs } from '@/sanity/queries';

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return (slugs || []).map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-pp-cream/40 mb-8">
            <Link href="/" className="hover:text-pp-cream/70 transition-colors">Home</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
            <Link href="/debt-info" className="hover:text-pp-cream/70 transition-colors">Guides and advice</Link>
          </nav>
          <h1 className="pp-h-display max-w-3xl">{article.title}</h1>
          {article.summary && (
            <p className="pp-lede mt-6 max-w-2xl text-pp-cream/85">{article.summary}</p>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[740px] px-6">
          {article.body ? (
            <div className="pp-prose-body text-pp-ink/80 space-y-6 [&_h2]:pp-h-sub [&_h2]:text-pp-deep [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-pp-deep [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-pp-accent [&_a]:underline">
              <PortableText value={article.body} />
            </div>
          ) : (
            <p className="text-pp-ink/60">Content coming soon.</p>
          )}
        </div>
      </section>

      {article.relatedSolutions?.length > 0 && (
        <section className="bg-pp-cream-warm py-16 md:py-20">
          <div className="mx-auto max-w-[var(--container-readable)] px-6">
            <h2 className="pp-h-sub text-pp-deep">Related solutions</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {article.relatedSolutions.map((sol: { _id: string; title: string; shortName?: string; slug: string }) => (
                <Link
                  key={sol._id}
                  href={`/debt-solutions/${sol.slug}`}
                  className="rounded-pp border border-pp-line bg-pp-cream px-5 py-3 text-sm font-medium text-pp-deep hover:border-pp-accent hover:text-pp-accent transition-colors"
                >
                  {sol.shortName || sol.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
