'use client';

import * as React from "react";
import { useRef } from "react";
import {
  Brain,
  Cloud,
  Code2,
  Command,
  Database,
  LineChart,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

import { IconWrapper } from "@/components/common/IconWrapper";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

const features: Feature[] = [
  {
    title: "AI-Powered Agents",
    description: "Build intelligent agents that learn and adapt using state-of-the-art machine learning models.",
    icon: Brain,
    color: "from-purple-500 to-blue-600",
  },
  {
    title: "Cloud Native",
    description: "Deploy anywhere with our cloud-agnostic infrastructure and seamless scaling capabilities.",
    icon: Cloud,
    color: "from-sky-400 to-indigo-500",
  },
  {
    title: "Developer Experience",
    description: "Comprehensive APIs and SDKs make integration and customization straightforward.",
    icon: Code2,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Command Center",
    description: "Manage all your AI agents from a single, intuitive dashboard with real-time monitoring.",
    icon: Command,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Persistent Memory",
    description: "Agents maintain context and learn from interactions with built-in memory management.",
    icon: Database,
    color: "from-blue-500 to-violet-600",
  },
  {
    title: "Advanced Analytics",
    description: "Track agent performance and behavior with detailed analytics and insights.",
    icon: LineChart,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and comprehensive audit logs.",
    icon: Shield,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "High Performance",
    description: "Optimized for speed and efficiency with distributed processing capabilities.",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
  },
];

/**
 * FeatureCard component with advanced 3D hover effects
 */
function FeatureCard({
  feature,
  index
}: {
  feature: Feature;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Card appearance animation based on index
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
      }
    }
  };

  // Icon animation variants
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="group relative isolate overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Gradient hover effect */}
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-gradient-to-br opacity-0 blur transition-opacity duration-500 group-hover:opacity-10",
          feature.color || "from-primary to-primary/50"
        )}
      />

      {/* 3D layered card effect with pseudo-elements */}
      <div className="relative">
        <motion.div
          variants={iconVariants}
          className={cn(
            "mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br shadow-md",
            feature.color || "from-primary to-primary/80"
          )}
        >
          <IconWrapper
            icon={feature.icon}
            className="h-7 w-7 text-background drop-shadow"
            aria-hidden="true"
          />
        </motion.div>

        <h3 className="text-lg font-semibold leading-7 tracking-tight">
          {feature.title}
        </h3>

        <p className="mt-2 text-base leading-7 text-muted-foreground">
          {feature.description}
        </p>

        {/* Interactive indicator */}
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>Learn more</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: 0 }}
            animate={{ x: [0, 4, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              repeatDelay: 2,
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Enhanced FeatureGrid section with advanced animations and effects
 * Features 2025 design trends with scroll-based reveals and micro-interactions
 */
export function FeatureGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      aria-labelledby="features-heading"
      className="relative isolate overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
          >
            <Brain className="h-8 w-8 text-primary" />
          </motion.div>

          <motion.h2
            id="features-heading"
            className="font-heading text-3xl tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            Everything you need to build AI Agents
          </motion.h2>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            A comprehensive platform for creating, deploying, and scaling intelligent AI agents
            that deliver real value.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
