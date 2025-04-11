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
  title: "Getting Started - deanmachines AI",
  description: "Get started with deanmachines AI and create your first project.",
}

export default async function GettingStartedPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "getting-started/overview")

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
              title: "Introduction",
              href: "/docs",
            },
            next: {
              title: "Installation",
              href: "/docs/getting-started/installation",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in GettingStartedPage:", error)
    throw error
  }
}
