import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';
import { redirects as seoRedirects } from './redirects';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@payplan/design-tokens'],
  outputFileTracingRoot: path.join(__dirname, '../../'),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async redirects() {
    return seoRedirects;
  },
};

export default nextConfig;
