import Link from "next/link"
import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { PricingTable } from "@/components/sections/PricingTable"
import { TestimonialSlider } from "@/components/sections/TestimonialSlider"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// SEO Metadata for the Homepage - Updated with 2025 Trends
export const metadata: Metadata = {
  title: "DeanMachines AI: Build Advanced AI Agents & Applications (2025 Ready)",
  description: "Leverage DeanMachines AI's cutting-edge platform to build, deploy, and manage intelligent AI agents optimized for 2025's AI-driven search and multimodal interactions.",
  // Updated Keywords incorporating 2025 trends:
  keywords: [
    // Core Offering
    "AI platform", "AI agents", "intelligent automation", "AI development",
    "machine learning platform", "AI deployment", "AI application development",
    // 2025 SEO & AI Trends
    "generative AI platform", "AI-powered search optimization", "SGE ready AI",
    "natural language processing AI", "voice enabled AI agents", "multimodal AI",
    "EEAT compliant AI platform", "structured data AI", "predictive AI insights",
    "AI agent network", "conversational AI development", "AI workflow automation",
    // Branding
    "DeanMachines AI"
  ],
  openGraph: {
    title: "DeanMachines AI: Next-Gen AI Agent Platform (2025 Trends)",
    description: "Build sophisticated AI agents ready for the future of search and interaction with DeanMachines AI.",
    url: "https://deanmachines.com",
    siteName: "DeanMachines AI",
    images: [
      {
        url: "https://deanmachines.com/og-image-2025.png", // Consider updating OG image
        width: 1200,
        height: 630,
        alt: "DeanMachines AI Platform - 2025 Ready",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeanMachines AI: Build Future-Proof AI Agents",
    description: "Develop AI agents optimized for SGE, voice, and multimodal search with DeanMachines AI.",
    // site: "@YourTwitterHandle",
    // creator: "@YourTwitterHandle",
    images: ["https://deanmachines.com/twitter-image-2025.png"], // Consider updating Twitter image
  },
  alternates: {
    canonical: "https://deanmachines.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Optional: Add Schema.org markup via JSON-LD for better structured data
  // Can be added directly here or via a separate component
  // metadataBase: new URL('https://deanmachines.com'), // Recommended for resolving relative URLs
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <TestimonialSlider />
      <PricingTable />
      <FaqAccordion />


    </>
  )
}
