import { cn } from '../../lib/utils';
import type { ButtonHTMLAttributes } from 'react';

/**
 * Button component
 * ─────────────────
 * Polymorphic button with 5 variants and 3 sizes.
 * Uses CSS custom properties so it adapts to any theme automatically.
 *
 * @example
 * // Primary CTA
 * <Button variant="primary" size="lg">Get Started</Button>
 *
 * @example
 * // Ghost navigation link
 * <Button variant="ghost" size="sm" as="a" href="/about">About</Button>
 */

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as a different element (e.g. 'a' for links) */
  as?: 'button' | 'a';
  href?: string;
  /** Show a loading spinner */
  loading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-lg',
  secondary:
    'bg-[var(--color-bg-muted)] text-[var(--color-text)] hover:bg-[var(--color-border-strong)]',
  outline:
    'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)]',
  ghost:
    'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]',
  danger:
    'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm:  'px-3 py-1.5 text-sm rounded-[var(--radius-md)]',
  md:  'px-5 py-2.5 text-sm rounded-[var(--radius-lg)]',
  lg:  'px-7 py-3 text-base rounded-[var(--radius-lg)]',
  xl:  'px-9 py-4 text-lg rounded-[var(--radius-xl)]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold',
    'transition-all duration-[var(--transition-base)]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]',
    'cursor-pointer select-none',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-60 pointer-events-none',
    className,
  );

  if (Tag === 'a') {
    return (
      <a href={href} className={classes} {...(rest as any)}>
        {loading && <Spinner />}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
