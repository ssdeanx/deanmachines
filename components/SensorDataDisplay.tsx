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
  units = {},
}) => {
  const chartData = Object.entries(data).map(([key, value]) => {
    if (typeof value === "number") {
      return value;
    }

    return 0;
  });

  return (
    <div className="chart-container">
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
