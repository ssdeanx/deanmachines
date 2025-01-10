"use client";
import { Tooltip, Button } from "@nextui-org/react";

export default function CustomTooltip() {
  return (
    <Tooltip
      color="primary"
      content={
        <div className="px-2 py-1">
          <div className="text-sm font-bold">Sensor Data</div>
          <div className="text-xs">
            View real-time sensor data from the drone.
          </div>
        </div>
      }
      placement="top"
    >
      <Button variant="bordered">View Data</Button>
    </Tooltip>
  );
}
