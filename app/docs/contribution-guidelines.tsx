import { title, subtitle } from "@/components/primitives";
import { ClipboardCheckIcon } from "@/components/icons";

export default function ContributionGuidelinesPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className={title({ size: "lg" })}>
          <ClipboardCheckIcon className="mr-2 inline-block" size={30} />
          Contribution Guidelines
        </h1>
        <div className={subtitle({ class: "mt-4" })}>
          This page provides guidelines for contributing to the Dean Machines
          project.
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mt-6 text-xl font-semibold">Code Style</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please follow the code style used in the project.
        </p>
        <h2 className="mt-6 text-xl font-semibold">Pull Requests</h2>
        <p className="text-gray-600 dark:text-gray-400">
          When submitting a pull request, please make sure to:
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>Write a clear description of the changes.</li>
          <li>Include tests for the changes.</li>
          <li>Make sure the tests pass.</li>
        </ul>
        <h2 className="mt-6 text-xl font-semibold">Dataset Contribution</h2>
        <p className="text-gray-600 dark:text-gray-400">
          To contribute to the dataset, please follow these guidelines:
        </p>
        <h3 className="mt-4 text-lg font-semibold">
          Required Hardware Configuration
        </h3>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>5&quot; FPV Racing Drone Frame</li>
          <li>NVIDIA Jetson Orin Nano</li>
          <li>TFmini-S LiDAR Sensor</li>
          <li>HD FPV Camera (&gt;720p)</li>
          <li>GPS Module (uBlox NEO-M8N or better)</li>
          <li>IMU (MPU6050 or better)</li>
          <li>SDR (YHY 9800 or compatible)</li>
        </ul>
        <h3 className="mt-4 text-lg font-semibold">
          Data Collection Requirements
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          The data should be collected according to the following interface:
        </p>
        <pre>
          <code className="text-gray-600 dark:text-gray-400">
            interface DroneDataPoint &#123; timestamp: number;{" "}
            {/* Unix timestamp (ms) */}
            gps: &#123; lat: number; {/* Latitude */} lon: number;{" "}
            {/* Longitude */}
            {/* Longitude */}
            alt: number; {/* Altitude (m) */} accuracy: number;{" "}
            {/* GPS accuracy (m) */}
            &#125;; imu: &#123; acceleration: Vec3; {/* m/s² */} gyroscope:
            Vec3; {/* rad/s */}
            magnetometer: Vec3; {/* μT */} &#125;; lidar: &#123; distance:
            number; {/* Distance in meters */} strength: number;{" "}
            {/* Signal strength */}
            &#125;; camera: &#123; resolution: string; {/* "1280x720" */} fps:
            number;
            {/* Frames per second */} format: string; {/* "h264" */} &#125;;
            radio: &#123; frequency: number; {/* MHz */} signalStrength: number;{" "}
            {/* dBm */} bandwidth: number; {/* MHz */} &#125;; &#125;
          </code>
        </pre>
        <h3 className="mt-4 text-lg font-semibold">Data Submission Process</h3>
        <p className="text-gray-600 dark:text-gray-400">
          1. <strong>Data Collection</strong>
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>Minimum 10 minutes of continuous flight</li>
          <li>
            Various flight patterns required:
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Hover</li>
              <li>Forward flight</li>
              <li>Figure-8</li>
              <li>Obstacle navigation</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400">
          2. <strong>Data Validation</strong>
        </p>
        <pre>
          <code className="text-gray-600 dark:text-gray-400">
            # Validate dataset structure npm run validate-dataset path/to/data #
            Generate validation report npm run generate-report
          </code>
        </pre>
        <p className="text-gray-600 dark:text-gray-400">
          3. <strong>Submission Format</strong>
        </p>
        <pre>
          <code className="text-gray-600 dark:text-gray-400">
            dataset/ ├── metadata.json # Flight information ├── raw/ # Raw
            sensor data │ ├── camera/ # Video streams │ ├── lidar/ # LiDAR point
            clouds │ ├── imu/ # IMU readings │ └── radio/ # SDR captures └──
            processed/ # Processed data ├── trajectory/ # Flight path ├──
            obstacles/ # Detected obstacles └── annotations/ # Manual
            annotations
          </code>
        </pre>
        <h3 className="mt-4 text-lg font-semibold">Quality Standards</h3>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>Camera: 720p minimum at 30fps</li>
          <li>LiDAR: 100Hz minimum sampling rate</li>
          <li>IMU: 200Hz minimum sampling rate</li>
          <li>GPS: 10Hz minimum update rate</li>
          <li>Radio: 433MHz band captures at 2MSPS</li>
        </ul>
        <h3 className="mt-4 text-lg font-semibold">Review Process</h3>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>Automated validation check</li>
          <li>Data quality assessment</li>
          <li>Manual review by core team</li>
          <li>Integration into main dataset</li>
        </ul>
      </div>
    </div>
  );
}
