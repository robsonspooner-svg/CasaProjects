import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { FloatingIcons } from '@/components/ui/FloatingIcons';

const floatingIcons = [
  { name: 'HardHat' as const, position: 'top-left' as const, size: 'lg' as const },
  { name: 'Wrench' as const, position: 'bottom-right' as const, size: 'xl' as const },
  { name: 'ClipboardCheck' as const, position: 'center-right' as const, size: 'lg' as const },
];

export function FinalCTA() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Diagonal stripe overlay */}
      <div className="absolute inset-0 bg-construction-stripe-bold opacity-30" />

      {/* Floating icons */}
      <FloatingIcons icons={floatingIcons} variant="white" className="opacity-5" />

      {/* Orange glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-glow opacity-20" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Ready to take the stress out of your next project?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Get a free consultation and quote. We&apos;ll review your project
            requirements and provide a clear proposal with no obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA - Orange with glow */}
            <Button
              href="/quote"
              variant="construction"
              size="lg"
              className="shadow-construction-glow hover:shadow-construction-glow-lg"
            >
              Get Your Free Quote
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="secondary"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
