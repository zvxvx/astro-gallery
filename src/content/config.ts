import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    date: z.date(),
    description: z.string().optional(),
  }),
});
const photoCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      date: z.date(),
      category: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  photos: photoCollection,
};
