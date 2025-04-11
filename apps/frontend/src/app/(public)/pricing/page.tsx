import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { PricingTable } from "@/components/sections/PricingTable"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { Separator } from "@/components/ui/separator"
import { CallToAction } from "@/components/common/CallToAction"

export const metadata: Metadata = {
  title: `Pricing - ${siteConfig.name}`,
  description: "Choose the perfect plan for your AI development needs.",
}

export default function PricingPage() {
  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Choose the perfect plan for your needs. No hidden fees.
        </p>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      <Separator className="my-20" />

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? We have answers.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Get Started?"
        description="Begin building with our platform today. No credit card required."
        href="/docs/getting-started"
      />
    </div>
  )
}
