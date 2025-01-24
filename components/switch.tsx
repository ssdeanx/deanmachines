"use client";
 
 import { FC } from "react";
 import { SwitchProps } from "@nextui-org/switch";
 import Switch from '@mui/material/Switch';
 import { useTheme } from "next-themes";
 import FormControlLabel from '@mui/material/FormControlLabel';
 import clsx from "clsx";
 
 export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
 }
 
 export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
 }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isSSR = typeof window === "undefined";
  const onChange = () => {
    resolvedTheme === "light" ? setTheme("dark") : setTheme("light");
  };
 
  const isSelected = resolvedTheme === "light" || isSSR;
 
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
