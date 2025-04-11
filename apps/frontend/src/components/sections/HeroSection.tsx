'use client';

import * as React from "react";
import { useState, useEffect } from "react";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { CallToAction } from "@/components/common/CallToAction";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const highlights = [
  { text: "Build AI agents that understand context", delay: 0 },
  { text: "Deploy to any cloud platform", delay: 0.1 },
  { text: "Scale with your needs", delay: 0.2 },
  { text: "Monitor performance in real-time", delay: 0.3 },
];

/**
 * Enhanced Hero Section with parallax effects, 3D card transformations,
 * and micro-interactions following 2025 design trends
 */
export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax transformations based on scroll position
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0.5]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalize coordinates between -0.5 and 0.5
      const x = (clientX / innerWidth - 0.5);
      const y = (clientY / innerHeight - 0.5);

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative isolate pt-14 pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-gradient-x"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>        {/* Floating particles */}
        <div className="absolute inset-0">
          {/* Use client-side only rendering to avoid hydration errors */}
          {typeof window !== 'undefined' &&
            Array.from({ length: 20 }).map((_, i) => {
              // Pre-calculate these values for client-side rendering only
              // This prevents hydration mismatches between server and client
              const xPos = i % 5 * 20 + 5; // Distribute evenly across screen width
              const yPos = Math.floor(i / 5) * 20 + 10; // Distribute evenly across screen height
              const width = 10 + (i % 10) * 1.5;
              const height = 10 + (i % 8) * 2;
              const duration = 15 + (i % 5) * 2;

              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full bg-primary/20"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: `${xPos}vw`,
                    y: `${yPos}vh`,
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.4, 0.6, 0.4],
                    x: [`${xPos}vw`, `${xPos + (i % 10 - 5)}vw`, `${xPos}vw`],
                    y: [`${yPos}vh`, `${yPos + (i % 6 - 3)}vh`, `${yPos}vh`],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                  }}
                />
              );
            })}
        </div>
      </div>

        <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            style={{ y: y1, opacity: opacity1, scale }}
          >
            <motion.h1
              className="text-4xl font-heading tracking-tight sm:text-6xl lg:text-7xl relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block">Build AI Agents with</span>{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Mastra
                </span>
                <motion.span
                  className="absolute -right-6 -top-2 text-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Sparkles className="h-5 w-5" />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Create, deploy, and scale AI agents with our powerful platform. From simple
              automations to complex workflows, Mastra handles it all.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >              <CallToAction
                title="Get Started"
                href="/docs"
                showArrow={true}
                size="lg"
                className="rounded-full px-8 hover:scale-105 transition-transform shadow-md hover:shadow-lg"
              />
              <CallToAction
                title="View on GitHub"
                href="https://github.com/ssdeanx/deanmachinesai"
                variant="outline"
                size="lg"
                icon={Github}
                external
                className="rounded-full px-8 hover:scale-105 transition-transform hover:bg-background/80"
              />
            </motion.div>
          </motion.div>

          {/* 3D Tilting Card with Features */}
          <motion.div
            className="mt-16 flow-root"
            style={{ y: y2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              className="relative m-2 rounded-xl bg-background/5 p-2 ring-1 ring-inset ring-background/10 lg:m-4 lg:rounded-2xl lg:p-4 group perspective"
              style={{
                transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className="relative rounded-lg bg-background/80 backdrop-blur shadow-2xl p-8 transform-gpu">
                {/* Glassmorphism glow effects */}
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                <dl className="relative grid grid-cols-1 gap-x-8 gap-y-10 p-4 sm:grid-cols-2 lg:grid-cols-4">
                  {highlights.map((highlight) => (
                    <motion.div
                      key={highlight.text}
                      className="relative group/item pl-9 transform-gpu"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: highlight.delay }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center">
                        <motion.div
                          className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-lg bg-primary"
                          whileHover={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <ArrowRight className="h-4 w-4 text-background" aria-hidden="true" />
                        </motion.div>
                        <dt className="ml-2 text-sm font-semibold leading-6 group-hover/item:text-primary transition-colors duration-300">
                          {highlight.text}
                        </dt>
                      </div>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-gradient-y"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
