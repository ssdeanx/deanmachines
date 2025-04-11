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
  title: "Core Concepts - deanmachines AI",
  description: "Learn about the fundamental concepts and architecture of deanmachines AI.",
}

export default async function CoreConceptsPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "core-concepts/overview")

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
              title: "Configuration",
              href: "/docs/getting-started/configuration",
            },
            next: {
              title: "AI Agents",
              href: "/docs/core-concepts/agents",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in CoreConceptsPage:", error)
    throw error
  }
}
