/**
 * Table of Contents type definitions
 * @description Defines the structure for documentation page table of contents
 */

export interface TableOfContentsItem {
  title: string;
  url: string;
  items?: TableOfContentsItem[];
}

export interface TableOfContents {
  items?: TableOfContentsItem[];
}
