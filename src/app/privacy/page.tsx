import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy | Casa Project Management',
  description: 'Privacy Policy for Casa Project Management.',
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Last updated: February 2025"
            align="left"
          />

          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Casa Project Management (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in various ways:</p>
            <h3>Personal Data</h3>
            <p>
              When you enquire about our services or submit a quote request, we
              may collect:
            </p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company or organisation name</li>
              <li>Property address and project details</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you access our website, we may automatically collect certain
              information including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on those pages</li>
              <li>IP address</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes</li>
              <li>Deliver our project management services</li>
              <li>Communicate with you about your project</li>
              <li>Send administrative information and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share your
                information with contractors and service providers who assist us
                in operating our business.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or in response to legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred.
              </li>
            </ul>

            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures
              to protect your personal information. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Under Australian privacy law, you have the right to access the
              personal information we hold about you and request corrections if
              necessary. To exercise these rights, please contact us using the
              details below.
            </p>

            <h2>7. Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these websites and
              encourage you to review their privacy policies.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us via our{' '}
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
