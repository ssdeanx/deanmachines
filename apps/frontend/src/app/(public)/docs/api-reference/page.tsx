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
  title: "API Reference - deanmachines AI",
  description: "Complete API reference documentation for deanmachines AI platform.",
}

export default async function ApiReferencePage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "api-reference/overview")

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
              title: "Testing & Validation",
              href: "/docs/guides/testing",
            },
            next: {
              title: "Agent API",
              href: "/docs/api-reference/agent",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in ApiReferencePage:", error)
    throw error
  }
}
