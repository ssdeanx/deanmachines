import {
  Card as NextUICard,
  CardProps,
  CardBody as NextUICardBody,
  CardFooter as NextUICardFooter,
  CardHeader as NextUICardHeader,
} from "@nextui-org/card";
import { cn } from "../lib/utils";

export const Card = ({ className, ...props }: CardProps) => (
  <NextUICard className={cn("card", className)} {...props}>
    {props.children}
  </NextUICard>
);

export const CardBody = NextUICardBody;
export const CardFooter = NextUICardFooter;
export const CardHeader = NextUICardHeader;
