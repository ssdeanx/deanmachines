import { Card, CardBody } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="rounded-lg bg-white shadow-md dark:bg-gray-800">
      <CardBody>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Autonomous Drone Platform</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Dean Machines is developing an open-source autonomous drone
            platform.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Our mission is to create a comprehensive dataset for drone autonomy
            research.
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          We are building a standardized dataset including visual data, LiDAR
          point clouds, radio telemetry, flight controller data, and
          environmental metrics.
        </p>
      </CardBody>
    </Card>
  );
}
