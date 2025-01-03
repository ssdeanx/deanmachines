import { useState, useEffect, useCallback } from "react";
import { useDisclosure, UseDisclosureProps } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

// Data fetching hook
export interface UseDataFetchProps<T> {
  url: string;
  initialData?: T;
}

export function useDataFetch<T>({ url, initialData }: UseDataFetchProps<T>) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();

      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}

// Modal management hook
export interface UseModalProps extends UseDisclosureProps {
  onConfirm?: () => void;
}

export function useModal({ onConfirm, ...props }: UseModalProps = {}) {
  const disclosure = useDisclosure(props);
  const handleConfirm = useCallback(() => {
    onConfirm?.();
    disclosure.onClose();
  }, [onConfirm, disclosure.onClose]);

  return {
    ...disclosure,
    handleConfirm,
  };
}

// Theme management hook with NextUI integration
export function useThemeManager() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return {
    theme: isMounted ? theme : undefined,
    setTheme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    isMounted,
  };
}

// Form management hook
export interface UseFormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => void | Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((field: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (err) {
      if (err instanceof Error) {
        setErrors({ _form: err.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors,
  };
}

// Navigation hook with loading state
export function useNavigation() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const navigate = useCallback(
    (path: string) => {
      setIsNavigating(true);
      router.push(path);
    },
    [router],
  );

  useEffect(() => {
    return () => {
      setIsNavigating(false);
    };
  }, []);

  return {
    navigate,
    isNavigating,
  };
}

// Keyboard shortcut hook
export function useKeyboardShortcut(key: string, callback: () => void) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [key, callback]);
}
