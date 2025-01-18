import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Spinner,
} from "@nextui-org/react";

import SensorDataDisplay from "./SensorDataDisplay";

interface SensorData {
  [key: string]: number;
}

interface SensorDataPanelProps {
  initialData?: SensorData;
}

const SensorDataPanel: React.FC<SensorDataPanelProps> = ({ initialData }) => {
  const [selectedSensors, setSelectedSensors] = useState<string[]>(
    initialData ? Object.keys(initialData) : [],
  );
  const [sensorData, setSensorData] = useState<SensorData | null>(
    initialData || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const units = {
    temperature: "°C",
    humidity: "%",
    pressure: "hPa",
    altitude: "m",
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/data");

        if (!response.ok) {
          throw new Error(`Failed to fetch sensor data: ${response.status}`);
        }
        const fetchedData: SensorData = await response.json();

        setSensorData(fetchedData);
      } catch (err: any) {
        setError(err.message || "Failed to fetch sensor data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSensorToggle = (sensor: string) => {
    setSelectedSensors((prev) =>
      prev.includes(sensor)
        ? prev.filter((s) => s !== sensor)
        : [...prev, sensor],
    );
  };

  const filteredData = sensorData
    ? Object.fromEntries(
        Object.entries(sensorData).filter(([key]) =>
          selectedSensors.includes(key),
        ),
      )
    : {};

  return (
    <div className="rounded-lg bg-[hsl(var(--background))] p-4 md:p-6 shadow-md dark:bg-[hsl(var(--default))]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-medium text-foreground dark:text-muted-foreground">
          Sensor Data
        </h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize bg-[hsl(var(--gray-100))] hover:bg-[hsl(var(--gray-200))] dark:bg-[hsl(var(--gray-700))] dark:hover:bg-[hsl(var(--gray-600))] text-foreground dark:text-muted-foreground" size="sm" variant="flat">
              Settings
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Sensor Settings" className="bg-[hsl(var(--background))] dark:bg-[hsl(var(--default))] shadow-md rounded-md">
            {sensorData &&
              Object.keys(sensorData).map((sensor) => (
                <DropdownItem
                  key={sensor}
                  className={
                    selectedSensors.includes(sensor) ? "font-semibold text-foreground dark:text-muted-foreground" : "text-foreground dark:text-muted-foreground"
                  }
                  onClick={() => handleSensorToggle(sensor)}
                >
                  {sensor}
                </DropdownItem>
              ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      {error ? (
        <p className="text-[hsl(var(--error))] p-4 rounded-md bg-[hsl(var(--error))] dark:bg-[hsl(var(--error))] dark:text-muted-foreground">{error}</p>
      ) : isLoading ? (
        <div className="flex justify-center p-8">
          <Spinner color="primary" label="Loading data..." />
        </div>
      ) : (
        <SensorDataDisplay
          data={filteredData}
          title="Sensor Data"
          units={units}
        />
      )}
    </div>
  );
};

export default SensorDataPanel;
