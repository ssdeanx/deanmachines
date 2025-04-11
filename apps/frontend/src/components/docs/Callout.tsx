import * as React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react"

interface CalloutProps {
  icon?: React.ComponentType<{ className?: string }>
  title?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger" | "success"
  className?: string
}

const icons = {
  default: Info,
  warning: AlertTriangle,
  danger: AlertCircle,
  success: CheckCircle,
}

const styles = {
  default: "border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/20",
  warning: "border-yellow-200 dark:border-yellow-800 bg-yellow-100 dark:bg-yellow-900/20",
  danger: "border-red-200 dark:border-red-800 bg-red-100 dark:bg-red-900/20",
  success: "border-green-200 dark:border-green-800 bg-green-100 dark:bg-green-900/20",
}

export function Callout({
  title,
  children,
  icon,
  type = "default",
  className,
}: CalloutProps) {
  const IconComponent = icon ?? icons[type]

  return (
    <Alert className={cn(styles[type], "mt-6", className)}>
      <IconComponent className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
