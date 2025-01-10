/**
 * @file functions.ts
 * @description Utility functions for type checking and className management
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// NextUI className utility
/**
 * Combines multiple class names using clsx and tailwind-merge
 * This is used for combining Tailwind CSS classes safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a color value using NextUI's CSS variable format
 */
export function color(value: string) {
  return `hsl(var(--${value}))`;
}

/**
 * Creates a responsive style string with different values for breakpoints
 */
export function responsive(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
): string {
  return cn(
    base,
    sm && `sm:${sm}`,
    md && `md:${md}`,
    lg && `lg:${lg}`,
    xl && `xl:${xl}`,
  );
}

/**
 * Type guard for checking if a value is a non-null object
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

/**
 * Type guard for checking if an object has specific properties
 */
export function hasProperties<T extends object>(
  value: unknown,
  properties: (keyof T)[],
): value is T {
  if (!isObject(value)) return false;

  return properties.every((prop) => prop in value);
}

/**
 * Creates variant classes for NextUI components
 */
export function variants(
  baseClass: string,
  variants: Record<string, Record<string, string>>,
) {
  return ({
    variant,
    size,
    color,
  }: {
    variant?: string;
    size?: string;
    color?: string;
  }) => {
    return cn(
      baseClass,
      variant && variants.variant?.[variant],
      size && variants.size?.[size],
      color && variants.color?.[color],
    );
  };
}

/**
 * Formats NextUI theme values
 */
export function formatThemeValue(value: string | number, unit = "px"): string {
  if (typeof value === "number") {
    return `${value}${unit}`;
  }

  return value;
}

/**
 * Creates a compound class string for NextUI components
 */
export function compound(...classes: Array<string | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Checks if current mode is dark
 */
export function isDarkMode(): boolean {
  if (typeof window === "undefined") return false;

  return document.documentElement.classList.contains("dark");
}

/**
 * Validates aria props
 */
export function validateAriaProps(props: Record<string, unknown>) {
  const ariaProps: Record<string, unknown> = {};

  Object.keys(props).forEach((key) => {
    if (key.startsWith("aria-")) {
      ariaProps[key] = props[key];
    }
  });

  return ariaProps;
}

/**
 * Creates a size value using NextUI's scale
 */
export function size(value: string | number) {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return `var(--nextui-space-${value})`;
}

/**
 * Creates an opacity value using NextUI's scale
 */
export function opacity(value: number) {
  return `var(--nextui-opacity-${value})`;
}
