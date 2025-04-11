import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { type Doc } from "@/types/docs"
import { getTableOfContents } from "@/lib/toc"
import { Mdx } from "@/components/docs/mdx"
import { DocsPageLayout } from "@/components/docs/DocsPageLayout"
import { DocsLayoutWrapper } from "@/components/docs/DocsLayoutWrapper"
import { mockDocs } from "@/lib/mock-docs"

// Temporary mock for contentlayer until it's properly set up
const allDocs: Doc[] = []

export const metadata: Metadata = {
  title: "AI Agents - deanmachines AI",
  description: "Understanding AI agents, their capabilities, and how to build them effectively.",
}

export default async function AgentsPage() {
  try {
    // Get doc from centralized mock data
    const doc = mockDocs["core-concepts/agents"];

    const toc = await getTableOfContents(doc.body.raw)

    return (
      <DocsLayoutWrapper>
        <DocsPageLayout
          toc={{ items: toc }}
          pagination={{
            prev: {
              title: "Core Concepts",
              href: "/docs/core-concepts",
            },
            next: {
              title: "Memory Management",
              href: "/docs/core-concepts/memory",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in AgentsPage:", error)
    throw error
  }
}
