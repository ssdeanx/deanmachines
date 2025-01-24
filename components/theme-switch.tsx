"use client";
 
 import { FC, useEffect } from "react";
 import { VisuallyHidden } from "@react-aria/visually-hidden";
 import Switch from '@mui/material/Switch';
 import { useTheme } from "next-themes";
 import FormControlLabel from '@mui/material/FormControlLabel';
 import { useIsSSR } from "@react-aria/ssr";
 import clsx from "clsx";
  
 import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
 
 export interface ThemeSwitchProps {
  className?: string;
 }
 
 export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
 }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const initialTheme = isSSR
    ? "light"
    : localStorage.getItem("theme") || "light";
 
  useEffect(() => {
    if (!isSSR) {
      localStorage.setItem("theme", theme || "light");
    }
  }, [theme, isSSR]);
 
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
 
  const isSelected = initialTheme === "light";
 
  return (
    <FormControlLabel
        control={
            <Switch
                checked={!isSelected}
                onChange={onChange}
                color="primary"
            />
        }
        label={isSelected ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
    />
  );
 };
