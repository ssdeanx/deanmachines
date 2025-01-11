"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import { title } from "@/components/primitives";
import { Button } from "@/components/button";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Documentation</h1>
      <p>This page contains the documentation for the Dean Machines project.</p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="text-xl font-semibold">
            Getting Started
          </CardHeader>
          <CardBody>
            <p>
              New to Dean Machines? Check out our{" "}
              <Button
                onClick={() => (window.location.href = "/docs/getting-started")}
              >
                Getting Started Guide
              </Button>{" "}
              to learn the basics.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">
            API Reference
          </CardHeader>
          <CardBody>
            <p>
              Explore our{" "}
              <Button
                onClick={() => (window.location.href = "/docs/api-reference")}
              >
                API Reference
              </Button>{" "}
              for detailed information on our API endpoints.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">
            Contribution Guidelines
          </CardHeader>
          <CardBody>
            <p>
              Interested in contributing? Read our{" "}
              <Button
                onClick={() =>
                  (window.location.href = "/docs/contribution-guidelines")
                }
              >
                Contribution Guidelines
              </Button>{" "}
              to learn how you can help.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">
            NVIDIA Orin Nano
          </CardHeader>
          <CardBody>
            <p>
              Learn about using the NVIDIA Orin Nano with PyTorch and TensorFlow
              in our{" "}
              <Button
                onClick={() => (window.location.href = "/docs/nvidia-orin")}
              >
                NVIDIA Orin Nano Guide
              </Button>
            </p>
          </CardBody>
        </Card>
      </div>
      <h2 className="mt-6 text-xl font-semibold">Quick Links</h2>
      <ul className="list-disc pl-5">
        <li>
          <Button onClick={() => (window.location.href = "/blog")}>Blog</Button>
        </li>
        <li>
          <Button onClick={() => (window.location.href = "/data")}>Data</Button>
        </li>
        <li>
          <Button onClick={() => (window.location.href = "/requirements")}>
            Requirements
          </Button>
        </li>
      </ul>
    </div>
  );
}
