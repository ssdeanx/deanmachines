import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Next-Gen AI Chat Interface | Master Level Conversational AI - Dean Machines",
  description:
    "Unlock the power of conversational AI with Dean Machines' advanced chat interface. Experience seamless, intelligent conversations with customizable APIs, models, and settings. Built on React, Next.js, and Material UI for a master-level chat experience.",
  keywords: [
    "AI Chat Interface",
    "Conversational AI",
    "Advanced Chatbot",
    "Next.js Chat",
    "React Chat UI",
    "Material UI Chat",
    "Langchain Integration",
    "Customizable AI Chat",
    "Intelligent Chat Application",
    "Dean Machines AI",
    "Master Level AI Chat",
    "System Prompting",
    "AI Model Selection",
    "API Integration",
  ],
  icons: {
    icon: "/favicon.ico", // Path to favicon
    apple: "/apple-touch-icon.png", // Path to apple touch icon
  },
  authors: [{ name: "Dean Machines", url: "https://deanmachines.com" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title:
      "Next-Gen AI Chat Interface | Master Level Conversational AI - Dean Machines",
    description:
      "Experience seamless, intelligent conversations with our advanced AI chat interface. Customize APIs, models, and settings for a master-level AI chat experience.",
    url: "https://deanmachines.com/chat", // Replace with your actual URL
    siteName: "Dean Machines",
    images: [
      {
        url: "https://deanmachines.com/images/chat-preview-og.png", // Replace with a preview image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next-Gen AI Chat Interface | Dean Machines",
    description:
      "Unlock master-level conversational AI. Try Dean Machines' advanced chat interface with customizable settings.",
    images: ["https://deanmachines.com/images/chat-preview-twitter.png"], // Replace with a Twitter card image URL
    site: "@DeanMachinesAI", // Replace with your Twitter site account
    creator: "@DeanMachinesAI", // Replace with your Twitter creator account
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  themeColor: "#007bff", // Example primary color of the chat interface
  verification: {
    google: "google-site-verification=your_google_verification_code", // Replace with your Google verification code
    // other: {
    //   me: ['mailto:roo@deanmachines.com', 'https://deanmachines.com/chat'],
    // },
  },
  // manifest: '/manifest.json', // Path to manifest.json if it's a PWA
  // appleWebApp: {
  //   capable: 'yes',
  //   statusBarStyle: 'default',
  //   title: 'AI Chat - Dean Machines',
  // },
};
