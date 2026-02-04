import { Container } from '@/components/layout';
import { Card, SectionHeading, Button } from '@/components/ui';
import { Building2, Users, Home } from 'lucide-react';

const clientTypes = [
  {
    icon: Building2,
    title: 'Strata Managers',
    description:
      'Managing multiple buildings with constant maintenance demands? We handle the construction complexity so you can focus on property management. Our detailed reporting keeps you informed without drowning in site visits.',
    benefits: [
      'Reduce your time on construction coordination',
      'Professional documentation for your records',
      'Clear communication with committees',
    ],
  },
  {
    icon: Users,
    title: 'Body Corporates',
    description:
      'Committee members juggling day jobs while managing capital works? Let us coordinate your projects with the professionalism they deserve. We report to your committee and protect your interests.',
    benefits: [
      'Independent oversight of contractors',
      'Budget protection and variation control',
      'Regular progress updates for all owners',
    ],
  },
  {
    icon: Home,
    title: 'Private Owners',
    description:
      'Investment property repairs done right, on budget, on time. Whether it\'s a renovation, remediation, or major maintenance, we ensure quality outcomes without the headaches.',
    benefits: [
      'No construction experience needed',
      'Competitive contractor quotes',
      'Quality assurance inspections',
    ],
  },
];

export function ClientTypes() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-blueprint-light opacity-30" />

      <Container className="relative">
        <SectionHeading
          badge="Who We Help"
          title="Project management tailored to your needs"
          subtitle="Different clients have different challenges. We adapt our approach to deliver the best outcomes for your situation."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {clientTypes.map((client, index) => (
            <Card key={index} variant="construction-elevated" className="h-full group">
              {/* Icon with orange gradient background */}
              <div className="flex-shrink-0 w-14 h-14 mb-4 rounded-lg gradient-orange flex items-center justify-center group-hover:shadow-construction-glow transition-shadow">
                <client.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-construction-orange transition-colors">
                {client.title}
              </h3>
              <p className="text-text-secondary mb-6">{client.description}</p>

              <ul className="space-y-2">
                {client.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-construction-orange mt-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/quote" variant="construction">Discuss Your Project</Button>
        </div>
      </Container>
    </section>
  );
}
