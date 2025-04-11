"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
 import { BookIcon, FileIcon, SearchIcon } from "lucide-react"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { mockDocs } from "@/lib/mock-docs"
import { type Doc } from "@/types/docs"

/**
 * Custom hook for fuzzy searching through documentation content
 *
 * @param query - The search query string
 * @returns An array of search results with title, content snippet, and href
 */
function useDocsSearch(query: string) {
  // Store search results
  const [results, setResults] = React.useState<Array<{
    title: string
    content: string
    href: string
    type: "nav" | "content"
  }>>([]);

  React.useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();

    // Search through navigation items
    const navResults = docsConfig.sidebarNav.flatMap((section) =>
      section.items
        .filter((item) =>
          item.title.toLowerCase().includes(lowercaseQuery)
        )
        .map((item) => ({
          title: item.title,
          content: "Navigation item",
          href: item.href,
          type: "nav" as const,
        }))
    );

    // Search through mock docs content
    const contentResults = Object.values(mockDocs)
      .filter((doc: Doc) => {
        // Search in title and content
        const titleMatch = doc.title.toLowerCase().includes(lowercaseQuery);
        const contentMatch = doc.body.raw.toLowerCase().includes(lowercaseQuery);
        return titleMatch || contentMatch;
      })
      .map((doc: Doc) => {
        // Extract a snippet of content around the search term
        const rawContent = doc.body.raw;
        const queryIndex = rawContent.toLowerCase().indexOf(lowercaseQuery);

        let contentSnippet = "";
        if (queryIndex >= 0) {
          // Extract text around the match
          const start = Math.max(0, queryIndex - 40);
          const end = Math.min(rawContent.length, queryIndex + 100);
          contentSnippet = (start > 0 ? "..." : "") +
            rawContent.slice(start, end).replace(/\n/g, " ") +
            (end < rawContent.length ? "..." : "");
        } else {
          // If match is in the title but not content, use the first part of content
          contentSnippet = rawContent.slice(0, 80).replace(/\n/g, " ") + "...";
        }

        return {
          title: doc.title,
          content: contentSnippet,
          href: `/docs/${doc.slugAsParams}`,
          type: "content" as const,
        };
      });

    // Sort results to prioritize titles matches over content matches
    const sortedResults = [...navResults, ...contentResults].sort((a, b) => {
      // Title matches come first
      const aHasTitle = a.title.toLowerCase().includes(lowercaseQuery);
      const bHasTitle = b.title.toLowerCase().includes(lowercaseQuery);

      if (aHasTitle && !bHasTitle) return -1;
      if (!aHasTitle && bHasTitle) return 1;

      // Then sort alphabetically
      return a.title.localeCompare(b.title);
    });

    // Limit results
    setResults(sortedResults.slice(0, 10));
  }, [query]);

  return results;
}

/**
 * Documentation search component with keyboard shortcut support
 */
export function DocsSearch({ className, ...props }: React.ComponentPropsWithoutRef<typeof Button>) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const results = useDocsSearch(query)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    setQuery("")
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
          className
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        Search docs...
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={(open) => {
        setOpen(open)
        if (!open) {
          // Reset search when dialog closes
          setQuery("")
        }
      }}>
        <CommandInput
          placeholder="Search documentation..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {results.length > 0 && (
            <>
              <CommandGroup heading="Documentation">
                {results
                  .filter(result => result.type === "nav")
                  .map((result, index) => (
                    <CommandItem
                      key={`${result.href}-${index}`}
                      value={`${result.title}-nav`}
                      onSelect={() => {
                        runCommand(() => router.push(result.href))
                      }}
                    >
                      <FileIcon className="mr-2 h-4 w-4" />
                      <div>
                        {result.title}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>

              {results.some(result => result.type === "content") && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Content Results">
                    {results
                      .filter(result => result.type === "content")
                      .map((result, index) => (
                        <CommandItem
                          key={`${result.href}-${index}`}
                          value={`${result.title}-content-${index}`}
                          onSelect={() => {
                            runCommand(() => router.push(result.href))
                          }}
                        >
                          <BookIcon className="mr-2 h-4 w-4 shrink-0" />
                          <div className="overflow-hidden">
                            <div className="font-medium">{result.title}</div>
                            <p className="truncate text-xs text-muted-foreground">
                              {result.content}
                            </p>
                          </div>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
