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
  title: "Scaling Strategies - deanmachines AI",
  description: "Learn how to scale your AI applications from prototype to production.",
}

export default async function ScalingGuidePage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "guides/scaling")

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
              title: "Monitoring & Observability",
              href: "/docs/guides/monitoring",
            },
            next: {
              title: "Testing & Validation",
              href: "/docs/guides/testing",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in ScalingGuidePage:", error)
    throw error
  }
}
