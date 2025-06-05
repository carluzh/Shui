import { defineCollection, z } from "astro:content";

const writingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    image: z.string().optional(),
    colorClass: z.string(),  // Add this line
  }),
});

export const collections = {
  writing: writingCollection,
};
