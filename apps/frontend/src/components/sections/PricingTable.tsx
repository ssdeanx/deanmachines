'use client';
import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { CallToAction } from "@/components/common/CallToAction"

interface PlanFeature {
  text: string
  footnote?: string
}

interface Plan {
  name: string
  description: string
  price: {
    monthly: string
    annual: string
  }
  features: PlanFeature[]
  cta: {
    text: string
    href: string
  }
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: "Hobby",
    description: "Perfect for personal projects and experiments",
    price: {
      monthly: "$0",
      annual: "$0",
    },
    features: [
      { text: "1 AI Agent" },
      { text: "1,000 API calls/month" },
      { text: "Basic memory storage" },
      { text: "Community support" },
      { text: "Public templates" },
    ],
    cta: {
      text: "Start for Free",
      href: "/signup",
    },
  },
  {
    name: "Pro",
    description: "For professionals and small teams",
    price: {
      monthly: "$49",
      annual: "$470",
    },
    features: [
      { text: "10 AI Agents" },
      { text: "50,000 API calls/month" },
      { text: "Advanced memory management" },
      { text: "Priority support" },
      { text: "Private templates" },
      { text: "Custom integrations" },
      { text: "Usage analytics" },
    ],
    cta: {
      text: "Get Started",
      href: "/signup/pro",
    },
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: {
      monthly: "Custom",
      annual: "Custom",
    },
    features: [
      { text: "Unlimited AI Agents" },
      { text: "Custom API limits" },
      { text: "Enterprise memory solutions" },
      { text: "24/7 Support" },
      { text: "Custom templates" },
      { text: "Advanced security" },
      { text: "SLA guarantees" },
      { text: "Dedicated account manager" },
    ],
    cta: {
      text: "Contact Sales",
      href: "/contact",
    },
  },
]

export function PricingTable() {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="pricing-heading"
            className="text-4xl font-heading tracking-tight sm:text-5xl"
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your needs. All plans include core features.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center gap-x-4">
            <span className="text-sm font-semibold">Monthly</span>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span className="text-sm font-semibold">
              Annual
              <Badge className="ml-2" variant="secondary">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn("relative ring-1 ring-ring", {
                "border-primary ring-primary": plan.popular,
              })}
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  variant="default"
                >
                  Most Popular
                </Badge>
              )}
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold leading-7"
                  id={`${plan.name}-plan`}
                >
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {plan.description}
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-bold tracking-tight">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== "Custom" && (
                    <>
                      {" "}
                      <span className="text-sm font-semibold leading-6 text-muted-foreground">
                        {isAnnual ? "/year" : "/month"}
                      </span>
                    </>
                  )}
                </p>                <CallToAction
                  title={plan.cta.text}
                  href={plan.cta.href}
                  variant={plan.popular ? "default" : "outline"}
                  showArrow={plan.popular}
                  className={cn("mt-6 w-full transition-all duration-300", {
                    "shadow-sm hover:shadow-md": plan.popular,
                  })}
                  aria-describedby={`${plan.name}-plan`}
                />
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6"
                >
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      <span>
                        {feature.text}
                        {feature.footnote && (
                          <sup
                            className="cursor-help text-xs text-muted-foreground"
                            title={feature.footnote}
                          >
                            *
                          </sup>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
