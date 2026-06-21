import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/your-plan', '/api/'],
      },
    ],
    sitemap: 'https://www.payplan.com/sitemap.xml',
  };
}
