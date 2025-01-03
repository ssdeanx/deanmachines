/**
 * @file functions.ts
 * @description Utility functions for type checking and className management
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Type guard utility
export function isValidObject<T extends object>(
  value: unknown,
  properties: (keyof T)[],
): value is T {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return properties.every((prop) => prop in value);
}

// NextUI className utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// NextUI color utility
export function getNextUIColor(color: string) {
  return `hsl(var(--${color}))`;
}

// Responsive style utility
export function createResponsiveStyle(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
) {
  return cn(base, sm && `sm:${sm}`, md && `md:${md}`, lg && `lg:${lg}`);
}

// Type guard for specific types
export function isType<T>(value: unknown, propertyName: keyof T): value is T {
  return typeof value === "object" && value !== null && propertyName in value;
}
