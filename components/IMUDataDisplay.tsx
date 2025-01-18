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
    <div className="rounded-lg bg-[hsl(var(--background))] p-4 md:p-6 shadow-md dark:bg-[hsl(var(--default))]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-foreground dark:text-muted-foreground">
          IMU Data
        </h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize bg-[hsl(var(--gray-100))] hover:bg-[hsl(var(--gray-200))] dark:bg-[hsl(var(--gray-700))] dark:hover:bg-[hsl(var(--gray-600))] text-foreground dark:text-muted-foreground" size="sm" variant="flat">
              Data Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Data Type"
            className="bg-[hsl(var(--background))] dark:bg-[hsl(var(--default))] shadow-md rounded-md"
            onAction={(key) =>
              setDataType(key as "acceleration" | "gyroscope" | "magnetometer")
            }
          >
            <DropdownItem key="acceleration" className="text-foreground dark:text-muted-foreground">Acceleration</DropdownItem>
            <DropdownItem key="gyroscope" className="text-foreground dark:text-muted-foreground">Gyroscope</DropdownItem>
            <DropdownItem key="magnetometer" className="text-foreground dark:text-muted-foreground">Magnetometer</DropdownItem>
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
