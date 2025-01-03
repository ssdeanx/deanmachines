import { SVGProps } from "react";

// Component Props Types
export interface BasePageProps {
  title: string;
  description: string;
  className?: string;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface HardwareItem {
  title: string;
  desc: string;
  icon?: string;
  status?: "active" | "inactive" | "maintenance";
}

export interface AboutDetail {
  title: string;
  desc: string;
  icon?: string;
}

export interface AboutContent {
  hardware: HardwareItem[];
  features: AboutDetail[];
  metadata?: {
    lastUpdated?: Date;
    version?: string;
  };
}

export interface DataPageProps extends BasePageProps {
  data: Record<string, unknown>;
  isLoading?: boolean;
  error?: string;
  layout?: "grid" | "list";
}

export interface DocsPageProps extends BasePageProps {
  content: string;
  category?: string;
  tags?: string[];
  lastModified?: Date;
}

// Theme & Styling Types
export interface ThemeConfig {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";
  size?: "sm" | "md" | "lg";
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  disabled?: boolean;
  external?: boolean;
  children?: NavItem[];
}

// Card Types
export interface CardProps extends ThemeConfig {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  hoverable?: boolean;
  isPressable?: boolean;
}

// Form Types
export interface InputProps extends ThemeConfig {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  helperText?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}
