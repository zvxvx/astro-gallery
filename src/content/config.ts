import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    date: z.date(),
    description: z.string().optional()
  }),
});

export const collections = {
  'blog': blogCollection,
};