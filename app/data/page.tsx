/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
 
 import { useState } from "react";
 import {
    Card,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
 } from "@mui/material";
 import Typography from '@mui/material/Typography';
 import { motion } from "framer-motion";
 
 import { dataContent } from "@/constants/index";
 import { title, subtitle } from "@/components/primitives";
 import D3Chart from "@/components/D3Chart";
 import DashboardSidebar from "@/components/dashboard-sidebar";
 import SensorDataPanel from "@/components/Old/SensorDataPanel";
 import PointCloudChart from "@/components/Old/PointCloudChart";
 import Divider from "@/components/divider";
 import CardContent from '@mui/material/CardContent';
 import CardHeader from '@mui/material/CardHeader';
 
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
          <CardHeader>
            <Typography variant="h4" component="h1" className="text-2xl font-bold text-blue-500">
              Data Overview
            </Typography>
          </CardHeader>
          <CardContent>
            {error ? (
              <Typography variant="body1" className="text-red-500">{error}</Typography>
            ) : isLoading ? (
              <div className="flex justify-center p-8">
                <CircularProgress color="primary" />
              </div>
            ) : (
              <TableContainer component={Paper} sx={{ minHeight: '400px' }}>
                <Table
                  aria-label="Data table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>TITLE</TableCell>
                      <TableCell>DESCRIPTION</TableCell>
                    </TableRow>
                  </TableHead>
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
              </TableContainer>
            )}
            <D3Chart data={[10, 30, 50, 20, 60, 40, 80, 70, 90, 100]} />
            <SensorDataPanel
              initialData={{
                temperature: 25,
                humidity: 60,
                pressure: 1010,
                altitude: 100,
              }}
            />
            <Divider my-8 />
            <PointCloudChart />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
 }
