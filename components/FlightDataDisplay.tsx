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
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Flight Data
        </h3>
      </CardHeader>
      <CardBody className="p-6">
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Distance Traveled
            </span>
            <span className="text-gray-900 dark:text-gray-100">
              {distance.toFixed(2)} m
            </span>
          </li>
          <li className="flex justify-between py-1">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Maximum Altitude
            </span>
            <span className="text-gray-900 dark:text-gray-100">
              {maxAltitude.toFixed(2)} m
            </span>
          </li>
          <li className="flex justify-between py-1">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Flight Time
            </span>
            <span className="text-gray-900 dark:text-gray-100">
              {flightTime.toFixed(2)} s
            </span>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default FlightDataDisplay;
