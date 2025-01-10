import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

interface TelemetryDisplayProps {
  title: string;
  data: { [key: string]: string | number };
  valueColor?: string;
}

const TelemetryDisplay: React.FC<TelemetryDisplayProps> = ({ title, data, valueColor = 'text-gray-900 dark:text-gray-100' }) => {
  return (
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{title}</h3>
      </CardHeader>
      <CardBody className="p-6">
        <ul className="space-y-2">
          {Object.entries(data).map(([key, value]) => (
            <li key={key} className="flex justify-between py-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">{key}</span>
              <span className={valueColor}>{value}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default TelemetryDisplay;
