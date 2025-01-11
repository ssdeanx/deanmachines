"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import DashboardSidebar from "@/components/dashboard-sidebar";
import { useDataFetch } from "@/hooks";
import DroneMap from "@/components/DroneMap";
import FlightDataDisplay from "@/components/FlightDataDisplay";
import IMUDataDisplay from "@/components/IMUDataDisplay";
import LidarDataDisplay from "@/components/LidarDataDisplay";
import SensorDataDisplay from "@/components/SensorDataDisplay";
import TelemetryDisplay from "@/components/TelemetryDisplay";
import CustomTooltip from "@/components/tooltip";
import AppTable from "@/components/table";
import { DashboardData } from "@/types";

const DashboardPage = () => {
  // Fetch mock data
  const { data, isLoading, error } = useDataFetch<DashboardData>({
    url: "/api/data",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1 space-y-4 p-4">
        <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
            <CardHeader>
              <h2 className="mb-2 text-xl font-semibold">User Information</h2>
            </CardHeader>
            <CardBody>
              {/* In a real application, user data would be fetched after OAuth authentication */}
              {/* Example: const user = await fetch('/api/user', { headers: { Authorization: `Bearer ${token}` } }).then(res => res.json()); */}
              <p>Name: {data.user.name}</p>
              <p>Email: {data.user.email}</p>
            </CardBody>
          </Card>
          <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
            <CardHeader>
              <h2 className="mb-2 text-xl font-semibold">Drone Status</h2>
            </CardHeader>
            <CardBody>
              {/* Drone data would be fetched from a secure API endpoint after OAuth authentication */}
              {/* Example: const droneData = await fetch('/api/drone', { headers: { Authorization: `Bearer ${token}` } }).then(res => res.json()); */}
              <p>Status: {data.drone.status}</p>
              <p>Location: {data.drone.location}</p>
              <p>Battery: {data.drone.battery}%</p>
            </CardBody>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FlightDataDisplay
            distance={data.flightData.distance}
            flightTime={data.flightData.duration}
            maxAltitude={data.flightData.maxAltitude}
          />
          <DroneMap
            latitude={data.drone.latitude}
            longitude={data.drone.longitude}
            path={data.drone.path}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <IMUDataDisplay data={data.imuData} />
          <LidarDataDisplay data={data.lidarData} />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SensorDataDisplay
            data={data.sensorData}
            title="Environmental Data"
            units={{
              temperature: "°C",
              humidity: "%",
              pressure: "hPa",
            }}
          />
          <TelemetryDisplay data={data.telemetryData} title="Telemetry Data" />
        </div>
        <div className="flex justify-end">
          <CustomTooltip />
        </div>
        <AppTable />
        <p className="mt-4 text-gray-500">
          {/* OAuth will be needed to fetch real user, drone, flight, and sensor data. */}
          {/* The mock data above is for demonstration purposes only. */}
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
