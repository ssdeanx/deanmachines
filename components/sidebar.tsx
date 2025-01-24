"use client";
 
 import { useTheme } from "next-themes";
 import React from "react";
 import Drawer from '@mui/material/Drawer';
 import List from '@mui/material/List';
 import ListItem from '@mui/material/ListItem';
 import Link from '@mui/material/Link';
 
 import { cn } from "@/lib/utils";
 
 interface SidebarProps {
  isOpen?: boolean;
  onClose: () => void;
 }
 
 const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const { theme } = useTheme();
 
  return (
    <Drawer
        open={isOpen}
        onClose={onClose}
        PaperProps={{
            sx: {
                width: 240,
                backgroundColor: theme === "dark" ? 'hsl(var(--gray-800))' : 'hsl(var(--background))',
                color: theme === "dark" ? 'white' : 'hsl(var(--foreground))',
            }
        }}
    >
        <div className="p-4">
            <button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                onClick={onClose}
            >
                Close
            </button>
            <h2 className="mb-4 text-lg font-semibold">Sidebar</h2>
            <List>
                <ListItem>
                    <Link
                        style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit' }}
                        href="#item1"
                    >
                        Item 1
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit' }}
                        href="#item2"
                    >
                        Item 2
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit' }}
                        href="#item3"
                    >
                        Item 3
                    </Link>
                </ListItem>
            </List>
        </div>
    </Drawer>
  );
 };
 
 export default Sidebar;
