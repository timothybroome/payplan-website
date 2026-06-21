import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '0w7asqgt',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
