"use client";
 
import { FC, useEffect } from "react";
import Switch from '@mui/material/Switch';
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme } from "@/components/ThemeContext";
  
 import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
  
 export interface ThemeSwitchProps {
  className?: string;
 }
  
 export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
 }) => {
  const { mode, setMode } = useTheme();
  const initialMode = typeof window !== 'undefined' && localStorage
    ? localStorage.getItem("theme") || "light"
    : "light";
 
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem("theme", mode || "light");
    }
  }, [mode]);
 
  const onChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
 
  const isSelected = mode === "light";
 
  return (
    <FormControlLabel
        control={
            <Switch
                checked={!isSelected}
                onChange={onChange}
            />
        }
        label={isSelected ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
    />
  );
 };
