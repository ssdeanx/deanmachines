import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";
// Import unified AST types from 'mdast'
import type {
  RootContent,
  InlineCode,
  ListItem,
  List,
  Root,
  Paragraph,
  Link,
  Text,
} from "mdast";
import type { Node } from "unist";

/**
 * Represents an item in the Table of Contents.
 */
export interface TocEntry {
  /** The text content of the heading. */
  title: string;
  /** The URL fragment identifier for the heading. */
  url: string;
  /** The depth level of the heading (e.g., 2 for h2, 3 for h3). */
  depth: number;
  /** Nested TOC entries for subheadings. */
  items?: TocEntry[];
}

/**
 * @param node - The MDast node (e.g., Paragraph, Heading).
 * @returns The extracted text content.
 */
function extractText(node: RootContent | Root): string {
  let text = "";
  // Visit only Text and InlineCode nodes within the provided node
  // Use a more general Node type for the visitor parameter and type guard inside
  visit(node, ["text", "inlineCode"], (visitedNode: Node) => {
    // Type guard ensures we only access 'value' on appropriate node types
    if (visitedNode.type === "text" || visitedNode.type === "inlineCode") {
      text += (visitedNode as Text | InlineCode).value;
    }
  });
  return text;
}

/**
 * Transforms a MDast List node (representing TOC structure) into an array of TocEntry objects.
 * Recursively processes nested lists.
 *
 * @param node - The MDast List node to transform, or potentially undefined/null.
 * @param currentDepth - The current heading depth level for this list.
 * @returns An array of TocEntry objects or undefined if the node is invalid or empty.
 */
function transformToc(
  node: List | undefined | null,
  currentDepth: number
): TocEntry[] | undefined {
  if (!node || node.type !== "list" || !node.children) {
    return undefined;
  }

  const entries: TocEntry[] = [];
  for (const listItem of node.children) {
    // Ensure the node is a valid ListItem with children
    if (listItem.type !== "listItem" || !listItem.children?.length) {
      continue;
    }

    const firstChild = listItem.children[0];
    let title = "";
    let url = "";

    // Expecting structure: ListItem > Paragraph > Link > (Text | InlineCode)
    if (firstChild?.type === "paragraph" && firstChild.children?.length) {
      const linkNode = firstChild.children[0];
      if (linkNode?.type === "link") {
        url = linkNode.url;
        // Extract text content from the link node's children
        title = extractText(linkNode);
      }
    }

    // If title or URL couldn't be extracted, skip this item
    if (!title || !url) {
      continue;
    }

    let items: TocEntry[] | undefined;
    // Check for a nested list (sub-items) which should be the second child
    if (listItem.children.length > 1) {
      const subList = listItem.children[1];
      // Ensure the second child is a list before recursing
      if (subList?.type === "list") {
        items = transformToc(subList, currentDepth + 1);
      }
    }

    // Add the entry to the list
    entries.push({
      title,
      url,
      depth: currentDepth,
      items: items?.length ? items : undefined, // Only add items array if it's not empty
    });
  } // End of for loop

  return entries.length > 0 ? entries : undefined; // Return undefined if no entries were generated
} // End of function transformToc

/**
 * Generates a Table of Contents (TOC) from raw Markdown/MDX content.
 *
 * @param content - The raw Markdown/MDX string.
 * @returns A promise that resolves to an array of TocEntry objects representing the TOC,
 *          or undefined if no TOC could be generated.
 * @throws Will throw an error if parsing fails.
 */
export async function getTableOfContents(
  content: string
): Promise<TocEntry[] | undefined> {
  try {
    const processor = remark().use(() => (tree: Root) => {
      // Use mdast-util-toc to generate the TOC structure within the tree
      // Cast tree to 'any' to resolve potential type conflicts from dependency mismatches.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = toc(tree as any, {
        heading: "toc", // Optional: Define a specific heading to look for if you want to customize TOC generation point
        maxDepth: 3, // Limit TOC depth to h2 and h3
        tight: true,
      });

      // Replace the tree content with just the generated TOC list if found
      if (result.map) {
        // result.map is List | undefined
        // If a TOC list was generated, replace the tree's children with it.
        // Cast result.map to the List type imported in this file to resolve potential type conflicts.
        tree.children = [result.map as List];
      } else {
        // Otherwise, clear the tree's children (no TOC).
        tree.children = [];
      }
    });

    const file = await processor.process(content);
    // Cast the result to Root, assuming the processor returns a Root node
    const root = file.result as Root;

    if (!root.children.length || root.children[0].type !== "list") {
      return undefined; // No TOC list found or generated
    }

    // Start transformation assuming the top level is depth 2 (h2)
    // Cast the first child to List as we've checked its type
    return transformToc(root.children[0] as List, 2);
  } catch (error) {
    console.error("Error generating table of contents:", error);
    // Optionally re-throw or return a specific value indicating failure
    throw error; // Or return undefined; depending on desired behavior
  }
}
