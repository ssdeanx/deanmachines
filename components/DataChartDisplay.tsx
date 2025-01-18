"use client";

import type { DataChartDisplayProps } from "@/types";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import D3Chart from "./D3Chart";

const DataChartDisplay: React.FC<DataChartDisplayProps> = ({
  title,
  data,
  xAxisLabel,
  yAxisLabel,
}) => {
  return (
    <Card className="card">
      <CardHeader className="pb-0">
        <h3 className="text-xl font-medium text-foreground dark:text-muted-foreground">
          {title}
        </h3>
      </CardHeader>
      <CardBody className="p-4 md:p-6">
        <div className="rounded-md">
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
