import type { MetadataRoute } from 'next';
import { getAllSolutionSlugs, getAllArticleSlugs, getAllBlogSlugs } from '@/sanity/queries';

const BASE_URL = 'https://www.payplan.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [solutionSlugs, articleSlugs, blogSlugs] = await Promise.all([
    getAllSolutionSlugs(),
    getAllArticleSlugs(),
    getAllBlogSlugs(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/where-do-i-start`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/debt-solutions`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/check-your-options`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/life-after-debt`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/debt-info`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/news`, changeFrequency: 'weekly', priority: 0.5 },
  ];

  const solutionPages: MetadataRoute.Sitemap = (solutionSlugs || []).map(
    (slug: string) => ({
      url: `${BASE_URL}/debt-solutions/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }),
  );

  const articlePages: MetadataRoute.Sitemap = (articleSlugs || []).map(
    (slug: string) => ({
      url: `${BASE_URL}/debt-info/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }),
  );

  const blogPages: MetadataRoute.Sitemap = (blogSlugs || []).map(
    (slug: string) => ({
      url: `${BASE_URL}/news/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    }),
  );

  return [...staticPages, ...solutionPages, ...articlePages, ...blogPages];
}
