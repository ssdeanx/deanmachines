import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes intelligently.
 *
 * @param inputs - An array of class values (strings, objects, arrays).
 * @returns A merged class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date object or string into a more readable format.
 *
 * @param date - The date to format (Date object, string, or number).
 * @param options - Optional Intl.DateTimeFormat options.
 * @returns A formatted date string (e.g., "January 1, 2024").
 */
export function formatDate(
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string {
  try {
    return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  } catch (error) {
    console.error("Error formatting date:", error);
    // Return a default or indicate error, depending on requirements
    return "Invalid Date";
  }
}

/**
 * Converts a string into a URL-friendly slug.
 * Removes special characters, converts to lowercase, and replaces spaces with hyphens.
 *
 * @param text - The string to slugify.
 * @returns The slugified string.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD") // separate accent from letter
    .replace(/[\u0300-\u036f]/g, "") // remove all separated accents
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/[^\w-]+/g, "") // remove all non-word chars
    .replace(/--+/g, "-"); // replace multiple - with single -
}
