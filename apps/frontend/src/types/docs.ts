/**
 * Interface representing a documentation entry
 */
export interface Doc {
  /** The full URL-friendly slug */
  slug: string;
  /** The slug as URL parameters */
  slugAsParams: string;
  /** The document body */
  body: {
    /** Raw content of the document */
    raw: string;
    /** Compiled MDX code */
    code: string;
  };
  /** Document title */
  title: string;
  /** Document description */
  description?: string;
  /** Publication date if applicable */
  date?: string;
  /** Document authors */
  authors?: string[];
  /** Document tags/categories */
  tags?: string[];
}

/**
 * Interface representing a table of contents entry
 */
export interface TableOfContentsItem {
  /** Entry title */
  title: string;
  /** Link URL */
  url: string;
  /** Optional nested items */
  items?: TableOfContentsItem[];
}

/**
 * Interface for the full table of contents
 */
export interface TableOfContents {
  /** Root level items */
  items?: TableOfContentsItem[];
}
