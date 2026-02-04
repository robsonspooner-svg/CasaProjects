import { Container } from '@/components/layout';
import { Card, SectionHeading } from '@/components/ui';
import {
  AlertTriangle,
  Users,
  DollarSign,
  FileText,
  Clock,
  GitBranch,
} from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Building Defects',
    description:
      'Identify issues before they escalate into major repairs. Our thorough inspections document exactly what needs attention.',
  },
  {
    icon: Users,
    title: 'Contractor Management',
    description:
      'No more chasing quotes or managing unreliable tradies. We handle all contractor relationships and accountability.',
  },
  {
    icon: DollarSign,
    title: 'Budget Blowouts',
    description:
      'Fixed-fee scoping and transparent contract administration. Know your costs upfront and avoid surprise variations.',
  },
  {
    icon: FileText,
    title: 'Compliance Risk',
    description:
      'Proper documentation protects your committee and owners. We ensure everything is recorded and compliant.',
  },
  {
    icon: Clock,
    title: 'Time Drain',
    description:
      'Focus on property management, not construction coordination. We handle site meetings, inspections, and paperwork.',
  },
  {
    icon: GitBranch,
    title: 'Scope Creep',
    description:
      'Detailed specifications prevent costly variations. Our comprehensive scopes leave nothing to interpretation.',
  },
];

export function ProblemsWeSolve() {
  return (
    <section className="section-padding bg-canvas relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint opacity-60" />

      {/* Diagonal stripe overlay in header area */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-construction-stripe" />

      <Container className="relative">
        <SectionHeading
          badge="Common Challenges"
          title="Problems we solve for strata managers"
          subtitle="Managing building projects is complex. We take the stress and risk off your plate."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} variant="construction">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center group-hover:bg-construction-orange/10 transition-colors">
                  <problem.icon className="w-6 h-6 text-casa-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
