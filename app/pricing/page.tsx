"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Button,
} from "@nextui-org/react";

import { title, subtitle } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div className="container mx-auto bg-gradient-to-b from-zinc-50 to-white px-4 py-8">
      <h1 className={title({ color: "blue", size: "lg" })}>Pricing</h1>
      <p className={subtitle({ class: "mt-4 text-center" })}>
        Choose the plan that&apos;s right for you.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h2 className="text-xl font-bold">Basic</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-4xl font-bold text-blue-500">$0</p>
            <p className="text-gray-500">/month</p>
            <ul className="mt-4 space-y-2">
              <li>✅ Access to the open-source dataset</li>
              <li>✅ Community support</li>
              <li>✅ Limited sensor data access</li>
              <li>✅ Standard data formats</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              className="w-full text-white"
              color="primary"
              variant="shadow"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h2 className="text-xl font-bold">Pro</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-4xl font-bold text-blue-500">$9</p>
            <p className="text-gray-500">/month</p>
            <ul className="mt-4 space-y-2">
              <li>✅ All Basic features</li>
              <li>✅ Full sensor data access</li>
              <li>✅ Advanced data formats (e.g., raw, processed)</li>
              <li>✅ Priority support</li>
              <li>✅ Early access to new features</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              className="w-full text-white"
              color="primary"
              variant="shadow"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card className="transition-all hover:shadow-xl">
          <CardHeader>
            <h2 className="text-xl font-bold">Enterprise</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-4xl font-bold text-blue-500">$49</p>
            <p className="text-gray-500">/month</p>
            <ul className="mt-4 space-y-2">
              <li>✅ All Pro features</li>
              <li>✅ Custom data processing</li>
              <li>✅ Dedicated support</li>
              <li>✅ On-premise deployment option</li>
              <li>✅ Integration with existing systems</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              className="w-full text-white"
              color="primary"
              variant="shadow"
            >
              Contact Us
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
