import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 * @param inputs - Array of class names or class value objects
 * @returns Merged and deduplicated class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a CSS variable reference for NextUI colors
 * @param value - Color variable name
 * @returns Formatted CSS variable string
 */
export function color(value: string): string {
  return `var(--color-${value})`;
}
// Add more utility functions as needed
export function debounce<Func extends (...args: any[]) => void>(
  func: Func,
  wait: number,
): Func {
  let timeout: NodeJS.Timeout;

  return function (...args: Parameters<Func>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  } as Func;
}
export function throttle<Func extends (...args: any[]) => void>(
  func: Func,
  limit: number,
): Func {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return function (this: any, ...args: Parameters<Func>) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  } as Func;
}
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
export function mergeObjects<T extends object[]>(
  ...objects: T
): Partial<T[number]> {
  return Object.assign({}, ...objects);
}
export function formatCurrency(
  amount: number,
  locale: string = "en-US",
  currency: string = "USD",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function buildQuery(
  url: string,
  params: Record<string, string>,
): string {
  const query = new URLSearchParams(params).toString();

  return `${url}?${query}`;
}
