"use client";

import { useState, useEffect } from "react";

import DataLayout from "./layout";

import { title } from "@/components/primitives";
import { logger } from "@/lib/logger";

export default function DataPage() {
  const [data, setData] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Use a real API endpoint or add error handling for development
        const mockData = [
          { id: 1, title: "Example Data 1", description: "Description 1" },
          { id: 2, title: "Example Data 2", description: "Description 2" },
        ];
        // Simulate API call during development
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ ok: true, json: () => mockData }), 1000),
        );
        const res = response as { json: () => Promise<any> };
        const json = await res.json();

        if (!json || !Array.isArray(json)) {
          throw new Error("Invalid data format received");
        }
        setData(json);
      } catch (error) {
        setError("Failed to load data. Please try again later.");
        logger.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataLayout>
      <h1 className={title({ color: "violet", size: "lg", fullWidth: true })}>
        Data
      </h1>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2 className={title({ color: "foreground", size: "md" })}>
                {item.title}
              </h2>
            </li>
          ))}
        </ul>
      )}
    </DataLayout>
  );
}
