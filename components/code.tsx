import { Code as NextUICode, CodeProps } from "@nextui-org/code";

import { cn } from "../lib/utils";

export const Code = ({ className, ...props }: CodeProps) => (
  <NextUICode
    {...props}
    className={cn(
      "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
      className,
    )}
  />
);

export default Code;
