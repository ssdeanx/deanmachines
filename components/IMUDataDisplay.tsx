import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import DataChartDisplay from "./DataChartDisplay";

interface IMUDataDisplayProps {
  data: {
    acceleration: { x: number; y: number; z: number };
    gyroscope: { x: number; y: number; z: number };
    magnetometer: { x: number; y: number; z: number };
  }[];
}

const IMUDataDisplay: React.FC<IMUDataDisplayProps> = ({ data }) => {
  const [dataType, setDataType] = useState<
    "acceleration" | "gyroscope" | "magnetometer"
  >("acceleration");

  const chartData = data.map((point) => {
    const selectedData = point[dataType] as { x: number; y: number; z: number };

    return selectedData.x + selectedData.y + selectedData.z;
  });

  const title = dataType.charAt(0).toUpperCase() + dataType.slice(1);

  return (
    <div className="rounded-lg bg-white p-4 md:p-6 shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          IMU Data
        </h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" size="sm" variant="flat">
              Data Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Data Type"
            className="bg-white dark:bg-gray-700 shadow-md rounded-md"
            onAction={(key) =>
              setDataType(key as "acceleration" | "gyroscope" | "magnetometer")
            }
          >
            <DropdownItem key="acceleration" className="text-gray-700 dark:text-gray-300">Acceleration</DropdownItem>
            <DropdownItem key="gyroscope" className="text-gray-700 dark:text-gray-300">Gyroscope</DropdownItem>
            <DropdownItem key="magnetometer" className="text-gray-700 dark:text-gray-300">Magnetometer</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <DataChartDisplay
        colorScale="Viridis"
        data={chartData}
        title={title}
        xAxisLabel="Time"
        yAxisLabel="Value"
      />
    </div>
  );
};

export default IMUDataDisplay;
