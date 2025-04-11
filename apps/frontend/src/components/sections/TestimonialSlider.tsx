'use client';

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatar: string;
  company?: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Mastra AI has transformed how we handle customer support. Our agents now understand context and provide more accurate responses.",
    author: "Sarah Chen",
    title: "CTO",
    company: "TechCorp",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    quote: "The ability to deploy agents anywhere has made scaling our AI operations effortless. Their platform is a game-changer.",
    author: "Michael Rodriguez",
    title: "Head of AI",
    company: "DataFlow",
    avatar: "/avatars/michael.jpg",
    rating: 5,
  },
  {
    quote: "Integration was smooth, and the documentation is excellent. Our dev team was able to get started quickly.",
    author: "Emma Thompson",
    title: "Lead Developer",
    company: "AI Solutions",
    avatar: "/avatars/emma.jpg",
    rating: 4,
  },
  {
    quote: "The memory management system is incredible. Our agents maintain context across sessions, making interactions feel natural.",
    author: "David Park",
    title: "AI Architect",
    company: "Innovation Labs",
    avatar: "/avatars/david.jpg",
    rating: 5,
  },
];

/**
 * Enhanced TestimonialCard component with 3D effects and microinteractions
 */
function TestimonialCard({
  testimonial,
  index
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <CardContent className="relative flex h-full flex-col justify-between space-y-4 p-6">
          {/* Quote icon with gradient */}
          <div className="absolute -right-4 -top-4 z-10 opacity-10">
            <Quote className="h-16 w-16 rotate-180 text-primary" strokeWidth={1} />
          </div>

          {/* Rating stars */}
          {testimonial.rating && (
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < (testimonial.rating || 0)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-none text-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          )}

          {/* Quote text with animated gradient underline */}
          <blockquote className="relative">
            <p className="text-base text-muted-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="absolute -bottom-2 left-0 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
          </blockquote>

          {/* Author info with hover effects */}
          <footer className="flex items-center gap-x-4 pt-4">
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-background ring-2 ring-primary/20">
                <AvatarImage
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <motion.div
                className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 0.4
                }}
              />
            </div>
            <div>
              <cite className="not-italic font-medium text-foreground">
                {testimonial.author}
              </cite>
              <div className="text-sm text-muted-foreground">
                {testimonial.title}
                {testimonial.company && (
                  <>, <span className="text-primary">{testimonial.company}</span></>
                )}
              </div>
            </div>
          </footer>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/**
 * Enhanced TestimonialSlider with cutting-edge 2025 design trends
 * Features scroll-triggered animations, 3D effects, and custom navigation
 */
export function TestimonialSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Title animations
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
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute left-[calc(50%+3rem)] h-[42.375rem] max-h-none w-[82.75rem] translate-x-1/2 transform-gpu blur-3xl"
          viewBox="0 0 1155 678"
          aria-hidden="true"
        >
          <path
            fill="url(#1d4240dd-898f-445f-932d-e76336578b0b)"
            fillOpacity=".2"
            d="m317.219 518.975 198.973 333.523-533.986-184.31 129.825-420.744 128.941-39.655 175.542 201.73 15.577-209.467 28.42 123.785 23.363-441.579 397.885 825.201-547.805-338.874Z"
          />
          <defs>
            <linearGradient
              id="1d4240dd-898f-445f-932d-e76336578b0b"
              x1="1268.34"
              x2="-94.086"
              y1="-76.64"
              y2="1103.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-primary)" />
              <stop offset={1} stopColor="var(--color-primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          <motion.div
            className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="h-6 w-6 text-primary" />
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            className="text-3xl font-heading tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            Trusted by Innovators
          </motion.h2>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            variants={titleVariants}
          >
            See what our customers are saying about Mastra AI
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 px-4"
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious
                className="static mx-0 flex h-10 w-10 translate-y-0 border-primary/20 bg-background/80 hover:bg-primary/10 hover:text-primary backdrop-blur-sm transition-colors"
              />

              <div className="flex gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="group relative h-3 w-8 overflow-hidden rounded-full transition-colors"
                  >
                    <span
                      className={cn(
                        "absolute inset-0 rounded-full bg-muted-foreground/20 transition-colors group-hover:bg-muted-foreground/40"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute inset-0 origin-left rounded-full bg-primary transition-transform duration-500",
                        index === current ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </button>
                ))}
              </div>

              <CarouselNext
                className="static mx-0 flex h-10 w-10 translate-y-0 border-primary/20 bg-background/80 hover:bg-primary/10 hover:text-primary backdrop-blur-sm transition-colors"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
