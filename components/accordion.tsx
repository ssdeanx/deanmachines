import { Accordion as NextUIAccordion } from "@nextui-org/react";
import React from "react";

interface AccordionProps {
  children: React.ReactNode | React.ReactNode[];
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return (
    <NextUIAccordion className="rounded-lg bg-white shadow-md dark:bg-gray-800">
      {children}
    </NextUIAccordion>
  );
};

export default Accordion;
