import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { type Doc } from "@/types/docs"
import { getTableOfContents } from "@/lib/toc"
import { Mdx } from "@/components/docs/mdx"
import { DocsPageLayout } from "@/components/docs/DocsPageLayout"
import { DocsLayoutWrapper } from "@/components/docs/DocsLayoutWrapper"

// Temporary mock for contentlayer until it's properly set up
const allDocs: Doc[] = []

export const metadata: Metadata = {
  title: "Memory Management - deanmachines AI",
  description: "Learn how AI agents maintain context and learn from interactions using the memory system.",
}

export default async function MemoryPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "core-concepts/memory")

    if (!doc) {
      notFound()
    }

    const toc = await getTableOfContents(doc.body.raw)

    return (
      <DocsLayoutWrapper>
        <DocsPageLayout
          toc={{ items: toc }}
          pagination={{
            prev: {
              title: "AI Agents",
              href: "/docs/core-concepts/agents",
            },
            next: {
              title: "Agent Networks",
              href: "/docs/core-concepts/networks",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in MemoryPage:", error)
    throw error
  }
}
