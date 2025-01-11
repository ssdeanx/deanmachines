import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider"; // Import Divider
import ClientSwitch from "@/components/client-switch";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import CustomTooltip from "@/components/tooltip"; // Import the tooltip component

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className="motion-safe:scroll-smooth"
      lang="en"
    >
      <head />
      <body
        className={clsx(
          "min-h-screen bg-white font-sans antialiased dark:bg-black",
          fontSans.variable,
          "overflow-hidden", // Now recognized
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: true,
          }}
        >
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl grow px-6 pt-16 section-container">
              {children}
            </main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/your-username/your-repo"
                title="Dean Machines GitHub Repository"
              >
                <span className="text-gray-600">View on</span>
                <p className="text-blue-500">GitHub</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
