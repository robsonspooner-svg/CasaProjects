import { Container } from '@/components/layout';
import { SectionHeading, Accordion } from '@/components/ui';

const faqs = [
  {
    question: 'What size projects do you handle?',
    answer:
      'We specialise in projects ranging from $100,000 to $750,000, which is the typical range for body corporate capital works such as fence replacements, waterproofing, facade repairs, lift upgrades, and common area refurbishments. We can discuss larger projects on a case-by-case basis.',
  },
  {
    question: 'How do your fees work?',
    answer:
      'We offer fixed-fee pricing for Scope of Works preparation (from $5,210 + GST) and Tender Management (from $2,220 + GST). Project Management fees are calculated as a percentage of the contract value, typically 5-9% depending on project complexity and duration. All fees are quoted upfront with no hidden costs.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We are based in Brisbane and service the greater South East Queensland region, including the Gold Coast, Sunshine Coast, Ipswich, and surrounding areas. For projects outside this region, please contact us to discuss.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary significantly based on scope and complexity. As a guide: Scope of Works preparation takes 2-4 weeks, the tender phase takes 4-6 weeks, and construction duration depends on the project. We provide realistic timeline estimates during our initial consultation.',
  },
  {
    question: 'Do you manage the contractors directly?',
    answer:
      'Yes. As your project manager, we coordinate all contractor activities, conduct weekly site meetings, perform quality inspections, assess progress claims, and manage any variations. The body corporate retains the direct contract with the builder, but we act as superintendent to administer and oversee the works.',
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-canvas relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint opacity-40" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="FAQ"
            title="Common questions"
            subtitle="Everything you need to know about working with us."
          />

          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
