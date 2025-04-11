import { MetadataRoute } from "next";

/**
 * Generate robots.txt rules
 * @returns Robots configuration for the website
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: "https://deanmachines.com/sitemap.xml",
  };
}
