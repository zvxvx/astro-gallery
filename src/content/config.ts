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
const bwCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      image: image(),
      date: z.date(),
    }),
});
const colorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      image: image(),
      date: z.date(),
    }),
});

export const collections = {
  blog: blogCollection,
  bw: bwCollection,
  color: colorCollection,
};
