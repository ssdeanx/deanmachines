import * as React from "react"
import { type Metadata } from "next"
import { ArrowRight } from "lucide-react"

import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy - Mastra AI",
  description: "Learn about how we collect, use, and protect your data at Mastra AI.",
}

const sections = [
  {
    id: "collection",
    title: "Information We Collect",
    content: `We collect information that you provide directly to us, including:
    • Account information (name, email, company)
    • Usage data from our services
    • Technical data about your devices and systems
    • Communication data when you contact us`,
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    content: `We use the collected information to:
    • Provide and maintain our services
    • Improve and develop new features
    • Communicate with you about updates
    • Ensure security and prevent fraud`,
  },
  {
    id: "sharing",
    title: "Information Sharing",
    content: `We may share your information with:
    • Service providers who assist our operations
    • Business partners with your consent
    • Legal authorities when required by law
    We never sell your personal data to third parties.`,
  },
  {
    id: "security",
    title: "Data Security",
    content: `We implement robust security measures:
    • End-to-end encryption for sensitive data
    • Regular security audits and assessments
    • Access controls and monitoring
    • Secure data storage and transmission`,
  },
  {
    id: "rights",
    title: "Your Rights",
    content: `You have the right to:
    • Access your personal data
    • Correct inaccurate data
    • Request data deletion
    • Opt-out of communications
    • Export your data`,
  },
  {
    id: "updates",
    title: "Policy Updates",
    content: `We may update this policy periodically. We will notify you of any significant changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <Breadcrumb
        items={[{ title: "Privacy Policy" }]}
        className="mb-8"
      />

      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: April 1, 2025
          </p>
          <p className="text-muted-foreground">
            At Mastra AI, we take your privacy seriously. This policy describes how
            we collect, use, and protect your personal information when you use our
            services.
          </p>
        </div>

        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Quick Links</h2>
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
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-muted-foreground">
            If you have any questions about our privacy policy or how we handle
            your data, please contact our Data Protection Officer at{" "}
            <a
              href="mailto:privacy@mastra.ai"
              className="text-primary hover:underline"
            >
              privacy@mastra.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
