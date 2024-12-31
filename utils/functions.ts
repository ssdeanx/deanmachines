// Type guard template
export const is,{TypeName} = (value: unknown): value is {TypeName} => {
  return (
    typeof value === 'object' &&
    value !== null &&
    '{propertyName}' in value
  );
};

// NextUI className merger
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};