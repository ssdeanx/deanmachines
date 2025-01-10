import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface SensorDataDisplayProps {
  title: string;
  data: { [key: string]: string | number };
  units?: { [key: string]: string };
  displayType?: "list" | "table";
}

const SensorDataDisplay: React.FC<SensorDataDisplayProps> = ({
  title,
  data,
  units = {},
  displayType = "list",
}) => {
  if (displayType === "table") {
    return (
      <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
        <CardHeader>
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </CardHeader>
        <CardBody className="p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-medium text-gray-700 dark:text-gray-300">
                  Sensor
                </th>
                <th className="text-left font-medium text-gray-700 dark:text-gray-300">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([key, value]) => (
                <tr key={key} className="py-1">
                  <td className="font-medium text-gray-700 dark:text-gray-300">
                    {key}
                  </td>
                  <td className="text-gray-900 dark:text-gray-100">
                    {value} {units[key] || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </CardHeader>
      <CardBody className="p-6">
        <ul className="space-y-2">
          {Object.entries(data).map(([key, value]) => (
            <li key={key} className="flex justify-between py-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {key}
              </span>
              <span className="text-gray-900 dark:text-gray-100">
                {value} {units[key] || ""}
              </span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default SensorDataDisplay;
