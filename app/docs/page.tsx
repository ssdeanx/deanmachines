"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

import { title, subtitle } from "@/components/primitives";
import { BookOpenIcon } from "@/components/icons";

export default function DocsPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className={title({ size: "lg" })}>
          <BookOpenIcon className="mr-2 inline-block" size={30} />
          Documentation
        </h1>
        <div className={subtitle({ class: "mt-4" })}>
          Explore the documentation for the Dean Machines project.
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="card">
          <CardHeader className="text-xl font-semibold">
            Getting Started
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 dark:text-gray-500">
              New to Dean Machines? Check out our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/getting-started"
              >
                Getting Started Guide
              </Link>{" "}
              to learn the basics.
            </p>
          </CardBody>
        </Card>
        <Card className="card">
          <CardHeader className="text-xl font-semibold">
            API Reference
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 dark:text-gray-500">
              Explore our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/api-reference"
              >
                API Reference
              </Link>{" "}
              for detailed information on our API endpoints.
            </p>
          </CardBody>
        </Card>
        <Card className="card">
          <CardHeader className="text-xl font-semibold">
            Contribution Guidelines
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 dark:text-gray-500">
              Interested in contributing? Read our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/contribution-guidelines"
              >
                Contribution Guidelines
              </Link>{" "}
              to learn how you can help.
            </p>
          </CardBody>
        </Card>
        <Card className="card">
          <CardHeader className="text-xl font-semibold">
            NVIDIA Orin Nano
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 dark:text-gray-500">
              Learn about using the NVIDIA Orin Nano with PyTorch and TensorFlow
              in our{" "}
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
                href="/docs/nvidia-orin"
              >
                NVIDIA Orin Nano Guide
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
      <h2 className="mt-6 text-xl font-semibold">Quick Links</h2>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-500">
        <li>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
            href="/data"
          >
            Data
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
            href="/requirements"
          >
            Requirements
          </Link>
        </li>
      </ul>
    </div>
  );
}
