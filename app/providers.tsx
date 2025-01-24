"use client";
 
 import * as React from "react";
 import { useRouter } from "next/navigation";
 import { ThemeProvider, createTheme } from "@mui/material/styles";
 
 export interface ProvidersProps {
  children: React.ReactNode;
 }
 
 declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
 }
 
 const theme = createTheme({});
 
 export function Providers({ children }: ProvidersProps) {
  const router = useRouter();
 
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
 }
