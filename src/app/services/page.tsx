import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { Card, SectionHeading, Button } from '@/components/ui';
import { FinalCTA } from '@/components/sections';
import {
  FileSearch,
  Scale,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Casa Project Management',
  description:
    'End-to-end construction project management services including scope of works preparation, tender management, and contract administration for strata and body corporates.',
};

const services = [
  {
    icon: FileSearch,
    title: 'Project Planning',
    subtitle: 'Scope of Works Preparation',
    description:
      'Site inspection, defect identification, and comprehensive scope documentation with technical specifications. Clear documentation ensures accurate quotes and prevents scope creep.',
    fee: 'From $5,210 + GST',
    href: '/services/project-planning',
    features: [
      'Complete site walk-through and inspection',
      'Photo documentation of all defects',
      'Detailed Scope of Works document',
      'Technical specifications',
      'Project timeline estimates',
    ],
  },
  {
    icon: Scale,
    title: 'Tender Management',
    subtitle: 'Competitive Quotation Process',
    description:
      'Issue scope to qualified contractors, coordinate site meetings, analyze submissions, and provide recommendations. Ensure you get competitive quotes from reliable contractors.',
    fee: 'From $2,220 + GST',
    href: '/services/tender-management',
    features: [
      'Issue scope to 3-4 qualified contractors',
      'Coordinate on-site tender meetings',
      'Receive and collate all submissions',
      'Detailed Tender Analysis Report',
      'Clarification and negotiation support',
    ],
  },
  {
    icon: Briefcase,
    title: 'Project Management',
    subtitle: 'Contract Administration',
    description:
      'Weekly site inspections, progress claims assessment, variation management, and practical completion certification. Professional oversight from contract to handover.',
    fee: '5-9% of contract value',
    href: '/services/project-management',
    features: [
      'Building Works Contract preparation',
      'Weekly site meetings and inspections',
      'Progress claim assessment',
      'Variation management and control',
      'Practical Completion certificate',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Our Services"
              title="End-to-end construction project management"
              subtitle="From initial investigation through to practical completion certificate. Choose individual services or the complete package."
            />
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 items-start"
              >
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg gradient-navy flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-casa-indigo">
                        {service.subtitle}
                      </p>
                      <h2 className="text-2xl font-bold text-text-primary">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-bold text-casa-navy">
                      {service.fee}
                    </span>
                  </div>

                  <Button href={service.href}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <Card variant="elevated">
                  <h3 className="font-semibold text-text-primary mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fee Transparency */}
      <section className="section-padding bg-canvas">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              badge="Pricing"
              title="Transparent, fixed-fee pricing"
              subtitle="No hidden costs. No surprises. Know exactly what you're paying before we start."
            />

            <Card variant="elevated">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 pr-4 font-semibold text-text-primary">
                        Service
                      </th>
                      <th className="text-right py-4 pl-4 font-semibold text-text-primary">
                        Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 pr-4 text-text-secondary">
                        Project Planning (Scope of Works)
                      </td>
                      <td className="py-4 pl-4 text-right font-semibold text-text-primary">
                        From $5,210 + GST
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 pr-4 text-text-secondary">
                        Tender Phase Management
                      </td>
                      <td className="py-4 pl-4 text-right font-semibold text-text-primary">
                        From $2,220 + GST
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 pr-4 text-text-secondary">
                        Contract Preparation
                      </td>
                      <td className="py-4 pl-4 text-right font-semibold text-text-primary">
                        From $1,410 + GST
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 text-text-secondary">
                        Project Management
                      </td>
                      <td className="py-4 pl-4 text-right font-semibold text-text-primary">
                        5-9% of contract value
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-text-secondary">
                  * Fees vary based on project complexity and scope. Contact us
                  for a custom quote tailored to your specific requirements.
                </p>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button href="/quote">Get a Custom Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
