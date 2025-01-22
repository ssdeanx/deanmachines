"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import Sidebar from "@/components/sidebar";
import {
  TwitterIcon,
    GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  } from "@/components/icons";
import { ThemeButton, DropdownButton } from "@/components/navbar-buttons";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 dark:bg-gray-700",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="pointer-events-none shrink-0 text-base text-gray-400" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      className={clsx(
        "shadow-md",
        theme === "dark" ? "bg-[hsl(var(--default))]" : "bg-[hsl(var(--background))]",
      )}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="sm:basis-full" justify="start">
        <NavbarBrand
          as="li"
          className={clsx(
            "gap-2",            
            theme === "dark" ? "bg-[hsl(var(--default))] text-foreground dark:text-muted-foreground" : "bg-[hsl(var(--background))] text-foreground dark:text-muted-foreground",
          )}
        >
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Logo />
            <p className="navbar-title text-xl font-bold text-black text-stroke dark:text-white">
              DeanMachines
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden justify-start gap-4 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-foreground transition-colors duration-300 hover:text-primary",
                  "data-[active=true]:text-blue-500",
                  "font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-white" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-white" />
          </Link>
          <ThemeButton className="text-white" />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            className="rounded-md bg-[hsl(var(--gray-200))] px-4 py-2 text-sm font-medium text-foreground hover:bg-[hsl(var(--gray-300))] dark:bg-[hsl(var(--gray-700))] dark:text-muted-foreground dark:hover:bg-[hsl(var(--gray-600))]"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="bg-[hsl(var(--gray-600))] text-sm font-normal text-foreground dark:text-muted-foreground"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-red-500" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <Button className="text-white" onPress={toggleSidebar}>
          Menu
        </Button>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-white" />
        </Link>
        <DropdownButton
          className="text-white"
          items={[
            {
              key: "light",
              label: "Light",
              onClick: () => setTheme("light"),
            },
            {
              key: "dark",
              label: "Dark",
              onClick: () => setTheme("dark"),
            },
          ]}
        />
        <ThemeButton className="text-white" />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-blue-500",
                  "text-foreground dark:text-muted-foreground",
                )}
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </NextUINavbar>
  );
};
