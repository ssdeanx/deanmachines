import { MetadataRoute } from "next";

/**
 * Generate sitemap for all public pages
 * @returns Sitemap configuration for the website
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mastra.ai";

  // Main pages
  const routes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/docs",
    "/privacy",
    "/services",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts - in a real app, these would be dynamically generated
  const blogPosts = [
    "/blog/my-first-post",
    // Add more blog posts here as they're created
  ].map((post) => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Documentation pages
  const docsSections = [
    "/docs/introduction",
    "/docs/getting-started",
    "/docs/core-concepts",
    // Add more doc sections as needed
  ].map((doc) => ({
    url: `${baseUrl}${doc}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...blogPosts, ...docsSections];
}
