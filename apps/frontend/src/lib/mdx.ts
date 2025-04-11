import { compile, type CompileOptions } from "@mdx-js/mdx";
import matter from "gray-matter";
import type { VFile } from "vfile";
import remarkGfm from "remark-gfm"; // Example remark plugin
import rehypePrettyCode from "rehype-pretty-code"; // Example rehype plugin

// Add other remark/rehype plugins as needed

/**
 * Represents the result of processing an MDX file.
 */
export interface MdxResult<TFrontmatter extends Record<string, unknown>> {
  /** The compiled JavaScript code as a string. */
  code: string;
  /** The parsed frontmatter object. */
  frontmatter: TFrontmatter;
  /** The VFile object representing the processed file. */
  file: VFile;
}

/**
 * Options for the rehype-pretty-code plugin.
 * Adjust according to the plugin's documentation.
 */
const rehypePrettyCodeOptions = {
  theme: "github-dark", // Example theme
  // Add other options like keepBackground: false if needed
};

/**
 * Processes an MDX string, separating frontmatter and compiling the content.
 *
 * @template TFrontmatter - The expected type of the frontmatter object.
 * @param source - The raw MDX string content.
 * @param options - Optional MDX compile options.
 * @returns A promise resolving to an MdxResult object containing the compiled code and frontmatter.
 * @throws Will throw an error if frontmatter parsing or MDX compilation fails.
 */
export async function processMdx<
  TFrontmatter extends Record<string, unknown>,
>(
  source: string,
  options?: CompileOptions,
): Promise<MdxResult<TFrontmatter>> {
  try {
    // 1. Parse frontmatter
    const { data: frontmatter, content } = matter(source);

    // 2. Compile MDX content
    const file = await compile(content, {
      outputFormat: "function-body", // Common format for frameworks
      remarkPlugins: [remarkGfm], // Add remark plugins here
      rehypePlugins: [[rehypePrettyCode as never, rehypePrettyCodeOptions]], // Add rehype plugins here
      ...options, // Allow overriding default options
    });

    const code = String(file); // Get the compiled code as a string

    return {
      code,
      frontmatter: frontmatter as TFrontmatter, // Assume frontmatter matches the generic type
      file,
    };
  } catch (error: unknown) {
    console.error("Error processing MDX:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to process MDX: ${error.message}`, {
        cause: error,
      });
    }
    throw new Error("An unknown error occurred while processing MDX.");
  }
}

// Example Usage (can be removed or adapted):
/*
async function example() {
  const mdxSource = `---
title: "Hello MDX"
date: "2024-01-01"
---

# Welcome

This is **MDX** content with *frontmatter*!

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`
`;

  interface PostFrontmatter {
    title: string;
    date: string;
  }

  try {
    const { code, frontmatter } = await processMdx<PostFrontmatter>(mdxSource);
    console.log("Frontmatter:", frontmatter);
    console.log("Compiled Code Snippet:", code.substring(0, 200) + "...");
    // You would typically use this 'code' with a library like 'next-mdx-remote'
    // or evaluate it in a specific environment.
  } catch (error) {
    console.error(error);
  }
}

example();
*/
