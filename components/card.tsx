import {
  Card as NextUICard,
  CardProps,
  CardBody as NextUICardBody,
  CardFooter as NextUICardFooter,
  CardHeader as NextUICardHeader,
} from "@nextui-org/card";

import { cn } from "../lib/utils";

export const Card = ({ className, ...props }: CardProps) => (
  <NextUICard
    className={cn(
      "card dark:bg-[hsl(var(--default))] dark:text-muted-foreground rounded-lg shadow-md transition-shadow hover:shadow-lg",
      "px-4 py-2 md:px-6 md:py-3",
      className,
    )}
    {...props}
  >
    {props.children}
  </NextUICard>
);

export const CardBody = NextUICardBody;
export const CardFooter = NextUICardFooter;
export const CardHeader = NextUICardHeader;
