'use client'
import * as React from "react"

import { TableOfContents } from "@/types/toc"
import { cn } from "@/lib/utils"
import { useTocHighlighting } from "@/hooks/use-toc-highlighting"

interface TocProps {
  toc: TableOfContents
}

export function Toc({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () => toc.items?.map((item) => item.url.slice(1)) ?? [],
    [toc]
  )
  const activeHeading = useTocHighlighting(itemIds)

  if (!toc?.items) {
    return null
  }

  return (
    <nav className="space-y-2" aria-label="Table of contents">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </nav>
  )
}

interface TreeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string | null
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                item.url.slice(1) === activeItem
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.url)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
