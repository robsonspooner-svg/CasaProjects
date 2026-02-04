import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { Card, SectionHeading, Button } from '@/components/ui';
import { FinalCTA, TeamSection } from '@/components/sections';
import {
  MapPin,
  CheckCircle,
  GraduationCap,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Casa Project Management',
  description:
    'Meet the team behind Casa Project Management. Professional construction project managers with deep experience in strata and body corporate works.',
};

const qualifications = [
  'Bachelor of Architecture',
  'Master of Architecture (Hons)',
  '10+ years construction industry experience',
];

const values = [
  {
    title: 'Transparency',
    description:
      'Clear communication, honest advice, and no hidden fees. You always know exactly where your project stands.',
  },
  {
    title: 'Quality',
    description:
      'We hold contractors to high standards and ensure work meets specifications. Your project deserves professional oversight.',
  },
  {
    title: 'Protection',
    description:
      'Proper documentation protects committees. We create detailed records that serve as your defence if issues arise.',
  },
  {
    title: 'Efficiency',
    description:
      'We respect your time. Streamlined processes, clear reporting, and proactive communication keep projects moving.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="About Us"
              title="Professional project management for Queensland strata"
              subtitle="We combine architectural expertise with hands-on construction experience to deliver quality outcomes for body corporates and strata managers."
            />
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="Built on experience, driven by results"
                align="left"
              />

              <div className="space-y-4 text-text-secondary">
                <p>
                  Casa Project Management was founded to address a gap in the
                  market: body corporates and strata managers deserve access to
                  professional project management without the premium price tag
                  of large consultancies.
                </p>
                <p>
                  With backgrounds in architecture and years of hands-on
                  construction experience, we understand both the design intent
                  and the practical realities of building works. This dual
                  perspective allows us to anticipate issues, communicate
                  effectively with contractors, and ensure quality outcomes.
                </p>
                <p>
                  We specialise in the $100,000 - $750,000 project range—the
                  sweet spot where professional oversight makes a real
                  difference but is often overlooked by larger firms.
                </p>
              </div>
            </div>

            <Card variant="elevated">
              <h3 className="font-semibold text-text-primary mb-6">
                Credentials
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-casa-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Qualifications
                    </p>
                    <ul className="mt-2 space-y-1">
                      {qualifications.map((qual, index) => (
                        <li
                          key={index}
                          className="text-sm text-text-secondary flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-casa-navy" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-casa-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Service Area
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      Brisbane and South East Queensland
                    </p>
                    <p className="text-sm text-text-secondary">
                      Gold Coast, Sunshine Coast, Ipswich
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-canvas">
        <Container>
          <SectionHeading
            badge="Our Values"
            title="What we stand for"
            subtitle="Principles that guide every project we undertake."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} variant="interactive">
                <h3 className="font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card variant="elevated" className="bg-casa-navy text-white">
              <h3 className="font-semibold text-xl mb-6">
                Common project types
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Fence replacement and repairs
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Waterproofing and roof remediation
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Facade repairs and painting
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Concrete cancer remediation
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Balcony and balustrade works
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Common area refurbishment
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Fire safety upgrades
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-white/60" />
                  Lift modernisation
                </li>
              </ul>
            </Card>

            <div>
              <SectionHeading
                badge="Why Us"
                title="The right size for your project"
                align="left"
              />

              <div className="space-y-4 text-text-secondary">
                <p>
                  Large consultancies often overlook projects under $1 million.
                  But these projects still deserve professional oversight—in
                  fact, they often need it more because body corporate
                  committees don&apos;t have in-house construction expertise.
                </p>
                <p>
                  We&apos;re sized to give your project the attention it
                  deserves. You work directly with experienced professionals,
                  not junior staff. Your project is a priority, not an
                  afterthought.
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Direct access to decision-makers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Quick response times
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Competitive pricing without compromising quality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    Local knowledge of Queensland regulations
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Button href="/quote">Get a Quote</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <TeamSection />

      <FinalCTA />
    </>
  );
}
