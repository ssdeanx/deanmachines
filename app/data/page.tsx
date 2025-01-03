"use client";

import { useState, useEffect } from "react";
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

import { title } from "@/components/primitives";

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
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulated API call - replace with your actual API endpoint
        const mockData = [
          { id: 1, title: "Data Point 1", description: "Description 1" },
          { id: 2, title: "Data Point 2", description: "Description 2" },
        ];

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setData(mockData);
      } catch {
        setError("Failed to load data. Please try again later.");
        // Log the error to an external service or handle it appropriately
        // Example: logErrorToService(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div animate="show" initial="hidden" variants={itemVariants}>
      <Card className="mb-8">
        <CardBody>
          <h1 className={title({ color: "violet", size: "lg" })}>
            Data Overview
          </h1>
          {error ? (
            <p className="text-danger">{error}</p>
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
        </CardBody>
      </Card>
    </motion.div>
  );
}
