'use client'
import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockWrapperProps extends React.HTMLAttributes<HTMLPreElement> {
  expandable?: boolean
}

export function CodeBlockWrapper({
  children,
  expandable,
  className,
  ...props
}: CodeBlockWrapperProps) {
  const [expanded, setExpanded] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const onCopy = async () => {
    if (typeof children === "string") {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <pre
      className={cn(
        "relative mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4",
        !expandable && "my-4",
        expandable && !expanded && "max-h-[350px]",
        className
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 hover:bg-background"
        onClick={onCopy}
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
      {children}
      {expandable && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 flex justify-center bg-gradient-to-b from-muted/30 to-muted pt-20",
            expanded && "hidden"
          )}
        >
          <Button
            variant="secondary"
            className="h-8 text-xs"
            onClick={() => setExpanded(true)}
          >
            Show more
          </Button>
        </div>
      )}
    </pre>
  )
}
