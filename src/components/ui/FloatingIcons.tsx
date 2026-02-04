'use client';

import {
  HardHat,
  Wrench,
  ClipboardCheck,
  Ruler,
  Hammer,
  Cog,
  Building2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = 'HardHat' | 'Wrench' | 'ClipboardCheck' | 'Ruler' | 'Hammer' | 'Cog' | 'Building2';

const iconMap = {
  HardHat,
  Wrench,
  ClipboardCheck,
  Ruler,
  Hammer,
  Cog,
  Building2,
};

interface FloatingIconConfig {
  name: IconName;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface FloatingIconsProps {
  icons: FloatingIconConfig[];
  className?: string;
  variant?: 'orange' | 'navy' | 'white';
}

const positionClasses = {
  'top-left': 'top-[10%] left-[5%]',
  'top-right': 'top-[15%] right-[8%]',
  'bottom-left': 'bottom-[20%] left-[10%]',
  'bottom-right': 'bottom-[15%] right-[5%]',
  'center-right': 'top-[45%] right-[15%]',
};

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

const animationClasses = [
  'animate-float',
  'animate-float-slow',
  'animate-float-delayed',
  'animate-float-delayed-2',
  'animate-float-delayed-3',
];

const variantClasses = {
  orange: 'text-construction-orange',
  navy: 'text-casa-navy',
  white: 'text-white',
};

export function FloatingIcons({ icons, className, variant = 'orange' }: FloatingIconsProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {icons.map((item, index) => {
        const Icon = iconMap[item.name];
        const size = item.size || 'lg';
        const animationClass = animationClasses[index % animationClasses.length];

        return (
          <div
            key={index}
            className={cn(
              'absolute opacity-[0.08]',
              positionClasses[item.position],
              animationClass,
              variantClasses[variant]
            )}
          >
            <Icon className={cn(sizeClasses[size], 'stroke-[1.5]')} />
          </div>
        );
      })}
    </div>
  );
}
