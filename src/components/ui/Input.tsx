import { cn } from '../../lib/utils';
import type { InputHTMLAttributes } from 'react';

/**
 * Input component
 * ────────────────
 * Accessible form input with label, helper text, and validation states.
 *
 * @example
 * <Input
 *   label="Email address"
 *   type="email"
 *   placeholder="you@example.com"
 *   helperText="We'll never share your email."
 * />
 *
 * @example
 * <Input
 *   label="Name"
 *   error="This field is required."
 * />
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  /** Show success state */
  success?: boolean;
  /** Wrapper class */
  wrapperClass?: string;
}

export function Input({
  label,
  helperText,
  error,
  success,
  id,
  wrapperClass,
  className,
  ...rest
}: InputProps) {
  const inputId = id ?? `input-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <div className={cn('flex flex-col gap-1.5', wrapperClass)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--color-text)]"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={cn(
          'w-full rounded-[var(--radius-lg)] border px-4 py-2.5 text-sm',
          'bg-[var(--color-bg)] text-[var(--color-text)]',
          'placeholder:text-[var(--color-text-subtle)]',
          'transition-colors duration-[var(--transition-fast)]',
          'outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-1',
          error
            ? 'border-red-500 focus:ring-red-500'
            : success
            ? 'border-emerald-500 focus:ring-emerald-500'
            : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]',
          className,
        )}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        aria-invalid={error ? 'true' : undefined}
        {...rest}
      />

      {error && (
        <p id={`${inputId}-helper`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className="text-xs text-[var(--color-text-muted)]">
          {helperText}
        </p>
      )}
    </div>
  );
}
