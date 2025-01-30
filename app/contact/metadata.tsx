import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `Contact - ${siteConfig.name}`,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    "Contact Dean Machines for inquiries about our open-source autonomous drone platform.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "contact",
    "inquiry",
    "drone",
    "autonomous",
    "FPV",
    "open source",
    "robotics",
    "AI",
    "machine learning",
  ],
  authors: [{ name: "Sean Dean", url: "https://github.com/ssdeanx" }],
  openGraph: {
    title: `Contact - ${siteConfig.name}`,
    description:
      "Contact Dean Machines for inquiries about our open-source autonomous drone platform.",
    url: "https://deanmachines.com/contact",
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
