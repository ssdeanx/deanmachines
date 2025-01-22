"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { MoonFilledIcon, SunFilledIcon,  } from "@/components/icons";

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className={`glass ${className}
`}
      onClick={toggleTheme}
      isIconOnly
      aria-label="Toggle Theme"
      variant="light"
    >
      {theme === "light" ? <MoonFilledIcon /> : <SunFilledIcon />}
    </Button>
  );
};

interface DropdownButtonProps {
    className?: string;
    items: { key: string; label: string; onClick?: () => void }[];
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ className, items }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownTrigger>
                <Button
 
                    className={className}
                    variant="light"
                    onPress={() => setIsDropdownOpen(!isDropdownOpen)}
                    
                >
                    Menu
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Dropdown Menu"
                onAction={(key) => {

                    const selectedItem = items.find((item) => item.key === key);
                    selectedItem?.onClick?.();
                    setIsDropdownOpen(false);
                }}
            >
                {items.map((item) => (
                    <DropdownItem key={item.key}>{item.label}</DropdownItem>

                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
