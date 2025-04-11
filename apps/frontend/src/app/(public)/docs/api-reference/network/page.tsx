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
  title: "Network API Reference - deanmachines AI",
  description: "Complete API reference for agent networks and communication.",
}

export default async function NetworkApiPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "api-reference/network")

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
              title: "Memory API",
              href: "/docs/api-reference/memory",
            },
            next: {
              title: "Deployment API",
              href: "/docs/api-reference/deployment",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in NetworkApiPage:", error)
    throw error
  }
}
