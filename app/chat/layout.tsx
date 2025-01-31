"use client";
import CustomTooltip from "@/components/tooltip";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { Providers } from "../providers";

export default function ChatLayout({
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
          ></Box>
        </Box>
      </Providers>
    </Box>
  );
}
