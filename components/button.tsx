"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary-foreground))] focus:ring-[hsl(var(--primary))] focus:ring-offset-2 dark:bg-[hsl(var(--primary))] dark:text-white dark:hover:bg-[hsl(var(--primary-foreground))] dark:focus:ring-[hsl(var(--primary))]",
        destructive:
          "bg-[hsl(var(--error))] text-white hover:bg-[hsl(var(--error-foreground))] focus:ring-[hsl(var(--error))] focus:ring-offset-2 dark:bg-[hsl(var(--error))] dark:text-white dark:hover:bg-[hsl(var(--error-foreground))] dark:focus:ring-[hsl(var(--error))]",
        outline:
          "border border-gray-300 bg-[hsl(var(--background))] text-foreground hover:bg-gray-50 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-600 dark:bg-[hsl(var(--default))] dark:text-muted-foreground dark:hover:bg-gray-700 dark:focus:ring-gray-600",
        secondary:
          "bg-gray-200 text-foreground hover:bg-gray-300 focus:ring-gray-300 focus:ring-offset-2 dark:bg-gray-700 dark:text-muted-foreground dark:hover:bg-gray-600 dark:focus:ring-gray-600",
        ghost:
          "hover:bg-gray-100 hover:text-foreground focus:ring-gray-300 focus:ring-offset-2 dark:hover:bg-gray-700 dark:hover:text-muted-foreground dark:focus:ring-gray-600",
        link: "text-foreground underline-offset-4 hover:underline dark:text-muted-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
