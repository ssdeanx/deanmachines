/**
 * Theme configuration type definitions
 * @description Defines the structure for theme colors and variants
 */

export type ColorToken =
  | "background"
  | "foreground"
  | "card"
  | "card-foreground"
  | "popover"
  | "popover-foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "muted"
  | "muted-foreground"
  | "accent"
  | "accent-foreground"
  | "destructive"
  | "destructive-foreground"
  | "border"
  | "input"
  | "ring";

export type ThemeColors = {
  [key in ColorToken]: string;
};

export interface ThemeConfig {
  light: ThemeColors;
  dark: ThemeColors;
}

/**
 * Theme context type for provider
 */
export interface ThemeContextType {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}
