"use client";
import "@/styles/globals.css";
import { Viewport } from "next";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Switch } from "@nextui-org/switch";
import clsx from "clsx";

import { Providers } from "../providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import CustomTooltip from "@/components/tooltip";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="motion-safe:scroll-smooth" lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-white font-sans antialiased dark:bg-black",
          fontSans.variable,
          "overflow-hidden",
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
            <main className="container mx-auto max-w-7xl grow px-6 pt-16">
              {children}
              <Divider className="my-4" />
              <div className="flex items-center gap-2">
                <Switch checked={true} className="my-4" onChange={() => {}} />
                <span>Toggle Switch</span>
              </div>
              <CustomTooltip />
            </main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-gray-600">Powered by</span>
                <p className="text-blue-500">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
