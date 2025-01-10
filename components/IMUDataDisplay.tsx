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
    <div className="chart-container">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          IMU Data
        </h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize" size="sm" variant="flat">
              Data Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Data Type"
            onAction={(key) =>
              setDataType(key as "acceleration" | "gyroscope" | "magnetometer")
            }
          >
            <DropdownItem key="acceleration">Acceleration</DropdownItem>
            <DropdownItem key="gyroscope">Gyroscope</DropdownItem>
            <DropdownItem key="magnetometer">Magnetometer</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <DataChartDisplay
        colorScale="Viridis" // Add this line
        data={chartData}
        title={title}
        xAxisLabel="Time"
        yAxisLabel="Value"
      />
    </div>
  );
};

export default IMUDataDisplay;
