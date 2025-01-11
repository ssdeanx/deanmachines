"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import { title } from "@/components/primitives";
import { Button } from "@/components/button";

export default function GuidesPage() {
  return (
    <div>
      <h1 className={title()}>Guides</h1>
      <p>
        This page contains guides to help you get started with the Dean Machines
        project.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="text-xl font-semibold">
            Setting up your environment
          </CardHeader>
          <CardBody>
            <p>
              Learn how to set up your development environment by following our{" "}
              <Button onClick={() => (window.location.href = "/guides/setup")}>
                setup guide
              </Button>
              .
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">
            Collecting data
          </CardHeader>
          <CardBody>
            <p>
              Learn how to collect data for the Dean Machines project by
              following our{" "}
              <Button
                onClick={() =>
                  (window.location.href = "/guides/collecting-data")
                }
              >
                data collection guide
              </Button>
              .
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="text-xl font-semibold">
            Submitting data
          </CardHeader>
          <CardBody>
            <p>
              Learn how to submit data to the Dean Machines project by following
              our{" "}
              <Button
                onClick={() =>
                  (window.location.href = "/guides/submitting-data")
                }
              >
                data submission guide
              </Button>
              .
            </p>
          </CardBody>
        </Card>
      </div>
      <h2 className="mt-6 text-xl font-semibold">Quick Links</h2>
      <ul className="list-disc pl-5">
        <li>
          <Button onClick={() => (window.location.href = "/docs")}>
            Documentation
          </Button>
        </li>
        <li>
          <Button onClick={() => (window.location.href = "/blog")}>Blog</Button>
        </li>
        <li>
          <Button onClick={() => (window.location.href = "/data")}>Data</Button>
        </li>
      </ul>
    </div>
  );
}
