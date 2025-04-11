'use client'
import * as React from "react"
import { docsConfig } from "@/config/docs"
import { DocsSidebar } from "./DocsSidebar"
import { DocsSearch } from "./DocsSearch"

interface DocsLayoutWrapperProps {
  children: React.ReactNode
}

export function DocsLayoutWrapper({ children }: DocsLayoutWrapperProps) {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="relative h-full py-6 pl-8 pr-6 lg:py-8">
            <DocsSidebar items={docsConfig.sidebarNav} />
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center justify-between">
              <DocsSearch />
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
