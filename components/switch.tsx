"use client";

import { FC } from "react";
import { SwitchProps } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Switch as NextSwitch } from "@nextui-org/switch";

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
    <NextSwitch
      checked={!isSelected}
      className={clsx(
        "cursor-pointer px-px transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        className,
        classNames?.base,
      )}
      onChange={onChange}
    />
  );
};
