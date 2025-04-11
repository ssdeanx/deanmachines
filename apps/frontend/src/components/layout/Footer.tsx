'use client';

import * as React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { IconWrapper } from "@/components/common/IconWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    title: "Product",
    items: [
      { title: "Features", href: "/features" },
      { title: "Pricing", href: "/pricing" },
      { title: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Help Center", href: "/help" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
];

/**
 * Enhanced footer component with modern styling and interactions
 * Follows 2025 design trends with animations, grid layouts, and theme variables
 */
export function Footer() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container px-4 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 shadow-lg"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute bottom-0 left-1/2 h-32 w-96 -translate-x-1/2 bg-primary/5 blur-2xl" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-10">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Stay up to date
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get notified about new features and updates. We'll never spam you.
                </p>
              </div>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full bg-background/70 transition-all duration-300 focus-visible:bg-background"
                />
                <Button
                  type="submit"
                  className="h-12 px-8 transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-1"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2"
            >
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xs text-sm text-muted-foreground"
            >
              Empowering the next generation of AI agents with cutting-edge tools and platforms.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center space-x-4"
            >
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group relative rounded-full bg-muted p-2 transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                >
                  <IconWrapper
                    icon={link.icon}
                    className="h-5 w-5 transition-colors group-hover:text-primary"
                  />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:col-span-1"
            >
              <motion.h4
                variants={itemVariants}
                className="text-base font-semibold"
              >
                {section.title}
              </motion.h4>
              <motion.ul
                variants={containerVariants}
                className="mt-4 space-y-3"
              >
                {section.items.map((link) => (
                  <motion.li
                    key={link.title}
                    variants={itemVariants}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        {link.title}
                      </span>
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-border pt-8 text-sm md:flex-row md:space-y-0">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-muted-foreground underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-muted-foreground underline-offset-4 hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
