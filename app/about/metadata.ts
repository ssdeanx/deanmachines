import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `About - ${siteConfig.name}`,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    "Learn more about Dean Machines, an open-source autonomous drone platform.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "autonomous drone",
    "FPV",
    "open source",
    "robotics",
    "AI",
    "machine learning",
    "LiDAR",
    "computer vision",
  ],
  authors: [{ name: "Sean Dean", url: "https://github.com/ssdeanx" }],
  openGraph: {
    title: `About - ${siteConfig.name}`,
    description:
      "Learn more about Dean Machines, an open-source autonomous drone platform.",
    url: "https://deanmachines.com/about",
    siteName: "Dean Machines",
    images: [
      {
        url: "/images/logo-main.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
