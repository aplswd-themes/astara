import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes without conflicts.
 * Uses clsx for conditional class logic + tailwind-merge to resolve duplicates.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-primary', 'px-6')
 * // → 'py-2 bg-primary px-6'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with locale-aware separators.
 * @example formatNumber(10000) → '10,000'
 */
export function formatNumber(n: number): string {
  return n.toLocaleString();
}

/**
 * Truncates a string to maxLen characters with ellipsis.
 */
export function truncate(str: string, maxLen = 80): string {
  return str.length > maxLen ? str.slice(0, maxLen - 3) + '...' : str;
}
