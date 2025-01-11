/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Spinner,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { motion } from "framer-motion";

import { dataContent } from "@/constants/index";
import { title } from "@/components/primitives";
import D3Chart from "@/components/D3Chart";
import DashboardSidebar from "@/components/dashboard-sidebar";
import SensorDataPanel from "@/components/SensorDataPanel";
import PointCloudChart from "@/components/PointCloudChart";
import Divider from "@/components/divider";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface DataItem {
  id: number;
  title: string;
  description: string;
}

export default function DataPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<DataItem[]>(dataContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex">
      <DashboardSidebar />
      <motion.div
        animate="show"
        className="flex-1"
        initial="hidden"
        variants={itemVariants}
      >
        <Card className="mb-8">
          <CardBody>
            <h1 className={title({ color: "violet", size: "lg" })}>
              Data Overview
            </h1>
            {error ? (
              <p className="">{error}</p>
            ) : isLoading ? (
              <div className="flex justify-center p-8">
                <Spinner color="primary" label="Loading data..." />
              </div>
            ) : (
              <Table
                aria-label="Data table"
                classNames={{
                  wrapper: "min-h-[400px]",
                }}
              >
                <TableHeader>
                  <TableColumn>ID</TableColumn>
                  <TableColumn>TITLE</TableColumn>
                  <TableColumn>DESCRIPTION</TableColumn>
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            <D3Chart data={[10, 30, 50, 20, 60, 40, 80, 70, 90, 100]} />
            <SensorDataPanel initialData={{
                temperature: 25,
                humidity: 60,
                pressure: 1010,
                altitude: 100,
              }} />
            <Divider my-8 />
            <PointCloudChart />
            </CardBody>
          </Card>
      </motion.div>
    </div>
  );
}
