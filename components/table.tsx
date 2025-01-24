import { useAsyncList, AsyncListLoadOptions } from "@react-stately/data";
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Typography,
    Box
} from "@mui/material";
import TableSortLabel from '@mui/material/TableSortLabel';
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
    <TableContainer component={Paper} sx={{ minHeight: '400px', backgroundColor: theme => theme.palette.mode === 'dark' ? 'hsl(var(--default))' : 'hsl(var(--background))' }}>
    <Table
      aria-label="Sensor Data Table"
    >
      <TableHead>
        <TableRow>
        <TableCell key="timestamp" >
          Timestamp
        </TableCell>
        <TableCell key="sensor" >
          Sensor
        </TableCell>
        <TableCell key="value" >
          Value
        </TableCell>
        <TableCell key="unit" >
          Unit
        </TableCell>
        </TableRow>
      </TableHead>
      <TableBody
      >
        {list.items.map((item) => (
          <TableRow key={item.timestamp}>
            {Object.keys(item).map((columnKey) => (
              <TableCell key={columnKey}>
                {item[columnKey as keyof SensorData]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}><CircularProgress /></Box>}
    </TableContainer>
  );
 }
