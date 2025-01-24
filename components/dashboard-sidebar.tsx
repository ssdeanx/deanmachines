"use client";

import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <div className="w-64 p-4">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Actions
        </AccordionSummary>
        <AccordionDetails>
            <Link className="text-foreground dark:text-muted-foreground" href="/dashboard/lidar">Lidar 3D Point Cloud</Link>
            <Link className="text-foreground dark:text-muted-foreground" href="/dashboard/fpv">FPV Video</Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DashboardSidebar;
