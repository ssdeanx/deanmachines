/**
 * @file functions.ts
 * @description Core utility functions for styling, type checking, and UI operations
 * @module services/functions
 */

import { cn } from "../lib/utils";

// Types
type ResponsiveValue = string | null | undefined;
type VariantConfig = Record<string, Record<string, string>>;
type ThemeValue = string | number;
type Size = string | number;

interface VariantProps {
  variant?: string;
  size?: string;
  color?: string;
}

/**
 * Creates responsive class strings for different breakpoints
 * @param base - Base class applied at all breakpoints
 * @param sm - Small breakpoint class
 * @param md - Medium breakpoint class
 * @param lg - Large breakpoint class
 * @param xl - Extra large breakpoint class
 * @returns Combined responsive class string
 */
export function responsive(
  base: string,
  sm?: ResponsiveValue,
  md?: ResponsiveValue,
  lg?: ResponsiveValue,
  xl?: ResponsiveValue,
): string {
  if (!base) throw new Error("Base class is required");

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
 * @param value - Value to check
 * @returns Boolean indicating if value is an object
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

/**
 * Type guard for checking if an object has specific properties
 * @param value - Object to check
 * @param properties - Array of required property keys
 * @returns Boolean indicating if object has all specified properties
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
 * @param baseClass - Base component class
 * @param variants - Variant configuration object
 * @returns Function that generates variant classes
 */
export function variants(
  baseClass: string,
  variants: VariantConfig,
): (props: VariantProps) => string {
  if (!baseClass) throw new Error("Base class is required");
  if (!variants) throw new Error("Variants configuration is required");

  return ({ variant, size, color }: VariantProps) => {
    return cn(
      baseClass,
      variant && variants.variant?.[variant],
      size && variants.size?.[size],
      color && variants.color?.[color],
    );
  };
}

/**
 * Formats theme values with optional units
 * @param value - Numeric or string value
 * @param unit - CSS unit to append (default: "px")
 * @returns Formatted theme value string
 */
export function formatThemeValue(value: ThemeValue, unit = "px"): string {
  if (typeof value === "number") {
    return `${value}${unit}`;
  }

  return value;
}

/**
 * Creates a compound class string
 * @param classes - Array of class strings
 * @returns Combined class string with falsy values filtered out
 */
export function compound(...classes: Array<string | undefined | null>): string {
  return classes.filter(Boolean).join(" ");
} /**
export function isDarkMode(): boolean {
  if (typeof window === "undefined") return false;

  return document.documentElement.classList.contains("dark");
}

/**
 * Extracts and validates ARIA attributes from props
 * @param props - Component props object
 * @returns Object containing only valid ARIA attributes
 */
export function validateAriaProps(
  props: Record<string, unknown>,
): Record<string, unknown> {
  const ariaPattern = /^aria-[a-z]+$/;

  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (ariaPattern.test(key)) {
        acc[key] = value;
      }

      return acc;
    },
    {} as Record<string, unknown>,
  );
}

/**
 * Creates a size value using NextUI's scale
 * @param value - Size value or scale key
 * @returns Formatted size string
 */
export function size(value: Size): string {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return `var(--nextui-space-${value})`;
}

/**
 * Creates an opacity value using NextUI's scale
 * @param value - Opacity value (0-100)
 * @returns Formatted opacity variable string
 */
export function opacity(value: number): string {
  if (value < 0 || value > 100) {
    throw new Error("Opacity value must be between 0 and 100");
  }

  return `var(--nextui-opacity-${value})`;
}

/**
 * Checks if the code is running on the client side
 * @returns Boolean indicating if code is running in browser
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Safely parses JSON with error handling
 * @param value - JSON string to parse
 * @returns Parsed object or null if invalid
 */
export function safeJSONParse<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}
