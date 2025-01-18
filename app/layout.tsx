import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { ThemeContext } from "@/components/ThemeContext";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { ThemeSwitch } from "@/components/theme-switch";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

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
    <html suppressHydrationWarning className="motion-safe:scroll-smooth" lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen overflow-hidden bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <ThemeContext>
            <div className="relative flex h-screen flex-col">
              <Navbar />
              <ThemeSwitch />
              <main className="container mx-auto grow pt-16">
                <section className="px-4 py-8">{children}</section>
              </main>
              <Footer />
            </div>
          </ThemeContext>
        </Providers>
      </body>
    </html>
  );
}
