"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Card component for documentation links
 * Used in MDX files to create clickable card elements with title and content
 */
export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    href: string;
    className?: string;
    children: React.ReactNode;
  }
>(({ href, className, children, ...props }, ref) => {
  return (
    <Link href={href} passHref>
      <div
        ref={ref}
        className={cn(
          "group relative rounded-lg border p-4 hover:border-primary hover:shadow-sm transition-all",
          "hover:bg-accent/50 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </Link>
  );
});

Card.displayName = "Card";

export default Card;
