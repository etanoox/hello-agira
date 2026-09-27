import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: z.object({
    entityId: z.literal('agira'),
    lang: z.enum(['it', 'en']),
    title: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']),
    reviewedAt: z.coerce.date(),
    sources: z.array(z.url()),
  }),
});
export const collections = { home };
