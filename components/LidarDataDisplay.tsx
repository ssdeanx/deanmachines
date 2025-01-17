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
    <div className="rounded-lg bg-white p-4 md:p-6 shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Lidar Data
        </h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" size="sm" variant="flat">
              Color Scale
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Color Scale"
            className="bg-white dark:bg-gray-700 shadow-md rounded-md"
            onAction={(key) => setColorScale(String(key))}
          >
            <DropdownItem key="Viridis" className="text-gray-700 dark:text-gray-300">Viridis</DropdownItem>
            <DropdownItem key="Plasma" className="text-gray-700 dark:text-gray-300">Plasma</DropdownItem>
            <DropdownItem key="Magma" className="text-gray-700 dark:text-gray-300">Magma</DropdownItem>
            <DropdownItem key="Inferno" className="text-gray-700 dark:text-gray-300">Inferno</DropdownItem>
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
