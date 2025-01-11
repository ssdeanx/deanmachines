"use client";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import { useEffect } from "react";

import { RequirementItem } from "@/types/index";
import { requirementsContent } from "@/constants/index";
export default function RequirementsPage() {
  const [requirements, setRequirements] =
    useState<RequirementItem[]>(requirementsContent);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRequirements = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/requirements");
        const data: RequirementItem[] = await response.json();

        setRequirements(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  return (
    <div className="py-8">
      <h1 className="mb-4 text-2xl font-bold">Requirements</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-5 w-3/5 rounded-lg" />
                </CardHeader>
                <Divider />
                <CardBody>
                  <Skeleton className="h-10 w-full rounded-lg" />
                </CardBody>
                <Divider />
                <CardFooter>
                  <Skeleton className="h-4 w-2/5 rounded-lg" />
                </CardFooter>
              </Card>
            ))
          : requirements.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{item.description}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Last updated:{" "}
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
}
