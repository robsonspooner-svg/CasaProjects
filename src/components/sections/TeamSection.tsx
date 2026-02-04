import Image from 'next/image';
import { Container } from '@/components/layout';
import { Card, SectionHeading } from '@/components/ui';
import { Award, Building2, FileCheck, GraduationCap } from 'lucide-react';

const team = [
  {
    name: 'Fin',
    role: 'Business Development Director',
    image: '/team/fin.jpg',
    bio: `Fin brings over a decade of experience in residential construction, having facilitated more than $20 million in project delivery for one of Queensland's leading home builders. His deep understanding of the construction lifecycle—from client acquisition through to handover—ensures effective stakeholder management and clear communication between committees, contractors, and strata managers throughout every project.`,
    highlights: [
      { icon: Award, text: '$20M+ in construction project facilitation' },
      { icon: Building2, text: 'Expert stakeholder & client relationship management' },
      { icon: FileCheck, text: 'Strategic project scoping & contractor engagement' },
    ],
  },
  {
    name: 'Robbie',
    role: 'Technical Director',
    image: '/team/robbie.jpg',
    bio: `Robbie is a qualified architect holding both a Bachelor's and Master's degree with Honours in Architecture (Professional). His background spans remedial construction coordination and complex procurement management, including oversight of a multi-million dollar equine hospital facility. This unique combination of architectural expertise and hands-on project delivery ensures rigorous technical oversight and documentation that protects your committee.`,
    highlights: [
      { icon: GraduationCap, text: 'Master of Architecture (Professional) with Honours' },
      { icon: Award, text: 'Multi-million dollar project procurement & management' },
      { icon: Building2, text: 'Remedial construction coordination specialist' },
    ],
  },
];

export function TeamSection() {
  return (
    <section className="section-padding bg-canvas relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint opacity-40" />

      <Container className="relative">
        <SectionHeading
          badge="Our Team"
          title="Meet the experts behind Casa"
          subtitle="Combining architectural expertise with hands-on construction experience to deliver exceptional outcomes."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member) => (
            <Card key={member.name} variant="elevated" className="overflow-hidden">
              <div className="flex flex-col">
                {/* Photo */}
                <div className="relative h-64 w-full bg-casa-navy/5">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-text-primary">{member.name}</h3>
                    <p className="text-construction-orange font-medium">{member.role}</p>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {member.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-construction-orange/10 flex items-center justify-center">
                          <highlight.icon className="w-4 h-4 text-construction-orange" />
                        </div>
                        <span className="text-sm text-text-secondary pt-1.5">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
