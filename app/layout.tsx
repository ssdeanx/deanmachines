import "@/styles/globals.css";
import Box from "@mui/material/Box";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Theme from "@/components/Theme";
import { ThemeSwitch } from "@/components/theme-switch";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

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
        style={{
          minHeight: "100vh",
          overflow: "hidden",
          fontFamily: fontSans.variable,
          fontSmooth: "antialiased",
        }}
      >
        <Theme>
          <Providers>
            <Box className="relative flex h-screen flex-col">
              <Navbar />
              <ThemeSwitch />
              <main
                style={{ margin: "0 auto", flexGrow: 1, paddingTop: "4rem" }}
              >
                <section style={{ padding: "2rem 1rem" }}>{children}</section>
              </main>
              <Footer />
            </Box>
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
