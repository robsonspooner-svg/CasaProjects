import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service | Casa Project Management',
  description: 'Terms of Service for Casa Project Management.',
};

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Terms of Service"
            subtitle="Last updated: February 2025"
            align="left"
          />

          <div className="prose prose-lg max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Casa Project Management website
              (&quot;Site&quot;), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our
              Site.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Casa Project Management provides construction project management
              services including but not limited to scope of works preparation,
              tender management, and contract administration for strata
              managers, body corporates, and property owners in Queensland,
              Australia.
            </p>

            <h2>3. Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in a way that does not:</p>
            <ul>
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else&apos;s use of the Site</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful or malicious content</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this Site, including text, graphics, logos, images,
              and software, is the property of Casa Project Management or its
              content suppliers and is protected by Australian and international
              copyright laws.
            </p>

            <h2>5. Quote Requests and Enquiries</h2>
            <p>
              Submitting a quote request or enquiry through our Site does not
              create a binding agreement. All services are subject to a formal
              written agreement between Casa Project Management and the client.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Casa Project Management
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of the
              Site or services.
            </p>

            <h2>7. Professional Services</h2>
            <p>
              Our project management services are provided in accordance with
              industry standards and applicable Queensland legislation. Specific
              terms and conditions for professional services will be outlined in
              individual service agreements.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not
              responsible for the content or privacy practices of these external
              sites.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Casa Project Management,
              its officers, directors, employees, and agents from any claims,
              damages, losses, or expenses arising from your use of the Site or
              violation of these terms.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to the Site.
              Your continued use of the Site after changes constitutes
              acceptance of the modified terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of Queensland, Australia. Any disputes arising from
              these terms shall be subject to the exclusive jurisdiction of the
              courts of Queensland.
            </p>

            <h2>12. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions will continue in full force and effect.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us via
              our{' '}
              <a href="/contact" className="text-casa-navy underline">
                contact form
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
