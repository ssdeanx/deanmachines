"use client";

import { ReactNode, createContext, useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
 
interface ThemeContextProps {
 children: ReactNode;
 }
  
interface Theme {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const value = {
    mode,
    setMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
