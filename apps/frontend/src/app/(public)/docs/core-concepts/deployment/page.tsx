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
  title: "Deployment - deanmachines AI",
  description: "Learn how to deploy and scale your AI applications in production environments.",
}

export default async function DeploymentPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "core-concepts/deployment")

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
              title: "Agent Networks",
              href: "/docs/core-concepts/networks",
            },
            next: {
              title: "Guides",
              href: "/docs/guides",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in DeploymentPage:", error)
    throw error
  }
}
