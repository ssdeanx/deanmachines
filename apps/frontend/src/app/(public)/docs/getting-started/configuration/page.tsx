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
  title: "Configuration - deanmachines AI",
  description: "Configure your deanmachines AI project and development environment.",
}

export default async function ConfigurationPage() {
  try {
    const doc = allDocs.find((doc) => doc.slugAsParams === "getting-started/configuration")

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
              title: "Installation",
              href: "/docs/getting-started/installation",
            },
            next: {
              title: "Core Concepts",
              href: "/docs/core-concepts",
            },
          }}
        >
          <Mdx code={doc.body.code} />
        </DocsPageLayout>
      </DocsLayoutWrapper>
    )
  } catch (error) {
    console.error("Error in ConfigurationPage:", error)
    throw error
  }
}
