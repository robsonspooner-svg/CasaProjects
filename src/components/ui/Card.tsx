import { cn } from '@/lib/utils';

interface CardProps {
  variant?: 'default' | 'elevated' | 'interactive' | 'construction' | 'construction-elevated';
  className?: string;
  children: React.ReactNode;
}

const variants = {
  default: 'bg-white shadow-card',
  elevated: 'bg-white shadow-card-elevated',
  interactive: cn(
    'bg-white shadow-card',
    'hover:shadow-card-hover hover:-translate-y-1',
    'transition-all duration-300'
  ),
  construction: cn(
    'bg-white shadow-card',
    'border-l-4 border-l-construction-orange',
    'hover:shadow-card-construction hover:-translate-y-2',
    'hover:bg-construction-stripe',
    'transition-all duration-300'
  ),
  'construction-elevated': cn(
    'bg-white shadow-card-construction',
    'border-t-4 border-t-construction-orange',
    'hover:shadow-construction-glow hover:-translate-y-2',
    'transition-all duration-300'
  ),
};

export function Card({ variant = 'default', className, children }: CardProps) {
  return (
    <div className={cn('rounded-card p-6', variants[variant], className)}>
      {children}
    </div>
  );
}
