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
                Technical Requirements
              </CardHeader>
              <CardBody>
                <ul className="list-disc space-y-2 pl-4">
                  <li>
                    Experience with Python programming (2+ years recommended)
                  </li>
                  <li>Understanding of drone technology and FPV systems</li>
                  <li>Familiarity with computer vision concepts</li>
                  <li>Basic knowledge of machine learning principles</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mb-6">
              <CardHeader className="text-xl font-semibold">
                Hardware Requirements
              </CardHeader>
              <CardBody>
                <ul className="list-disc space-y-2 pl-4">
                  <li>Access to a compatible FPV drone system</li>
                  <li>
                    Computer with minimum specifications:
                    <ul className="mt-2 list-disc pl-4">
                      <li>8GB RAM (16GB recommended)</li>
                      <li>Modern multi-core processor</li>
                      <li>Dedicated GPU (for computer vision processing)</li>
                    </ul>
                  </li>
                  <li>Reliable internet connection</li>
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
