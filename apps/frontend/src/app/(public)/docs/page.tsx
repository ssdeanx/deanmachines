import { type Metadata } from "next"
import { getTableOfContents } from "@/lib/toc"
import { Mdx } from "@/components/docs/mdx"
import { DocsPageLayout } from "@/components/docs/DocsPageLayout"
import { DocsLayoutWrapper } from "@/components/docs/DocsLayoutWrapper"

export const metadata: Metadata = {
  title: "Documentation - deanmachines AI",
  description: "Learn how to build and deploy AI agents with deanmachines.",
}

// Temporary mock until Contentlayer is properly generating
const mockDoc = {
  slugAsParams: "introduction",
  body: {
    raw: "# Introduction\n\nWelcome to deanmachines AI documentation.",
    code: "# Introduction\n\nWelcome to deanmachines AI documentation."
  }
}

export default async function DocsPage() {
  // Temporary mock doc while Contentlayer is not working in dev mode
  const doc = {
    slugAsParams: "introduction",
    body: {
      raw: "# Introduction\n\nWelcome to deanmachines AI documentation. This is a temporary placeholder while in development.",
      code: "# Introduction\n\nWelcome to deanmachines AI documentation. This is a temporary placeholder while in development."
    }
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <DocsLayoutWrapper>
      <DocsPageLayout
        toc={{ items: toc }}
        pagination={{
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
}
