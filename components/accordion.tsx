import { Accordion, AccordionItem } from "@nextui-org/react";
export default function App() {
  const defaultContent =
    'Dean Machines is developing an open-source autonomous drone platform using a 5" FPV Racing drone equipped with advanced sensors and AI capabilities.';

  return (
    <Accordion className="rounded-lg bg-white shadow-md dark:bg-gray-800">
      <AccordionItem
        key="1"
        aria-label="Hardware"
        className="border-b border-gray-200 dark:border-gray-700"
        title="Hardware"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Software"
        className="border-b border-gray-200 dark:border-gray-700"
        title="Software"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Data"
        className="border-b border-gray-200 dark:border-gray-700"
        title="Data"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
