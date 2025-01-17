"use client";
import { Tooltip, Button } from "@nextui-org/react";

export default function CustomTooltip() {
  return (
    <Tooltip
      color="primary"
      content={
        <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md">
          <div className="text-sm font-bold text-gray-900 dark:text-gray-100">Sensor Data</div>
          <div className="text-xs text-gray-700 dark:text-gray-300">
            View real-time sensor data from the drone.
          </div>
        </div>
      }
      placement="top"
    >
      <Button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" variant="bordered">View Data</Button>
    </Tooltip>
  );
}
