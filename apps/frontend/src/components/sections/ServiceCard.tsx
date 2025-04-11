'use client'
import * as React from "react"
import { useRef, useState } from "react"
import { LucideIcon, Check } from "lucide-react"
import * as icons from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconWrapper } from "@/components/common/IconWrapper"

// Define the type for valid icon names based on the lucide-react export
type IconName = keyof typeof icons;

interface ServiceCardProps {
  title: string
  description: string
  iconName: IconName // Use the specific type for icon names
  features?: string[]
  className?: string
  variant?: "default" | "featured"
}

/**
 * Enhanced ServiceCard with 3D perspective effects, animations, and micro-interactions
 * Implements 2025 design trends with hover states, gradients, and blurs
 */
export function ServiceCard({
  title,
  description,
  iconName,
  features,
  className,
  variant = "default"
}: ServiceCardProps) {
  const Icon = icons[iconName] as LucideIcon
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // 3D card effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 25
    const rotateY = (centerX - x) / 25

    setRotate({ x: rotateX, y: rotateY })
  }

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  // Feature list animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  }

  const isFeatured = variant === "featured"

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn("h-full", isFeatured && "lg:-my-8")}
    >
      <motion.div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <Card
          className={cn(
            "h-full transition-all duration-300 overflow-hidden",
            isHovered ? "shadow-xl" : "shadow-md",
            isFeatured && "border-primary/50 bg-gradient-to-b from-primary/5 to-background",
            className
          )}
        >
          {isFeatured && (
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          )}

          <CardHeader className="space-y-4">
            <div className="flex items-start space-x-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={cn(
                  "rounded-xl p-3 transition-colors duration-300",
                  isFeatured
                    ? "bg-gradient-to-br from-primary/20 to-primary/5"
                    : "border bg-muted"
                )}
              >
                <IconWrapper
                  icon={Icon}
                  size="lg"
                  className={cn(
                    "transition-transform duration-300",
                    isHovered && "scale-110",
                    isFeatured && "text-primary"
                  )}
                />
              </motion.div>
              <div className="space-y-1">
                <CardTitle className={cn(
                  "transition-all duration-300",
                  isFeatured && "text-primary",
                  isHovered && isFeatured && "text-primary/80"
                )}>
                  {title}
                </CardTitle>
                <CardDescription className="text-base">{description}</CardDescription>
              </div>
            </div>

            {isFeatured && (
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/30" />
            )}
          </CardHeader>

          {features && features.length > 0 && (
            <CardContent>
              <motion.ul
                className="space-y-3"
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check
                      size={16}
                      className={cn(
                        "mt-0.5 transition-colors duration-300",
                        isFeatured ? "text-primary" : "text-foreground"
                      )}
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          )}
        </Card>
      </motion.div>
    </motion.div>
  )
}
