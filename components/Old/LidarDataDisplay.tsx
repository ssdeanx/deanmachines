import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import DataChartDisplay from "./DataChartDisplay";

interface LidarDataDisplayProps {
  data: { distance: number; strength: number }[];
}

const LidarDataDisplay: React.FC<LidarDataDisplayProps> = ({ data }) => {
  const [colorScale, setColorScale] = useState("Viridis");

  const chartData = data.map((point) => point.distance * point.strength);

  return (
    <div className="rounded-lg bg-[hsl(var(--background))] p-4 md:p-6 shadow-md dark:bg-[hsl(var(--default))]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-foreground dark:text-muted-foreground">
          Lidar Data
        </h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize bg-[hsl(var(--gray-100))] hover:bg-[hsl(var(--gray-200))] dark:bg-[hsl(var(--gray-700))] dark:hover:bg-[hsl(var(--gray-600))] text-foreground dark:text-muted-foreground" size="sm" variant="flat">
              Color Scale
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Color Scale"
            className="bg-[hsl(var(--background))] dark:bg-[hsl(var(--default))] shadow-md rounded-md"
            onAction={(key) => setColorScale(String(key))}
          >
            <DropdownItem key="Viridis" className="text-foreground dark:text-muted-foreground">Viridis</DropdownItem>
            <DropdownItem key="Plasma" className="text-foreground dark:text-muted-foreground">Plasma</DropdownItem>
            <DropdownItem key="Magma" className="text-foreground dark:text-muted-foreground">Magma</DropdownItem>
            <DropdownItem key="Inferno" className="text-foreground dark:text-muted-foreground">Inferno</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <DataChartDisplay
        colorScale={colorScale}
        data={chartData}
        title="Lidar Data"
        xAxisLabel="Data Point"
        yAxisLabel="Value"
      />
    </div>
  );
};

export default LidarDataDisplay;
