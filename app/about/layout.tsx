"use client";
import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

import { Providers } from "../providers";

import CustomTooltip from "@/components/tooltip";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Providers
        themeProps={{
          attribute: "class",
          defaultTheme: "dark",
          enableSystem: true,
        }}
      >
        <div className="relative flex h-screen flex-col">
          <main className="container mx-auto max-w-7xl grow px-6 pt-16">
            {children}
            <Divider className="my-4" />
            <div className="flex items-center gap-2" />
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
    </div>
  );
}
