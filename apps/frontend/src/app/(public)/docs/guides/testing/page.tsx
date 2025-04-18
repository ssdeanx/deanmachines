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
  title: "Testing & Validation - deanmachines AI",
  description: "Learn how to test and validate your AI agents effectively.",
}

export default async function TestingGuidePage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "guides/testing")

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
              title: "Scaling Strategies",
              href: "/docs/guides/scaling",
            },
            next: {
              title: "API Reference",
              href: "/docs/api-reference",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in TestingGuidePage:", error)
    throw error
  }
}
