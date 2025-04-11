import * as React from "react"
import { type Metadata } from "next"
import { ArrowRight, AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Terms of Service - Mastra AI",
  description: "Read our terms of service and acceptable use policy.",
}

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing or using Mastra AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.`,
  },
  {
    id: "services",
    title: "Services Description",
    content: `Mastra AI provides a platform for developing, deploying, and managing AI agents. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.`,
  },
  {
    id: "account",
    title: "Account Responsibilities",
    content: `You are responsible for:
    • Maintaining the confidentiality of your account
    • All activities that occur under your account
    • Ensuring your account information is accurate
    • Notifying us of any unauthorized access`,
  },
  {
    id: "usage",
    title: "Acceptable Use",
    content: `You agree not to:
    • Use the services for any illegal purpose
    • Attempt to gain unauthorized access
    • Transmit harmful code or content
    • Infringe on intellectual property rights
    • Resell the services without authorization`,
  },
  {
    id: "intellectual",
    title: "Intellectual Property",
    content: `All rights, title, and interest in the services, including all intellectual property rights, remain with Mastra AI. You receive only a limited, non-exclusive license to use the services as permitted by these terms.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `Mastra AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the services.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `We may terminate or suspend your access to the services immediately, without prior notice, for violations of these terms or for any other reason we deem appropriate.`,
  },
]

export default function TermsPage() {
  return (
    <div className="container py-10">
      <Breadcrumb
        items={[{ title: "Terms of Service" }]}
        className="mb-8"
      />

      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: April 1, 2025
          </p>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              Please read these terms carefully before using our services. These terms
              affect your legal rights and obligations.
            </AlertDescription>
          </Alert>
        </div>

        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Quick Navigation</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </Card>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="mt-4 whitespace-pre-line text-muted-foreground">
                {section.content}
              </div>
              <Separator className="mt-12" />
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted p-6">
          <h2 className="text-xl font-semibold">Questions About Our Terms?</h2>
          <p className="mt-2 text-muted-foreground">
            If you have any questions about our terms of service, please contact our
            legal team at{" "}
            <a
              href="mailto:legal@mastra.ai"
              className="text-primary hover:underline"
            >
              legal@mastra.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
