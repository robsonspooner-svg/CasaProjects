import Link from 'next/link';
import { Container } from '@/components/layout';
import { Card, SectionHeading } from '@/components/ui';
import { FileSearch, Scale, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    title: 'Project Planning',
    subtitle: 'Scope of Works',
    description:
      'Site inspection, defect identification, and comprehensive scope documentation with technical specifications.',
    fee: 'From $5,210 + GST',
    href: '/services/project-planning',
  },
  {
    icon: Scale,
    title: 'Tender Management',
    subtitle: 'Competitive Quotes',
    description:
      'Issue scope to qualified contractors, coordinate site meetings, analyze submissions, and provide recommendations.',
    fee: 'From $2,220 + GST',
    href: '/services/tender-management',
  },
  {
    icon: Briefcase,
    title: 'Project Management',
    subtitle: 'Contract Administration',
    description:
      'Weekly inspections, progress claims, variation management, and practical completion certification.',
    fee: '5-9% of contract value',
    href: '/services/project-management',
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-canvas relative overflow-hidden">
      {/* Subtle blueprint background */}
      <div className="absolute inset-0 bg-blueprint-light opacity-50" />

      <Container className="relative">
        <SectionHeading
          badge="Services"
          title="End-to-end project management"
          subtitle="From initial investigation through to practical completion certificate. Choose individual services or the complete package."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <Card variant="interactive" className="h-full flex flex-col group-hover:bg-construction-stripe transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 mb-4 rounded-lg bg-casa-navy/5 flex items-center justify-center group-hover:bg-construction-orange/10 transition-colors">
                  <service.icon className="w-7 h-7 text-casa-navy group-hover:text-construction-orange transition-colors" />
                </div>

                <div className="flex-grow">
                  <p className="text-sm font-medium text-casa-indigo mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-construction-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  {/* Price badge with steel background */}
                  <span className="font-bold text-construction-orange bg-construction-steel/10 px-3 py-1 rounded-full text-sm">
                    {service.fee}
                  </span>
                  <ArrowRight className="w-5 h-5 text-text-tertiary group-hover:text-construction-orange group-hover:translate-x-2 transition-all" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
