"use client";
 
 import React, { useState } from "react";
 import { useTheme } from "next-themes";

 import Button from '@mui/material/Button';
 import Menu from '@mui/material/Menu';
 import MenuItem from '@mui/material/MenuItem';
 import { MoonFilledIcon, SunFilledIcon,  } from "@/components/icons";
 import IconButton from '@mui/material/IconButton';
 
 interface ThemeButtonProps {
  className?: string;
 }
 
 export const ThemeButton: React.FC<ThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
 
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
 
  return (
    <IconButton
        className={`glass ${className}`}
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        color="inherit"
    >
        {theme === "light" ? <MoonFilledIcon /> : <SunFilledIcon />}
    </IconButton>
  );
 };
 
 interface DropdownButtonProps {
     className?: string;
     items: { key: string; label: string; onClick?: () => void }[];
 }
 
 export const DropdownButton: React.FC<DropdownButtonProps> = ({ className, items }) => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
 
     return (
        <>
            <Button
                className={className}
                variant="text"
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {items.map((item) => (
                    <MenuItem key={item.key} onClick={() => { handleClose(); item.onClick?.(); }}>{item.label}</MenuItem>
                ))}
            </Menu>
        </>
     );
 };
