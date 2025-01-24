"use client";
 
 import * as React from "react";
 import { useRouter } from "next/navigation";
 import { ThemeContextProvider } from "@/components/ThemeContext";
 
 export interface ProvidersProps {
  children: React.ReactNode;
 }
 
 export function Providers({ children }: ProvidersProps) {
  const router = useRouter();
 
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
 }
