'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('divide-y divide-border', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'py-4 pl-4 border-l-4 transition-all duration-200',
            openIndex === index
              ? 'border-l-construction-orange bg-construction-orange/5'
              : 'border-l-transparent'
          )}
        >
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span
              className={cn(
                'font-semibold pr-8 transition-colors duration-200',
                openIndex === index ? 'text-construction-orange' : 'text-text-primary'
              )}
            >
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 transition-all duration-200 flex-shrink-0',
                openIndex === index
                  ? 'rotate-180 text-construction-orange'
                  : 'text-text-secondary'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 mt-3' : 'max-h-0'
            )}
          >
            <p className="text-text-secondary">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
