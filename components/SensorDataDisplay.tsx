import React from "react";

import DataChartDisplay from "./DataChartDisplay";

interface SensorDataDisplayProps {
  title: string;
  data: { [key: string]: number };
  units?: { [key: string]: string };
}

const SensorDataDisplay: React.FC<SensorDataDisplayProps> = ({
  title,
  data,
}) => {
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
        xAxisLabel="Sensor"
        yAxisLabel="Value"
      />
    </div>
  );
};

export default SensorDataDisplay;
