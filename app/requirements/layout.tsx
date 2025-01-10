"use client";
import { Metadata } from "next";
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { metadata } from "./metadata";

interface RequirementsLayoutProps {
  children: React.ReactNode;
}

export default function RequirementsLayout({
  children,
}: RequirementsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Header Section */}
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Project Requirements
            </h1>
            <p className="text-lg text-default-600">
              Essential guidelines and requirements for participating in the
              DeanMachines project
            </p>
          </header>

          {/* Content Section */}
          <section className="prose prose-neutral dark:prose-invert max-w-none">
            <Card className="mb-6">
              <CardHeader className="text-xl font-semibold">
                Requirements
              </CardHeader>
              <CardBody>
                <ul className="list-disc space-y-2 pl-4">
                  <li>Hardware Compatibility</li>
                  <li>Sensor Calibration</li>
                  <li>Data Format Standards</li>
                  <li>Quality Metrics</li>
                  <li>Validation Process</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mb-6">
              <CardHeader className="text-xl font-semibold">
                Hardware Requirements
              </CardHeader>
              <CardBody>
                <ul className="list-disc space-y-2 pl-4">
                  <li>5" FPV Racing Drone Frame</li>
                  <li>NVIDIA Jetson Orin Nano</li>
                  <li>TFmini-S LiDAR Sensor</li>
                  <li>HD FPV Camera (>720p)</li>
                  <li>GPS Module (uBlox NEO-M8N or better)</li>
                  <li>IMU (MPU6050 or better)</li>
                  <li>SDR (YHY 9800 or compatible)</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mb-6">
              <CardHeader className="text-xl font-semibold">
                Participation Requirements
              </CardHeader>
              <CardBody>
                <ul className="list-disc space-y-2 pl-4">
                  <li>Commit to minimum 5 hours per week</li>
                  <li>Willingness to share and document findings</li>
                  <li>Active participation in project discussions</li>
                  <li>Follow safety guidelines and regulations</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mb-6">
              <CardHeader className="text-xl font-semibold">
                Next Steps
              </CardHeader>
              <CardBody>
                <p className="mb-4">
                  If you meet these requirements and are interested in joining
                  the project:
                </p>
                <ol className="list-decimal space-y-2 pl-4">
                  <li>
                    Review the complete <Link href="/docs">documentation</Link>
                  </li>
                  <li>
                    Check the <Link href="/guides">getting started guide</Link>
                  </li>
                  <li>
                    Submit your application through the{" "}
                    <Link href="/contact">contact form</Link>
                  </li>
                </ol>
              </CardBody>
            </Card>
          </section>

          {children}

          {/* Footer Section */}
          <footer className="mt-12 border-t border-default-200 pt-6">
            <p className="text-sm text-default-500">
              For questions about requirements, please contact us through the{" "}
              <Link className="text-primary" href="/contact">
                contact form
              </Link>
              .
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
