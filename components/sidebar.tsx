"use client";

import { useTheme } from "next-themes";
import React from "react";

import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800",
        "shadow-lg",
      )}
    >
      <div className="p-4">
        <button
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="mb-4 text-lg font-semibold">Sidebar</h2>
        <ul>
          <li>
            <a
              className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              href="#item1"
            >
              Item 1
            </a>
          </li>
          <li>
            <a
              className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              href="#item2"
            >
              Item 2
            </a>
          </li>
          <li>
            <a
              className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              href="#item3"
            >
              Item 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
