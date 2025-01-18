"use client";
import { Tooltip, Button } from "@nextui-org/react";

export default function CustomTooltip() {
  return (
    <Tooltip
      className="dark:bg-[hsl(var(--default))]"
      color="primary"
      content={
        <div className="rounded-md bg-[hsl(var(--gray-100))] px-3 py-2 shadow-md dark:bg-[hsl(var(--gray-700))]">
          <div className="text-sm font-bold text-foreground dark:text-muted-foreground">
            Sensor Data
          </div>
          <div className="text-xs text-foreground dark:text-muted-foreground">
            View real-time sensor data from the drone.
          </div>
        </div>
      }
      placement="top"
    >
      <Button
        className="bg-[hsl(var(--gray-100))] text-foreground hover:bg-[hsl(var(--gray-200))] dark:bg-[hsl(var(--gray-700))] dark:text-muted-foreground dark:hover:bg-[hsl(var(--gray-600))]"
        variant="bordered"
      >
        View Data
      </Button>
    </Tooltip>
  );
}
