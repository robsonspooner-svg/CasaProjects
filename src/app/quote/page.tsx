import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { SectionHeading, Card } from '@/components/ui';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Quote | Casa Project Management',
  description:
    'Request a free quote for your construction project management needs. We\'ll provide a detailed proposal tailored to your requirements.',
};

const benefits = [
  'Free, no-obligation consultation',
  'Response within 1-2 business days',
  'Detailed proposal tailored to your project',
  'Transparent pricing with no hidden fees',
];

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Get Started"
              title="Request a free quote"
              subtitle="Tell us about your project and we'll provide a detailed proposal tailored to your requirements."
            />
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold text-text-primary mb-4">
                  What to expect
                </h3>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <Card variant="elevated">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-casa-navy mt-0.5" />
                    <div>
                      <p className="font-semibold text-text-primary text-sm">
                        Response time
                      </p>
                      <p className="text-text-secondary text-sm">
                        1-2 business days
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
