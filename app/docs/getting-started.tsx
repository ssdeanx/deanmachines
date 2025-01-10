import { title } from "@/components/primitives";

export default function GettingStartedPage() {
  return (
    <div>
      <h1 className={title()}>Getting Started</h1>
      <p>
        This page provides a guide to getting started with the Dean Machines
        project.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Project Overview</h2>
      <p>
        Dean Machines is developing an open-source autonomous drone platform
        using a 5&quot; FPV Racing drone equipped with advanced sensors and AI
        capabilities. Our mission is to create a comprehensive dataset for drone
        autonomy research.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Hardware Stack</h2>
      <ul className="list-disc pl-5">
        <li>
          {/* eslint-disable-next-line */}
          <strong>Drone Platform</strong>: 5" FPV Racing Drone
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <strong>AI Computer</strong>: NVIDIA Jetson Orin Nano
        </li>
        <li>
          <strong>Sensors</strong>:
          <ul className="list-disc pl-5">
            <li>TFmini-S LiDAR</li>
            <li>AI-enabled Camera Module</li>
            <li>IMU/Gyroscope</li>
            <li>GPS Module</li>
          </ul>
        </li>
        <li>
          <strong>Communication</strong>:
          <ul className="list-disc pl-5">
            <li>YHY 9800 Eng D SDR</li>
            <li>433MHz Receiver</li>
            <li>FPV Video Receiver</li>
            <li>30ft Monopole Antenna</li>
          </ul>
        </li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Data Collection Framework</h2>
      <p>
        {/* eslint-disable-next-line */}
        We're building a standardized dataset including:
      </p>
      <ul className="list-disc pl-5">
        <li>Visual Data (RGB + Depth)</li>
        <li>LiDAR Point Clouds</li>
        <li>Radio Telemetry</li>
        <li>Flight Controller Data</li>
        <li>Environmental Metrics</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Installation</h2>
      <p>To install the project, follow these steps:</p>
      <ol className="list-decimal pl-5">
        <li>Clone the repository.</li>
        <li>Install the dependencies.</li>
        <li>Run the development server.</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold">Usage</h2>
      <p>To use the project, follow these steps:</p>
      <ol className="list-decimal pl-5">
        <li>Navigate to the project directory.</li>
        <li>Start the application.</li>
      </ol>
    </div>
  );
}
