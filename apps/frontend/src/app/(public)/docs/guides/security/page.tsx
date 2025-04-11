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
  title: "Security Best Practices - deanmachines AI",
  description: "Learn how to secure your AI applications and protect sensitive data.",
}

export default async function SecurityGuidePage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "guides/security")

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
              title: "Guides",
              href: "/docs/guides",
            },
            next: {
              title: "Monitoring & Observability",
              href: "/docs/guides/monitoring",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in SecurityGuidePage:", error)
    throw error
  }
}
