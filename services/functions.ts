// Type guards (These are generally useful and can be kept)
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

export function hasProperties<T extends object>(
  value: unknown,
  properties: (keyof T)[]
): value is T {
  if (!isObject(value)) return false;

  return properties.every((prop) => prop in value);
}

// Environment check (Still useful)
export function isClient(): boolean {
  return typeof window !== "undefined";
}

// Safe JSON parsing (Still useful)
export function safeJSONParse<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

// ARIA attribute validation (Still relevant for accessibility)
export function validateAriaProps(
  props: Record<string, unknown>
): Record<string, unknown> {
  const ariaPattern = /^aria-[a-z]+$/;

  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (ariaPattern.test(key)) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, unknown>
  );
}

// Advanced MUI Styling Example (New function demonstrating MUI styling)
import { SxProps, Theme } from "@mui/material/styles"; // Import Theme

export type StyleProps = Record<string, unknown>; // Define a type for the props

export function createSx(
  baseStyles:
    | SxProps<Theme>
    | ((theme: Theme, props: StyleProps) => SxProps<Theme>),
  conditionalStyles?: Record<
    string,
    SxProps<Theme> | ((theme: Theme, props: StyleProps) => SxProps<Theme>)
  >
): (props: StyleProps) => SxProps<Theme> {
  return (props: StyleProps): SxProps<Theme> => {
    const theme = {} as Theme; //This is a placeholder, ideally you'd get the theme from context

    let styles: SxProps<Theme> =
      typeof baseStyles === "function" ? baseStyles(theme, props) : baseStyles;

    if (conditionalStyles && props) {
      for (const condition in conditionalStyles) {
        const shouldApply =
          (condition === "isSmallScreen" && theme.breakpoints?.down("sm")) ||
          (typeof props[condition] === "boolean" && props[condition]) ||
          (props[condition] !== undefined &&
            props[condition] !== null &&
            props[condition] !== ""); // Check for other defined props

        const conditionStyles =
          typeof conditionalStyles[condition] === "function"
            ? conditionalStyles[condition](theme, props)
            : conditionalStyles[condition];

        if (shouldApply && conditionStyles) {
          styles = {
            ...styles,
            ...(conditionStyles as object),
          } as SxProps<Theme>;
        }
      }
    }
    return styles;
  };
}
