"use client";

import { FC, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
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

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: initialTheme === "light",
    "aria-label": `Switch to ${initialTheme === "light" ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "cursor-pointer px-px transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "size-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "text-gray-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected ? (
          <SunFilledIcon
            className="text-gray-700 dark:text-gray-300"
            size={22}
          />
        ) : (
          <MoonFilledIcon
            className="text-gray-700 dark:text-gray-300"
            size={22}
          />
        )}
      </div>
    </Component>
  );
};
