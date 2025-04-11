'use client'
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"

import { type NavItem, type NavSection } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface DocsSidebarProps {
  items: NavSection[]
}

export function DocsSidebar({ items }: DocsSidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = React.useState<string[]>([])

  const toggleSection = React.useCallback((title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    )
  }, [])

  const renderNavItem = React.useCallback((item: NavItem) => (
    <Link
      key={item.href}
      href={item.href ?? "#"}
      className={cn(
        "flex w-full items-center rounded-md p-2 hover:underline",
        {
          "text-foreground font-medium": pathname === item.href,
          "text-muted-foreground": pathname !== item.href,
          "opacity-60": item.disabled,
        }
      )}
      {...(item.disabled && {
        "aria-disabled": true,
        tabIndex: -1,
      })}
      {...(item.external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <span>{item.title}</span>
      {item.label && (
        <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium leading-none text-muted-foreground">
          {item.label}
        </span>
      )}
    </Link>
  ), [pathname])

  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)] py-6 pl-8 pr-6 lg:py-8">
      <nav className="w-full" aria-label="Documentation sidebar">
        {items.map((section, index) => (
          <div key={section.title} className="pb-4">
            <Button
              variant="ghost"
              className="flex w-full items-center justify-between p-2 font-semibold"
              onClick={() => toggleSection(section.title)}
              aria-expanded={openSections.includes(section.title)}
              aria-controls={`section-${section.title}`}
            >
              {section.title}
              <ChevronDownIcon
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openSections.includes(section.title) && "rotate-180"
                )}
                aria-hidden="true"
              />
            </Button>
            {openSections.includes(section.title) && (
              <div
                id={`section-${section.title}`}
                className="grid grid-flow-row auto-rows-max py-2 text-sm"
              >
                {section.items?.map(renderNavItem)}
              </div>
            )}
            {index < items.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </nav>
    </ScrollArea>
  )
}
