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
  title: "Deployment API Reference - deanmachines AI",
  description: "Complete API reference for deployment and infrastructure management.",
}

export default async function DeploymentApiPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "api-reference/deployment")

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
              title: "Network API",
              href: "/docs/api-reference/network",
            },
            next: {
              title: "CLI Reference",
              href: "/docs/api-reference/cli",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in DeploymentApiPage:", error)
    throw error
  }
}
