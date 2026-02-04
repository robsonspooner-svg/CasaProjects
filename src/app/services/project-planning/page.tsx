import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { Card, SectionHeading, Button } from '@/components/ui';
import { FinalCTA } from '@/components/sections';
import {
  FileSearch,
  CheckCircle,
  Camera,
  FileText,
  ClipboardList,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Planning & Scope of Works | Casa Project Management',
  description:
    'Professional scope of works preparation for construction projects. Site inspection, defect identification, and comprehensive technical specifications.',
};

const deliverables = [
  {
    icon: Camera,
    title: 'Site Inspection & Documentation',
    description:
      'Complete walk-around inspection to identify and photograph all areas requiring attention. Nothing gets missed.',
  },
  {
    icon: FileText,
    title: 'Comprehensive Scope of Works',
    description:
      'Detailed documentation covering all technical specifications, materials, and construction methodologies.',
  },
  {
    icon: ClipboardList,
    title: 'Priority Assessment',
    description:
      'Clear identification of what needs urgent attention versus planned maintenance, helping you budget effectively.',
  },
  {
    icon: Clock,
    title: 'Timeline Estimates',
    description:
      'Realistic project duration estimates to help with planning and committee communications.',
  },
];

const benefits = [
  'Contractors can quote accurately when they understand exactly what\'s required',
  'Detailed specifications prevent scope creep and cost variations',
  'Proper documentation protects committees and building managers',
  'Enables apples-to-apples comparison of contractor quotes',
  'Provides a baseline for quality control during construction',
  'Creates a permanent record for future reference',
];

export default function ProjectPlanningPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-casa-navy/5 rounded-full">
                <FileSearch className="w-4 h-4 text-casa-navy" />
                <span className="text-sm font-medium text-casa-navy">
                  Project Planning
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 text-balance">
                Scope of Works Preparation
              </h1>

              <p className="text-lg text-text-secondary mb-8">
                Detailed specifications that protect your budget and get
                accurate quotes. We inspect your site and document exactly
                what&apos;s needed, leaving nothing to interpretation.
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
                  From $5,210
                </span>
                <span className="text-text-secondary">+ GST</span>
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
                    Complete site walk-around and inspection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Comprehensive photo documentation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Detailed Scope of Works document
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Technical specifications and materials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Construction methodology requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Project timeline estimates
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Deliverables"
            title="What you receive"
            subtitle="A comprehensive package that gives contractors everything they need to quote accurately."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <Card key={index} variant="interactive">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-casa-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-canvas">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Why It Matters"
                title="The foundation of every successful project"
                align="left"
              />

              <p className="text-text-secondary mb-8">
                A well-prepared Scope of Works is the single most important
                document in any construction project. It defines what will be
                done, how it will be done, and to what standard. Without it,
                you&apos;re flying blind.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card variant="elevated" className="bg-casa-navy text-white">
              <h3 className="font-semibold text-xl mb-4">
                Common project types we scope
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Fence replacement and repairs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Waterproofing and roof remediation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Facade repairs and painting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Concrete cancer remediation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Balcony and balustrade works
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Common area refurbishment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Fire safety upgrades
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Lift modernisation
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
