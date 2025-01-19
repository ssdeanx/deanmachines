"use client";
import { Accordion as NextUIAccordion } from "@nextui-org/react";
import React from "react";

interface AccordionProps {
  children: React.ReactElement | React.ReactElement[];
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return (
    <NextUIAccordion className="rounded-lg bg-[hsl(var(--background))] shadow-md dark:bg-[hsl(var(--default))]">
      {children}
    </NextUIAccordion>
  );
};

export default Accordion;
