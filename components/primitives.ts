import { tv } from "tailwind-variants";

export const title = tv({
  base: "font-semibold tracking-tight",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[hsl(var(--foreground))] dark:to-[hsl(var(--muted-foreground))]",
      primary: "from-[hsl(var(--primary))] to-[hsl(var(--primary-foreground))]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] leading-9 lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fontWeight: {
      normal: "font-normal",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    letterSpacing: {
      normal: "tracking-normal",
      wide: "tracking-wide",
      tight: "tracking-tight",
    },
    fullWidth: {
      true: "block w-full",
    },
  },
  defaultVariants: {
    size: "md",
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: "tight",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        "primary",
      ],
      class: "bg-gradient-to-b bg-clip-text text-transparent",
    },
  ],
});

export const subtitle = tv({
  base: "my-2 block w-full max-w-full text-lg text-foreground dark:text-muted-foreground lg:text-xl",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    fullWidth: true,
    textAlign: "left",
  },
});
