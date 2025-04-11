'use client';
import * as React from "react"
import { Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

/**
 * Enhanced search input component with modern features
 *
 * @interface SearchInputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * @property {(value: string) => void} [onSearch] - Callback when search value changes
 * @property {boolean} [loading] - Whether search is in loading state
 * @property {boolean} [withClear] - Whether to show a clear button
 * @property {number} [debounceMs] - Debounce delay in milliseconds
 */
interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  loading?: boolean;
  withClear?: boolean;
  debounceMs?: number;
}

export function SearchInput({
  className,
  onSearch,
  loading = false,
  withClear = true,
  debounceMs = 300,
  ...props
}: SearchInputProps) {
  const [value, setValue] = React.useState("")
  const [isFocused, setIsFocused] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Debounced search handler
  const debouncedSearch = React.useCallback(
    React.useMemo(() => {
      let timeoutId: NodeJS.Timeout | null = null;

      return (searchValue: string) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          onSearch?.(searchValue);
          timeoutId = null;
        }, debounceMs);
      };
    }, [debounceMs, onSearch]),
    [debounceMs, onSearch]
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      debouncedSearch(newValue);
    },
    [debouncedSearch]
  );

  const handleClear = React.useCallback(() => {
    setValue("");
    onSearch?.("");
    inputRef.current?.focus();
  }, [onSearch]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={cn(
        "group relative transition-all duration-300",
        isFocused ? "ring-1 ring-primary/20 rounded-md" : "",
        className
      )}
    >
      <Search
        className={cn(
          "absolute left-2.5 top-1/2 -translate-y-1/2 size-4 transition-colors duration-300",
          isFocused ? "text-primary" : "text-muted-foreground",
          "group-hover:text-primary/80 motion-reduce:transition-none"
        )}
      />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        className={cn(
          "pl-8 transition-all duration-300",
          withClear && value ? "pr-8" : "pr-4",
          "placeholder:transition-opacity placeholder:duration-300",
          "focus-visible:ring-primary/20",
          "group-hover:border-primary/50"
        )}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Search"
        disabled={loading}
        {...props}
      />
      {loading && (
        <div
          className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 animate-spin rounded-full border-2 border-primary/70 border-t-transparent"
          aria-hidden="true"
        >
          <span className="sr-only">Loading search results...</span>
        </div>
      )}
      {withClear && value && !loading && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 size-6 p-0 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors active:scale-95"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <X className="size-3" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
}
