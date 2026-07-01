export const revalidate = 10;

import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticles } from '@/sanity/queries';

export const metadata: Metadata = {
  title: 'Guides and Advice — PayPlan',
  description:
    'Free guides on debt, money management, and financial wellbeing. Clear, practical advice from PayPlan.',
};

export default async function DebtInfoPage() {
  const articles = await getArticles();

  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h1 className="pp-h-display max-w-4xl">
            Guides and&nbsp;advice
          </h1>
          <p className="pp-lede mt-8 max-w-2xl text-pp-cream/85">
            Clear, practical information about debt, your options, and managing
            your money. No jargon, no judgement.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          {articles?.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article: { _id: string; title: string; slug: string; summary?: string; category?: string }) => (
                <Link
                  key={article._id}
                  href={`/debt-info/${article.slug}`}
                  className="group flex flex-col rounded-pp border border-pp-line bg-pp-cream p-7 shadow-sm hover:border-pp-accent hover:shadow-panel transition-all"
                >
                  {article.category && (
                    <span className="pp-h-tag text-pp-accent">{article.category}</span>
                  )}
                  <h2 className="pp-h-sub mt-3 text-pp-deep group-hover:text-pp-accent transition-colors">
                    {article.title}
                  </h2>
                  {article.summary && (
                    <p className="mt-3 flex-1 text-sm text-pp-ink/60 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-pp-ink/60">Articles coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
