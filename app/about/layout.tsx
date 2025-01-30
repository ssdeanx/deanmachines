"use client";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { Providers } from "../providers";

import CustomTooltip from "@/components/tooltip";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Providers>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <main
            style={{
              margin: "0 auto",
              maxWidth: "1200px",
              flexGrow: 1,
              padding: "4rem 1.5rem",
            }}
          >
            {children}
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }} />
            <CustomTooltip />
          </main>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              py: 3,
            }}
          >
            <Link
              href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
              title="nextui.org homepage"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.secondary",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              <Typography sx={{ color: "text.secondary" }}>
                Powered by
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>NextUI</Typography>
            </Link>
          </Box>
        </Box>
      </Providers>
    </Box>
  );
}
