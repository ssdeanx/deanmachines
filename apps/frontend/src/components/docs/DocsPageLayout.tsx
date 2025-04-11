'use client'
import * as React from "react"
import { TableOfContents } from "@/types/toc"
import { Toc } from "./Toc"
import { DocsPagination } from "./DocsPagination"

interface DocsPageLayoutProps {
  children: React.ReactNode
  toc: TableOfContents
  pagination?: {
    prev?: { title: string; href: string }
    next?: { title: string; href: string }
  }
}

export function DocsPageLayout({ children, toc, pagination }: DocsPageLayoutProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="container flex-1">
        <div className="grid grid-cols-[1fr_300px] gap-12">
          <div>
            <article className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </article>
            {pagination && (
              <nav className="mt-8">
                <DocsPagination
                  prev={pagination.prev}
                  next={pagination.next}
                  aria-label="Pagination navigation"
                />
              </nav>
            )}
          </div>
          <div className="hidden xl:block">
            <div className="sticky top-16 -mt-10 max-h-[calc(100vh-3.5rem)] overflow-y-auto pt-10">
              <Toc toc={toc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
