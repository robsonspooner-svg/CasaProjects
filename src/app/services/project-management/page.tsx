import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { Card, SectionHeading, Button } from '@/components/ui';
import { FinalCTA } from '@/components/sections';
import {
  Briefcase,
  CheckCircle,
  FileCheck,
  Calendar,
  Shield,
  ClipboardCheck,
  DollarSign,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Management & Contract Administration | Casa Project Management',
  description:
    'Professional project management and contract administration services. Weekly site inspections, progress claims, variation management, and practical completion.',
};

const services = [
  {
    icon: FileCheck,
    title: 'Contract Preparation',
    description:
      'Preparation of a Building Works Contract that protects the body corporate and clearly defines obligations, warranties, and payment terms.',
  },
  {
    icon: Calendar,
    title: 'Weekly Site Meetings',
    description:
      'Regular meetings with the contractor including photo documentation, progress assessment, and detailed site minutes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspections',
    description:
      'Random QA inspections to ensure work meets specifications, with any deficiencies logged and tracked to resolution.',
  },
  {
    icon: DollarSign,
    title: 'Progress Claims',
    description:
      'Assessment of contractor claims against work completed, ensuring you only pay for work that meets the required standard.',
  },
  {
    icon: Shield,
    title: 'Variation Management',
    description:
      'Audit and approve or reject variation claims, protecting your budget from scope creep and unnecessary extras.',
  },
  {
    icon: Wrench,
    title: 'Practical Completion',
    description:
      'Final inspection, snagging list, and Practical Completion certificate including all warranties and required documentation.',
  },
];

const feeStructure = [
  {
    range: 'Up to $150,000',
    percentage: '9%',
    description: 'For smaller projects requiring full oversight',
  },
  {
    range: '$150,000 - $500,000',
    percentage: '7%',
    description: 'Mid-sized capital works projects',
  },
  {
    range: 'Above $500,000',
    percentage: '5%',
    description: 'Larger projects with economies of scale',
  },
];

export default function ProjectManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-casa-navy/5 rounded-full">
                <Briefcase className="w-4 h-4 text-casa-navy" />
                <span className="text-sm font-medium text-casa-navy">
                  Project Management
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 text-balance">
                Contract Administration & Project Oversight
              </h1>

              <p className="text-lg text-text-secondary mb-8">
                Professional oversight from contract to completion. We act as
                superintendent to administer the works, protect your interests,
                and ensure quality outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href="/quote" size="lg">
                  Request a Quote
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-casa-navy">
                  5-9%
                </span>
                <span className="text-text-secondary">of contract value</span>
              </div>
            </div>

            <Card variant="elevated" className="lg:ml-auto lg:max-w-md">
              <h3 className="font-semibold text-text-primary mb-4">
                What&apos;s Included
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Building Works Contract preparation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Weekly site meetings and inspections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Progress claim assessment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Variation management and control
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Quality assurance inspections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Practical Completion certificate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Handover documentation package
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Our Services"
            title="Complete project oversight"
            subtitle="Everything needed to ensure your project is delivered on time, on budget, and to the required quality."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} variant="interactive">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-casa-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-canvas">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              badge="Fees"
              title="Project management fee structure"
              subtitle="Percentage-based fees that align our success with yours."
            />

            <Card variant="elevated">
              <div className="space-y-6">
                {feeStructure.map((tier, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-6 border-b border-border last:pb-0 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-text-primary">
                        {tier.range}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {tier.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-casa-navy">
                        {tier.percentage}
                      </span>
                      <p className="text-xs text-text-secondary">
                        of contract value
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-text-secondary">
                  * Project management fees are calculated based on the original
                  contract sum. Fees are inclusive of weekly site meetings,
                  inspections, and all administration. Additional work outside
                  the standard scope may be charged at hourly rates.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Site Minutes */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Reporting"
                title="Bi-weekly site minutes"
                subtitle="Clear, comprehensive reporting keeps everyone informed."
                align="left"
              />

              <p className="text-text-secondary mb-8">
                After each site meeting, you&apos;ll receive detailed site
                minutes that document progress, issues, and decisions. This
                creates a clear record and keeps your committee informed without
                requiring them to attend site.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Photo library of work progress
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    EOT (Extension of Time) tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Administration updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Project schedule status
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Hold points and upcoming milestones
                  </span>
                </li>
              </ul>
            </div>

            <Card variant="elevated" className="bg-casa-navy text-white">
              <h3 className="font-semibold text-xl mb-4">
                Handover documentation includes
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Practical Completion certificate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Product warranties
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Workmanship warranties
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Documented site minutes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Approved hold points record
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Required permits and forms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  As-built documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Defects liability period information
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
