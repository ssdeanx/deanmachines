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
  title: "Agent Networks - deanmachines AI",
  description: "Learn how to create and manage networks of cooperating AI agents.",
}

export default async function NetworksPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "core-concepts/networks")

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
              title: "Memory Management",
              href: "/docs/core-concepts/memory",
            },
            next: {
              title: "Deployment",
              href: "/docs/core-concepts/deployment",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in NetworksPage:", error)
    throw error
  }
}
