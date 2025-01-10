import { useAsyncList, AsyncListLoadOptions } from "@react-stately/data";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { SortDescriptor } from "@nextui-org/react";

interface SensorData {
  timestamp: string;
  sensor: string;
  value: string;
  unit: string;
  [key: string]: string;
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const load = async ({}: AsyncListLoadOptions<SensorData, string>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const sensorData = [
      {
        timestamp: new Date().toISOString(),
        sensor: "LiDAR",
        value: "10.5",
        unit: "m",
      },
      {
        timestamp: new Date().toISOString(),
        sensor: "IMU",
        value: "2.3",
        unit: "rad/s",
      },
      {
        timestamp: new Date().toISOString(),
        sensor: "GPS",
        value: "34.0522,-118.2437",
        unit: "lat,lon",
      },
    ];

    setIsLoading(false);

    return {
      items: sensorData,
    };
  };

  const sort = async ({
    items,
    sortDescriptor,
  }: {
    items: SensorData[];
    sortDescriptor: SortDescriptor;
  }) => {
    return {
      items: items.sort((a, b) => {
        let first = a[sortDescriptor.column as keyof SensorData];
        let second = b[sortDescriptor.column as keyof SensorData];
        let cmp = first < second ? -1 : 1;

        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }

        return cmp;
      }),
    };
  };

  let list = useAsyncList<SensorData, string>({ load, sort });

  return (
    <Table
      aria-label="Sensor Data Table"
      classNames={{
        table: "min-h-[400px]",
      }}
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <TableHeader>
        <TableColumn key="timestamp" allowsSorting>
          Timestamp
        </TableColumn>
        <TableColumn key="sensor" allowsSorting>
          Sensor
        </TableColumn>
        <TableColumn key="value" allowsSorting>
          Value
        </TableColumn>
        <TableColumn key="unit" allowsSorting>
          Unit
        </TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.timestamp}>
            {(columnKey) => (
              <TableCell key={columnKey}>
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
