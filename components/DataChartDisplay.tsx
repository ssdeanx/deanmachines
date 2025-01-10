"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import D3Chart from "./D3Chart";

interface DataChartDisplayProps {
  title: string;
  data: number[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  colorScale: string; // Add this line
}

const DataChartDisplay: React.FC<DataChartDisplayProps> = ({
  title,
  data,
  xAxisLabel,
  yAxisLabel,
}) => {
  return (
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </CardHeader>
      <CardBody className="p-6">
        <div className="chart-container">
          <D3Chart
            data={data}
            xAxisLabel={xAxisLabel}
            yAxisLabel={yAxisLabel}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default DataChartDisplay;
