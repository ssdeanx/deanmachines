"use client";
import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";
import IconButton from "@mui/material/IconButton";
import React from "react";

interface ThemeButtonProps {
  className?: string;
}

export const StaticThemeButton: React.FC<ThemeButtonProps> = ({
  className,
}) => {
  // Static theme button - no theme context or toggling
  const isDark = false; // Default to light mode

  return (
    <IconButton
      className={`glass ${className}`}
      onClick={() => alert("Theme toggle temporarily disabled")} // No toggle action
      aria-label="Toggle Theme"
      color="inherit"
    >
      {isDark ? <SunFilledIcon /> : <MoonFilledIcon />}
    </IconButton>
  );
};
