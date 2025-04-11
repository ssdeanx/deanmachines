import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: { dark: "one-dark-pro", light: "github-light" },
  keepBackground: false,
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    image: { type: "string", required: false },
    authors: { type: "list", of: { type: "string" }, required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc: { _raw: { sourceFileName: string } }) =>
        doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    slugAsParams: {
      type: "string",
      resolve: (doc: { _raw: { sourceFileName: string } }) =>
        doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc: { _raw: { sourceFileName: string } }) =>
        doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    slugAsParams: {
      type: "string",
      resolve: (doc: { _raw: { sourceFileName: string } }) =>
        doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post, Doc],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [
      remarkParse,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkRehype
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode as never, rehypePrettyCodeOptions],
    ],
  },
});
