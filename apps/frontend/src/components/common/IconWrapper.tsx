
import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * IconWrapper component for consistent icon presentation
 *
 * Features:
 * - Standardized icon sizing
 * - Customizable variants
 * - Proper accessibility attributes
 * - Optional background and color variants
 * - Support for hover effects
 *
 * @param icon - The Lucide icon component to render
 * @param size - Size variant (sm, md, lg, xl)
 * @param variant - Visual style variant
 * @param className - Additional CSS classes
 * @returns A wrapped icon component
 */
interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "outline" | "solid" | "ghost";
  withBackground?: boolean;
  withHoverEffect?: boolean;
}

const sizeClasses = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const;

const variantClasses = {
  default: "",
  outline: "border rounded-md p-1",
  solid: "bg-primary text-primary-foreground rounded-md p-1",
  ghost: "text-muted-foreground hover:text-foreground transition-colors",
} as const;

export function IconWrapper({
  icon: Icon,
  size = "md",
  variant = "default",
  withBackground = false,
  withHoverEffect = false,
  className,
  ...props
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        variant !== "default" && variantClasses[variant],
        withBackground && "bg-muted/40 rounded-md p-1",
        withHoverEffect && "transition-all duration-300 hover:scale-110",
        className
      )}
      {...props}
    >
      <Icon
        className={cn(sizeClasses[size])}
        aria-hidden="true"
      />
    </div>
  )
}
