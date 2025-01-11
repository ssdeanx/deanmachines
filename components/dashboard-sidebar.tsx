"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <div className="w-64 p-4">
      <Accordion>
        <AccordionItem key="lidar" title="Actions">
          <Link href="/dashboard/lidar">Lidar 3D Point Cloud</Link>
        </AccordionItem>
        <AccordionItem key="fpv" title="Actions">
          <Link href="/dashboard/fpv">FPV Video</Link>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DashboardSidebar;
