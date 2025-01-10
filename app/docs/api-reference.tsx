import { title } from "@/components/primitives";

export default function ApiReferencePage() {
  return (
    <div>
      <h1 className={title()}>API Reference</h1>
      <p>
        This page provides a reference for the API endpoints used in the Dean
        Machines project.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Data API</h2>
      <p>The data API provides access to the data used in the project.</p>
      <ul className="list-disc pl-5">
        <li>
          <code>GET /api/data</code> - Get all data.
        </li>
        <li>
          <code>GET /api/data/:id</code> - Get data by ID.
        </li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Form API</h2>
      <p>The form API provides an endpoint for submitting contact form data.</p>
      <ul className="list-disc pl-5">
        <li>
          <code>POST /api/form</code> - Submit contact form data.
        </li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Onboard Systems</h2>
      <p>
        The onboard systems are responsible for real-time processing on the
        drone.
      </p>
      <ul className="list-disc pl-5">
        <li>NVIDIA Orin Nano for real-time processing</li>
        <li>Custom sensor fusion pipeline</li>
        <li>Edge AI inference</li>
        <li>Real-time telemetry streaming</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Ground Station</h2>
      <p>
        The ground station is responsible for processing and visualizing the
        data collected by the drone.
      </p>
      <ul className="list-disc pl-5">
        <li>SDR signal processing</li>
        <li>Real-time data visualization</li>
        <li>Neural network training</li>
        <li>Dataset validation tools</li>
      </ul>
    </div>
  );
}
