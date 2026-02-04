import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { Card, SectionHeading, Button } from '@/components/ui';
import { FinalCTA } from '@/components/sections';
import {
  Scale,
  CheckCircle,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tender Management | Casa Project Management',
  description:
    'Professional tender management services. We obtain competitive quotes from qualified contractors and provide detailed analysis to help you make the right choice.',
};

const process = [
  {
    step: '01',
    title: 'Issue Scope to Contractors',
    description:
      'We distribute the Scope of Works to 3-4 appropriately licensed contractors selected for your project type.',
  },
  {
    step: '02',
    title: 'Coordinate Site Meetings',
    description:
      'We arrange and attend on-site meetings with each tenderer to ensure they fully understand the requirements.',
  },
  {
    step: '03',
    title: 'Manage Queries & Clarifications',
    description:
      'We handle all contractor questions and, if necessary, amend the scope based on feedback from tender meetings.',
  },
  {
    step: '04',
    title: 'Receive & Analyse Submissions',
    description:
      'We collate all tender submissions and prepare a comprehensive Tender Analysis Report.',
  },
  {
    step: '05',
    title: 'Present Recommendations',
    description:
      'We provide clear recommendations with supporting analysis to help your committee make an informed decision.',
  },
];

const reportContents = [
  'Side-by-side comparison of all submissions',
  'Price analysis and value assessment',
  'Contractor capability evaluation',
  'Program and timeline comparison',
  'Risk assessment for each tenderer',
  'Clear recommendation with rationale',
];

export default function TenderManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-casa-navy/5 rounded-full">
                <Scale className="w-4 h-4 text-casa-navy" />
                <span className="text-sm font-medium text-casa-navy">
                  Tender Management
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 text-balance">
                Competitive Quotes from Qualified Contractors
              </h1>

              <p className="text-lg text-text-secondary mb-8">
                Getting multiple quotes is just the start. We ensure you can
                compare apples to apples and choose the right contractor for
                your project—not just the cheapest.
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
                  From $2,220
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
                    Issue scope to 3-4 qualified contractors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Coordinate on-site tender meetings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Handle all queries and clarifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Comprehensive Tender Analysis Report
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Clear recommendation and rationale
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Our Process"
            title="How tender management works"
            subtitle="A structured process that ensures fair competition and informed decision-making."
          />

          <div className="max-w-3xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tender Analysis Report */}
      <section className="section-padding bg-canvas">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Key Deliverable"
                title="Tender Analysis Report"
                subtitle="A comprehensive document that makes the decision easy."
                align="left"
              />

              <p className="text-text-secondary mb-8">
                Our Tender Analysis Report provides your committee with
                everything needed to make a confident decision. No more guessing
                which contractor is actually offering the best value.
              </p>

              <ul className="space-y-3">
                {reportContents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card variant="interactive" className="text-center p-6">
                <Users className="w-8 h-8 text-casa-navy mx-auto mb-3" />
                <p className="font-semibold text-text-primary">3-4</p>
                <p className="text-sm text-text-secondary">
                  Contractors invited
                </p>
              </Card>
              <Card variant="interactive" className="text-center p-6">
                <MessageSquare className="w-8 h-8 text-casa-navy mx-auto mb-3" />
                <p className="font-semibold text-text-primary">All</p>
                <p className="text-sm text-text-secondary">
                  Queries handled
                </p>
              </Card>
              <Card variant="interactive" className="text-center p-6">
                <FileText className="w-8 h-8 text-casa-navy mx-auto mb-3" />
                <p className="font-semibold text-text-primary">Detailed</p>
                <p className="text-sm text-text-secondary">Analysis report</p>
              </Card>
              <Card variant="interactive" className="text-center p-6">
                <BarChart3 className="w-8 h-8 text-casa-navy mx-auto mb-3" />
                <p className="font-semibold text-text-primary">Clear</p>
                <p className="text-sm text-text-secondary">Recommendation</p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Professional Tender Management */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Why It Matters"
              title="The cheapest quote isn't always the best value"
              subtitle="Professional tender management protects your interests and delivers better outcomes."
            />

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card variant="elevated">
                <h3 className="font-semibold text-text-primary mb-2">
                  Qualified Contractors
                </h3>
                <p className="text-text-secondary text-sm">
                  We only invite contractors with appropriate licences,
                  insurance, and a track record of quality work on similar
                  projects.
                </p>
              </Card>
              <Card variant="elevated">
                <h3 className="font-semibold text-text-primary mb-2">
                  Fair Comparison
                </h3>
                <p className="text-text-secondary text-sm">
                  All contractors quote against the same scope, so you can
                  compare like-for-like and identify the true value proposition.
                </p>
              </Card>
              <Card variant="elevated">
                <h3 className="font-semibold text-text-primary mb-2">
                  Informed Decision
                </h3>
                <p className="text-text-secondary text-sm">
                  Our analysis considers more than just price—capability,
                  program, risk, and overall value all factor into our
                  recommendation.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
