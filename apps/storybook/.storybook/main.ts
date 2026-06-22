import type { StorybookConfig } from '@storybook/react-vite';
import { join } from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

const stubs = join(__dirname, '../stubs');

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    config.plugins.push(react());

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': join(__dirname, '../../web'),
      '@components': join(__dirname, '../../web/components'),
      'next/image': join(stubs, 'next-image.tsx'),
      'next/link': join(stubs, 'next-link.tsx'),
      'next/navigation': join(stubs, 'next-navigation.ts'),
      '@/sanity/image': join(stubs, 'sanity-image.ts'),
    };
    return config;
  },
};

export default config;
