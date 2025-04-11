import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PlusIcon, MinusIcon } from "lucide-react"

interface FaqCategory {
  name: string
  color?: string
}

interface Faq {
  question: string
  answer: string
  category?: string
  isPopular?: boolean
}

const categories: FaqCategory[] = [
  { name: "General", color: "bg-blue-500/10 text-blue-500" },
  { name: "Technical", color: "bg-purple-500/10 text-purple-500" },
  { name: "Pricing", color: "bg-green-500/10 text-green-500" },
  { name: "Security", color: "bg-amber-500/10 text-amber-500" },
]

const faqs: Faq[] = [
  {
    question: "What is Mastra AI?",
    answer: "Mastra AI is a platform for building, deploying, and managing AI agents. It provides the tools and infrastructure needed to create intelligent agents that can understand context, learn from interactions, and automate complex tasks.",
    category: "General",
    isPopular: true
  },
  {
    question: "How does agent memory work?",
    answer: "Agents in Mastra maintain context through our advanced memory management system. They can store and recall information from previous interactions, learn from patterns, and maintain long-term memory across sessions using various storage backends.",
    category: "Technical"
  },
  {
    question: "Can I deploy Mastra agents anywhere?",
    answer: "Yes! Mastra agents are cloud-agnostic and can be deployed on any infrastructure. We support major cloud providers like AWS, Azure, and GCP, as well as self-hosted options for enterprise customers.",
  },
  {
    question: "What kind of tasks can Mastra agents handle?",
    answer: "Mastra agents can handle a wide range of tasks from simple automations to complex workflows. Common use cases include customer support, data analysis, process automation, content generation, and custom AI assistants.",
  },
  {
    question: "Is Mastra secure?",
    answer: "Security is our top priority. We implement bank-grade encryption, regular security audits, and comprehensive logging. Enterprise plans include additional security features like SSO, audit logs, and custom security policies.",
  },
  {
    question: "How do I get started?",
    answer: "You can start with our free tier to experiment and build your first agent. Our documentation provides comprehensive guides and examples. For larger deployments, contact our sales team for a custom solution.",
  },
]

export function FaqAccordion() {
  return (
    <div className="container py-20">
      <div className="mx-auto mb-16 text-center md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Everything you need to know about Mastra AI and our agent platform.
        </p>
      </div>
      <div className="mx-auto max-w-[64rem]">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
