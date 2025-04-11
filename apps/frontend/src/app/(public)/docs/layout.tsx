import { docsConfig } from "@/config/docs"
import { DocsLayoutWrapper } from "@/components/docs/DocsLayoutWrapper"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <DocsLayoutWrapper>
      {children}
    </DocsLayoutWrapper>
  )
}
