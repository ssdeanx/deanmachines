import * as React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Button props interface - defined locally since it's not exported from the button component
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

/**
 * Valid button variant types - extracted from button component
 */
type ButtonVariant = NonNullable<ButtonProps["variant"]>;

/**
 * Valid button size types - extracted from button component
 */
type ButtonSize = NonNullable<ButtonProps["size"]>;

/**
 * Props for the CallToAction component
 *
 * @interface CallToActionProps
 * @property {string} title - The primary text for the call to action button
 * @property {string} [description] - Optional descriptive text displayed below the title
 * @property {string} href - The destination URL when clicked
 * @property {LucideIcon} [icon] - Optional icon to display alongside the text
 * @property {React.ReactNode} [endIcon] - Optional custom icon at the end (defaults to ArrowRight if showArrow is true)
 * @property {string} [className] - Additional CSS classes to apply
 * @property {ButtonVariant} [variant="default"] - Button styling variant
 * @property {ButtonSize} [size="default"] - Size variant for the button
 * @property {boolean} [external=false] - Whether the link points to an external site
 * @property {boolean} [showArrow=false] - Whether to show an arrow icon at the end
 * @property {boolean} [disabled=false] - Whether the button is disabled
 * @property {(event: React.MouseEvent<HTMLAnchorElement>) => void} [onClick] - Optional click handler with proper event typing
 * @property {string} [ariaLabel] - Optional custom aria-label (will be auto-generated for external links if not provided)
 */
interface CallToActionProps {
  title: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
  endIcon?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  showArrow?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
}

/**
 * Enhanced Call to Action component with modern styling and animations
 *
 * Features:
 * - Support for internal/external links with proper TypeScript types
 * - Optional description text with responsive truncation
 * - Customizable icons with animation
 * - Multiple button variants and sizes using type references
 * - Enhanced accessibility with proper ARIA attributes
 * - Modern hover effects and animations
 * - Reduced motion support
 * - Memoized event handlers for performance
 *
 * @param props - Component props
 * @returns A styled call-to-action button or link component
 * @throws Will throw an error if href is not provided while not disabled
 */
export function CallToAction({
  title,
  description,
  href,
  icon: Icon,
  endIcon,
  className,
  variant = "default",
  size = "default",
  external = false,
  showArrow = false,
  disabled = false,
  onClick,
  ariaLabel,
}: CallToActionProps): JSX.Element {
  // Validate required props
  if (!disabled && !href) {
    throw new Error("CallToAction component requires an href when not disabled");
  }

  // Determine the appropriate component based on link type
  const Comp = external ? "a" : Link;

  // Memoize click handler to prevent unnecessary re-renders
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>): void => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      onClick?.(event);
    },
    [disabled, onClick]
  );

  // Generate appropriate aria label
  const accessibilityLabel = React.useMemo(() => {
    if (ariaLabel) return ariaLabel;
    return external ? `${title} (opens in new tab)` : undefined;
  }, [ariaLabel, external, title]);

  return (
    <Comp
      href={disabled ? "#" : href}
      className={cn(
        buttonVariants({ variant, size }),
        "group inline-flex items-center gap-2 relative overflow-hidden transition-all duration-300",
        "focus-visible:ring-2 focus-visible:ring-primary/50 focus:outline-none",
        disabled && "opacity-60 pointer-events-none",
        className
      )}
      onClick={handleClick}
      aria-label={accessibilityLabel}
      aria-disabled={disabled ? true : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {Icon && (
        <span
          className="shrink-0 transition-transform duration-300 motion-reduce:transition-none group-hover:scale-110"
          aria-hidden="true"
        >
          <Icon className="size-4" />
        </span>
      )}

      <div className="text-left">
        <div className="text-base font-semibold">{title}</div>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-1 @md:line-clamp-none">
            {description}
          </p>
        )}
      </div>

      {showArrow && !endIcon && (
        <span
          className="ms-auto"
          aria-hidden="true"
        >
          <ArrowRight
            className="size-4 transition-transform duration-300
              group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </span>
      )}

      {endIcon && (
        <span
          className="ms-auto"
          aria-hidden="true"
        >
          {endIcon}
        </span>
      )}

      {/* Modern hover effect overlay for primary variant */}
      {variant === "default" && !disabled && (
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100
            transition-opacity duration-300 motion-reduce:transition-none"
        />
      )}
    </Comp>
  );
}
