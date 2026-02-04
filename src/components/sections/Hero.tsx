import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { FloatingIcons } from '@/components/ui/FloatingIcons';
import { Shield } from 'lucide-react';

const floatingIcons = [
  { name: 'HardHat' as const, position: 'top-left' as const, size: 'xl' as const },
  { name: 'Wrench' as const, position: 'top-right' as const, size: 'lg' as const },
  { name: 'ClipboardCheck' as const, position: 'bottom-left' as const, size: 'lg' as const },
  { name: 'Ruler' as const, position: 'bottom-right' as const, size: 'xl' as const },
];

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-canvas py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-animated-grid opacity-50" />

      {/* Floating Construction Icons */}
      <FloatingIcons icons={floatingIcons} variant="orange" />

      {/* Orange accent stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-orange" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-casa-navy/5 rounded-full border border-casa-navy/10">
            <Shield className="w-4 h-4 text-construction-orange" />
            <span className="text-sm font-medium text-casa-navy">
              South East Queensland Specialists
            </span>
          </div>

          {/* Headline with orange accent */}
          <div className="relative mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary text-balance">
              Construction project management for strata and body corporates
            </h1>
            {/* Orange underline accent */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 gradient-orange rounded-full" />
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto text-balance mt-8">
            From scope preparation to practical completion. Fixed-fee transparency.
            Professional oversight that protects committees and delivers quality outcomes.
          </p>

          {/* CTAs - Primary is now construction orange */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="/quote" variant="construction" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Our Services
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
