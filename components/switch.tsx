"use client";
 
 import { FC } from "react";
 import Switch, { SwitchProps } from '@mui/material/Switch';
 import { useTheme } from "@/components/ThemeContext";
 import FormControlLabel from '@mui/material/FormControlLabel';

 
 export interface ThemeSwitchProps {
  className?: string;
 }
 
 export const SwitchComponent: FC<ThemeSwitchProps> = ({
  className,
 }) => {
  const { mode, setMode } = useTheme();
  const isSSR = typeof window === "undefined";
  const onChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
 
  const isSelected = mode === "light" || isSSR;
 
  return (
    <FormControlLabel
        control={
            <Switch
                checked={!isSelected}
                onChange={onChange}
                color="primary"
            />
        }
        label="Theme"
    />
  );
 };
