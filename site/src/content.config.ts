import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categoryEnum = z.enum([
  'ai-agents',
  'lead-gen',
  'email',
  'video',
  'voice',
  'social-media',
  'onboarding',
  'chat',
]);

const workflows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workflows' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: categoryEnum,
    file: z.string(),
    fileSize: z.string(),
    format: z.enum(['json', 'zip']),
    tags: z.array(z.string()),
    description: z.string(),
    useCases: z.array(z.string()),
    requiredIntegrations: z.array(z.string()),
    nodesCount: z.number().optional(),
    dateAdded: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { workflows };
