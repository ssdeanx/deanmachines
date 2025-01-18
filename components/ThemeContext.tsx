"use client";

import { useTheme } from "next-themes";
import { ReactNode, useEffect } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContext = ({ children }: ThemeContextProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("Theme changed to:", theme);
    if (theme) {
      document.documentElement.classList.add(theme);
    }

    return () => {
      if (theme) {
        document.documentElement.classList.remove(theme);
      }
    };
  }, [theme]);

  return <>{children}</>;
};
