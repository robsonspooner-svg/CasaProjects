import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'construction' | 'construction-outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  href?: string;
  children: React.ReactNode;
}

const variants = {
  primary: 'gradient-navy text-white hover:opacity-90',
  secondary: 'bg-white text-casa-navy border border-casa-navy hover:bg-casa-navy/5',
  text: 'text-casa-navy hover:text-casa-navy-light underline-offset-4 hover:underline',
  construction: cn(
    'gradient-orange text-white',
    'hover:shadow-button-glow hover:scale-[1.02]',
    'active:scale-[0.98] active:shadow-none',
    'btn-construction-glow'
  ),
  'construction-outline': cn(
    'bg-white text-construction-orange border-2 border-construction-orange',
    'hover:bg-construction-orange hover:text-white',
    'transition-colors duration-200'
  ),
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      href,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 font-semibold rounded-button transition-all duration-200',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={baseStyles}>
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
