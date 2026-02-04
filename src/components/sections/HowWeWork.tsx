import { Container } from '@/components/layout';
import { SectionHeading } from '@/components/ui';
import { ClipboardList, Users, HardHat, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Scope',
    description:
      'We inspect your site and prepare detailed specifications. Clear documentation ensures accurate quotes and prevents scope creep.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Tender',
    description:
      'We obtain competitive quotes from qualified contractors and provide a detailed analysis report to help you make the right choice.',
  },
  {
    icon: HardHat,
    number: '03',
    title: 'Manage',
    description:
      'We oversee the project from contract to practical completion. Weekly inspections, progress claims, and quality assurance.',
  },
];

export function HowWeWork() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-light opacity-40" />

      <Container className="relative">
        <SectionHeading
          badge="Our Process"
          title="How we work"
          subtitle="A clear, structured approach that delivers quality outcomes on time and on budget."
        />

        <div className="relative">
          {/* Connection Line with orange gradient (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-construction-orange via-construction-yellow to-construction-orange rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Icon Circle with orange ring */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  {/* Orange ring animation on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-construction-orange/0 group-hover:border-construction-orange/50 group-hover:scale-110 transition-all duration-300" />

                  <div className="relative w-full h-full rounded-full gradient-navy flex items-center justify-center group-hover:shadow-construction-glow transition-shadow duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step number badge - now orange */}
                  <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full gradient-orange shadow-card-construction flex items-center justify-center text-sm font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Arrow (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-construction-orange rotate-90" />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-construction-orange transition-colors">
                  {step.title}
                </h3>
                <p className="text-text-secondary max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
