import { Code as NextUICode, CodeProps } from "@nextui-org/code";

import { cn } from "../lib/utils";

export const Code = ({ className, ...props }: CodeProps) => (
  <NextUICode
    {...props}
    className={cn(
      "bg-[hsl(var(--gray-100))] dark:bg-[hsl(var(--default))] text-foreground dark:text-muted-foreground",
      className,
    )}
  />
);

export default Code;
