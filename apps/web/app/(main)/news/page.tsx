export const revalidate = 60;

import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/sanity/queries';

export const metadata: Metadata = {
  title: 'Latest News — PayPlan',
  description: 'News and updates from PayPlan.',
};

export default async function NewsPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h1 className="pp-h-display max-w-4xl">Latest news</h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          {posts?.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post: { _id: string; title: string; slug: string; summary?: string; publishedAt?: string }) => (
                <Link
                  key={post._id}
                  href={`/news/${post.slug}`}
                  className="group flex flex-col gap-2 rounded-pp border border-pp-line bg-pp-cream p-7 shadow-sm hover:border-pp-accent hover:shadow-panel transition-all sm:flex-row sm:items-start sm:gap-8"
                >
                  <div className="shrink-0">
                    {post.publishedAt && (
                      <time className="text-sm text-pp-ink/40 tabular-nums">
                        {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </time>
                    )}
                  </div>
                  <div>
                    <h2 className="pp-h-sub text-pp-deep group-hover:text-pp-accent transition-colors">
                      {post.title}
                    </h2>
                    {post.summary && (
                      <p className="mt-2 text-sm text-pp-ink/60 leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-pp-ink/60">News articles coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
