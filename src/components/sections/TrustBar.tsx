import { Container } from '@/components/layout';
import { Award, Users, ClipboardCheck, MapPin } from 'lucide-react';

const credentials = [
  {
    icon: Award,
    label: 'Proven Track Record',
    value: '$20M+ Projects Delivered',
  },
  {
    icon: Users,
    label: 'Specialist Focus',
    value: 'Strata & Body Corporate',
  },
  {
    icon: ClipboardCheck,
    label: 'Transparent Process',
    value: 'Fixed-Fee Pricing',
  },
  {
    icon: MapPin,
    label: 'Local Expertise',
    value: 'South East Queensland',
  },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-construction-steel-dark relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-steel-texture opacity-30" />

      <Container className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="text-center group cursor-default"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-construction-orange/20 group-hover:bg-construction-orange/30 transition-colors group-hover:scale-110 duration-300">
                <credential.icon className="w-6 h-6 text-construction-orange" />
              </div>
              <p className="font-semibold text-white text-sm">
                {credential.label}
              </p>
              <p className="text-construction-orange font-bold text-sm">
                {credential.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
