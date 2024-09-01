import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

export default defineConfig({
  site: 'https://ShuiTang.github.io',
  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    },
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeHeadingIds],
    extendDefaultPlugins: true,
  },
});
