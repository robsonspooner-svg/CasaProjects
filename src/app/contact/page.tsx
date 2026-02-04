'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { Card, SectionHeading, Button, Input, Textarea } from '@/components/ui';
import { Mail, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/meeljjgg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Contact Form: ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormData);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Contact"
              title="Let's discuss your project"
              subtitle="Get in touch to discuss your construction project management needs. We're here to help."
            />
          </div>
        </Container>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-casa-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Email</p>
                    <a
                      href="mailto:hello@casapm.com.au"
                      className="text-text-secondary hover:text-casa-navy transition-colors"
                    >
                      hello@casapm.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-casa-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Location</p>
                    <p className="text-text-secondary">Brisbane, Queensland</p>
                    <p className="text-sm text-text-tertiary mt-1">
                      Servicing South East Queensland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-casa-navy/5 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-casa-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Business Hours
                    </p>
                    <p className="text-text-secondary">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm text-text-tertiary mt-1">
                      After-hours by appointment
                    </p>
                  </div>
                </div>
              </div>

              <Card variant="elevated" className="mt-8 bg-casa-navy text-white">
                <h3 className="font-semibold mb-3">
                  Need a detailed quote?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  For a comprehensive quote tailored to your specific project,
                  please use our quote request form.
                </p>
                <Button
                  href="/quote"
                  className="bg-white text-casa-navy hover:bg-white/90"
                >
                  Request a Quote
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card variant="elevated">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                      Message sent!
                    </h2>
                    <p className="text-text-secondary max-w-md mx-auto mb-6">
                      Thank you for getting in touch. We&apos;ll respond to your message within 1-2 business days.
                    </p>
                    <Button onClick={() => setStatus('idle')}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-text-primary mb-6">
                      Send us a message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="First Name"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => updateField('firstName', e.target.value)}
                          required
                        />
                        <Input
                          label="Last Name"
                          name="lastName"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={(e) => updateField('lastName', e.target.value)}
                          required
                        />
                      </div>

                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        required
                      />

                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                      />

                      <Input
                        label="Company (optional)"
                        name="company"
                        placeholder="Strata Management Co."
                        value={formData.company}
                        onChange={(e) => updateField('company', e.target.value)}
                      />

                      <Textarea
                        label="Message"
                        name="message"
                        placeholder="Tell us about your project or enquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        required
                      />

                      {status === 'error' && (
                        <div className="p-4 bg-error/10 text-error rounded-button text-sm">
                          Something went wrong. Please try again or email us directly.
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={status === 'loading' || !formData.firstName || !formData.email || !formData.message}
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>

                      <p className="text-xs text-text-tertiary text-center">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy" className="underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-canvas">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Service Area"
              title="South East Queensland"
              subtitle="We're based in Brisbane and service the greater South East Queensland region."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Ipswich'].map(
                (area) => (
                  <Card key={area} variant="interactive" className="text-center">
                    <MapPin className="w-5 h-5 text-casa-navy mx-auto mb-2" />
                    <p className="font-medium text-text-primary">{area}</p>
                  </Card>
                )
              )}
            </div>

            <p className="mt-8 text-text-secondary">
              For projects outside this region, please contact us to discuss.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
