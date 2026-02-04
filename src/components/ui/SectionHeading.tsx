import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-casa-navy bg-casa-navy/5 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary text-balance">{subtitle}</p>
      )}
    </div>
  );
}
