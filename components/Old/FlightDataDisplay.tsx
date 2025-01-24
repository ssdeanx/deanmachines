import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface FlightDataDisplayProps {
  distance: number;
  maxAltitude: number;
  flightTime: number;
}

const FlightDataDisplay: React.FC<FlightDataDisplayProps> = ({
  distance,
  maxAltitude,
  flightTime,
}) => {
  return (
    <Card className="card">
      <CardHeader className="pb-0">
        <h3 className="text-xl font-medium text-foreground dark:text-muted-foreground">
          Flight Data
        </h3>
      </CardHeader>
      <CardBody className="p-4 md:p-6">
        <ul className="space-y-2">
          <li className="flex justify-between border-b border-[hsl(var(--gray-200))] py-1 dark:border-[hsl(var(--gray-700))]">
            <span className="font-medium text-foreground dark:text-muted-foreground">
              Distance Traveled
            </span>
            <span className="text-foreground dark:text-muted-foreground">
              {distance.toFixed(2)} m
            </span>
          </li>
          <li className="flex justify-between border-b border-[hsl(var(--gray-200))] py-1 dark:border-[hsl(var(--gray-700))]">
            <span className="font-medium text-foreground dark:text-muted-foreground">
              Maximum Altitude
            </span>
            <span className="text-foreground dark:text-muted-foreground">
              {maxAltitude.toFixed(2)} m
            </span>
          </li>
          <li className="flex justify-between py-1">
            <span className="font-medium text-foreground dark:text-muted-foreground">
              Flight Time
            </span>
            <span className="text-foreground dark:text-muted-foreground">
              {flightTime.toFixed(2)} s
            </span>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default FlightDataDisplay;
