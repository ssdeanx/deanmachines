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
    <div className="chart-container">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Lidar Data
        </h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize" size="sm" variant="flat">
              Color Scale
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Color Scale"
            onAction={(key) => setColorScale(String(key))}
          >
            <DropdownItem key="Viridis">Viridis</DropdownItem>
            <DropdownItem key="Plasma">Plasma</DropdownItem>
            <DropdownItem key="Magma">Magma</DropdownItem>
            <DropdownItem key="Inferno">Inferno</DropdownItem>
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
