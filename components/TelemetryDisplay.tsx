import React from "react";

import DataChartDisplay from "./DataChartDisplay";

interface TelemetryDisplayProps {
  title: string;
  data: { [key: string]: string | number };
}

const TelemetryDisplay: React.FC<TelemetryDisplayProps> = ({ title, data }) => {
  const chartData = Object.entries(data).map(([, value]) => {
    if (typeof value === "number") {
      return value;
    }

    return 0;
  });

  return (
    <div className="bg-gray-100 rounded-lg p-4 md:p-6 shadow-md">
      <DataChartDisplay
        colorScale={""}
        data={chartData}
        title={title}
        xAxisLabel="Telemetry"
        yAxisLabel="Value"
      />
    </div>
  );
};

export default TelemetryDisplay;
