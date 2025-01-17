import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
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
    <html
      suppressHydrationWarning
      className="motion-safe:scroll-smooth"
      lang="en"
    >
      <head />
      <body
        className={clsx(
          "min-h-screen overflow-hidden bg-white font-sans antialiased dark:bg-gray-900",
          fontSans.variable,
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
            <main className="container mx-auto grow pt-16">
              <section className="px-4 py-8">{children}</section>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
