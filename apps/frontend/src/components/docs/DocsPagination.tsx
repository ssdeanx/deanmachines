'use client'
import * as React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DocsPaginationProps {
  prev?: {
    href: string
    title: string
  }
  next?: {
    href: string
    title: string
  }
}

export function DocsPagination({ prev, next }: DocsPaginationProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      {prev ? (
        <Link
          href={prev.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "gap-2 hover:bg-transparent hover:text-foreground"
          )}
          rel="prev"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <span>
            <span className="block text-sm text-muted-foreground">Previous</span>
            <span className="block text-base">{prev.title}</span>
          </span>
        </Link>
      ) : null}
      {next ? (
        <Link
          href={next.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "ml-auto gap-2 text-right hover:bg-transparent hover:text-foreground"
          )}
          rel="next"
        >
          <span>
            <span className="block text-sm text-muted-foreground">Next</span>
            <span className="block text-base">{next.title}</span>
          </span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        ) : null}
      </div>
    )
  }
