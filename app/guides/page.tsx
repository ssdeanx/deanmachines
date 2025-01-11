"use client";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { title, subtitle } from "@/components/primitives";
export default function GuidesPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto bg-gradient-to-b from-zinc-50 to-white px-4 py-8">
      <h1 className={title({ color: "blue", size: "lg" })}>Guides</h1>
      <p className={subtitle({ class: "mt-4 text-center" })}>
        Your comprehensive guide to getting started with the Dean Machines
        Autonomous FPV Drone Platform.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700">Project Overview</h2>
        <p className="mt-2 text-gray-600">
          Dean Machines is developing an open-source autonomous drone platform
          using a 5&quot; FPV Racing drone equipped with advanced sensors and AI
          capabilities. Our mission is to create a comprehensive dataset for
          drone autonomy research.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h3 className="text-xl font-bold">Setting Up Your Environment</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">
              Learn how to set up your development environment.
            </p>
            <Button
              className="mt-4"
              color="primary"
              variant="shadow"
              onClick={() => (window.location.href = "/guides/setup")}
            >
              Setup Guide
            </Button>
          </CardBody>
        </Card>

        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h3 className="text-xl font-bold">Collecting Data</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">
              Master the techniques for collecting high-quality drone data.
            </p>
            <Button
              color="primary"
              variant="shadow"
              onClick={() => router.push("/guides/collecting-data")}
            >
              Data Collection Guide
            </Button>
          </CardBody>
        </Card>

        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h3 className="text-xl font-bold">Submitting Data</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">
              Follow our step-by-step guide to contribute your data.
            </p>
            <Button
              className="mt-4"
              color="primary"
              variant="shadow"
              onClick={() => (window.location.href = "/guides/submitting-data")}
            >
              Data Submission Guide
            </Button>
          </CardBody>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-700">Quick Links</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Button
              color="primary"
              variant="light"
              onClick={() => (window.location.href = "/docs")}
            >
              Documentation
            </Button>
          </li>
          <li>
            <Button
              color="primary"
              variant="light"
              onClick={() => (window.location.href = "/blog")}
            >
              Blog
            </Button>
          </li>
          <li>
            <Button
              color="primary"
              variant="light"
              onClick={() => (window.location.href = "/data")}
            >
              Data
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
