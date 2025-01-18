"use client";
import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import clsx from "clsx";

import { Providers } from "../providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import CustomTooltip from "@/components/tooltip";

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
                <ThemeSwitch />
              </div>
              <CustomTooltip />
            </main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-gray-600">Powered by</span>
                <p className="text-gray-600 dark:text-gray-500">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
