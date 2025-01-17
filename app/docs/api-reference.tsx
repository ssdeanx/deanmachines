import { Code } from "@nextui-org/code";

import { title, subtitle } from "@/components/primitives";

export default function ApiReferencePage() {
  return (
    <div>
      <div className="text-center">
        <h1 className={title({ size: "lg" })}>API Reference</h1>
        <div className={subtitle({ class: "mt-4" })}>
          This page provides a reference for the API endpoints used in the Dean
          Machines project.
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mt-6 text-xl font-semibold">Data API</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The data API provides access to the data used in the project.
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>
            <Code>GET /api/data</Code> - Get all data.
          </li>
          <li>
            <Code>GET /api/data/:id</Code> - Get data by ID.
          </li>
        </ul>
        <h2 className="mt-6 text-xl font-semibold">Form API</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The form API provides an endpoint for submitting contact form data.
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>
            <Code>POST /api/form</Code> - Submit contact form data.
          </li>
        </ul>
        <h2 className="mt-6 text-xl font-semibold">Onboard Systems</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The onboard systems are responsible for real-time processing on the
          drone.
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>NVIDIA Orin Nano for real-time processing</li>
          <li>Custom sensor fusion pipeline</li>
          <li>Edge AI inference</li>
          <li>Real-time telemetry streaming</li>
        </ul>
        <h2 className="mt-6 text-xl font-semibold">Ground Station</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The ground station is responsible for processing and visualizing the
          data collected by the drone.
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>SDR signal processing</li>
          <li>Real-time data visualization</li>
          <li>Neural network training</li>
          <li>Dataset validation tools</li>
        </ul>
      </div>
    </div>
  );
}
