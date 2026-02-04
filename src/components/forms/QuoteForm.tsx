'use client';

import { useState } from 'react';
import { Button, Input, Textarea, Select, Card } from '@/components/ui';
import { CheckCircle, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

const projectTypes = [
  { value: 'fence', label: 'Fence Replacement / Repairs' },
  { value: 'waterproofing', label: 'Waterproofing / Roof Remediation' },
  { value: 'facade', label: 'Facade Repairs / Painting' },
  { value: 'concrete', label: 'Concrete Cancer Remediation' },
  { value: 'balcony', label: 'Balcony / Balustrade Works' },
  { value: 'common-area', label: 'Common Area Refurbishment' },
  { value: 'fire-safety', label: 'Fire Safety Upgrades' },
  { value: 'lift', label: 'Lift Modernisation' },
  { value: 'other', label: 'Other Capital Works' },
];

const buildingTypes = [
  { value: 'strata', label: 'Strata / Body Corporate' },
  { value: 'commercial', label: 'Commercial Building' },
  { value: 'residential', label: 'Private Residential' },
];

const valueRanges = [
  { value: 'under-100k', label: 'Under $100,000' },
  { value: '100k-250k', label: '$100,000 - $250,000' },
  { value: '250k-500k', label: '$250,000 - $500,000' },
  { value: '500k-750k', label: '$500,000 - $750,000' },
  { value: 'over-750k', label: 'Over $750,000' },
  { value: 'unsure', label: 'Not sure yet' },
];

const timelines = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-3-months', label: 'Within 1-3 months' },
  { value: '3-6-months', label: 'Within 3-6 months' },
  { value: '6-12-months', label: 'Within 6-12 months' },
  { value: 'planning', label: 'Just planning / exploring' },
];

const services = [
  { value: 'scope', label: 'Scope of Works Preparation' },
  { value: 'tender', label: 'Tender Management' },
  { value: 'project-management', label: 'Project Management' },
  { value: 'full-service', label: 'Full Service (All of the above)' },
  { value: 'unsure', label: 'Not sure - need advice' },
];

type FormData = {
  projectType: string;
  buildingType: string;
  address: string;
  numberOfUnits: string;
  estimatedValue: string;
  timeline: string;
  servicesRequired: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  howHeard: string;
};

const initialFormData: FormData = {
  projectType: '',
  buildingType: '',
  address: '',
  numberOfUnits: '',
  estimatedValue: '',
  timeline: '',
  servicesRequired: '',
  description: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  howHeard: '',
};

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

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
          _subject: `Quote Request: ${formData.projectType} - ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <Card variant="elevated" className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Thank you for your enquiry
        </h2>
        <p className="text-text-secondary max-w-md mx-auto mb-8">
          We&apos;ve received your quote request and will be in touch within 1-2
          business days to discuss your project.
        </p>
        <Button href="/">Return to Homepage</Button>
      </Card>
    );
  }

  return (
    <Card variant="elevated">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= s
                  ? 'gradient-navy text-white'
                  : 'bg-gray-100 text-text-tertiary'
              }`}
            >
              {step > s ? <CheckCircle className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`hidden sm:block w-24 h-1 mx-2 ${
                  step > s ? 'bg-casa-navy' : 'bg-gray-100'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Project Details */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-text-primary mb-6">
              Tell us about your project
            </h2>

            <Select
              label="Project Type"
              name="projectType"
              options={projectTypes}
              value={formData.projectType}
              onChange={(e) => updateField('projectType', e.target.value)}
              required
            />

            <Select
              label="Building Type"
              name="buildingType"
              options={buildingTypes}
              value={formData.buildingType}
              onChange={(e) => updateField('buildingType', e.target.value)}
              required
            />

            <Input
              label="Property Address"
              name="address"
              placeholder="123 Main Street, Brisbane QLD 4000"
              value={formData.address}
              onChange={(e) => updateField('address', e.target.value)}
              required
            />

            <Input
              label="Number of Units/Lots (if applicable)"
              name="numberOfUnits"
              placeholder="e.g., 24"
              value={formData.numberOfUnits}
              onChange={(e) => updateField('numberOfUnits', e.target.value)}
            />

            <div className="flex justify-end">
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.projectType || !formData.buildingType}
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Requirements */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-text-primary mb-6">
              Project requirements
            </h2>

            <Select
              label="Estimated Project Value"
              name="estimatedValue"
              options={valueRanges}
              value={formData.estimatedValue}
              onChange={(e) => updateField('estimatedValue', e.target.value)}
              required
            />

            <Select
              label="Preferred Timeline"
              name="timeline"
              options={timelines}
              value={formData.timeline}
              onChange={(e) => updateField('timeline', e.target.value)}
              required
            />

            <Select
              label="Services Required"
              name="servicesRequired"
              options={services}
              value={formData.servicesRequired}
              onChange={(e) => updateField('servicesRequired', e.target.value)}
              required
            />

            <Textarea
              label="Project Description"
              name="description"
              placeholder="Please describe your project requirements, any existing issues, and what you're hoping to achieve..."
              rows={4}
              value={formData.description}
              onChange={(e) => updateField('description', e.target.value)}
            />

            <div className="flex justify-between">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                disabled={!formData.estimatedValue || !formData.timeline}
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-text-primary mb-6">
              Your contact details
            </h2>

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
              required
            />

            <Input
              label="Company (optional)"
              name="company"
              placeholder="Strata Management Co."
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
            />

            <Input
              label="How did you hear about us?"
              name="howHeard"
              placeholder="Google, referral, etc."
              value={formData.howHeard}
              onChange={(e) => updateField('howHeard', e.target.value)}
            />

            {status === 'error' && (
              <div className="p-4 bg-error/10 text-error rounded-button text-sm">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <div className="flex justify-between">
              <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                type="submit"
                disabled={
                  status === 'loading' ||
                  !formData.firstName ||
                  !formData.email ||
                  !formData.phone
                }
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Quote Request'
                )}
              </Button>
            </div>

            <p className="text-xs text-text-tertiary text-center">
              By submitting this form, you agree to our{' '}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        )}
      </form>
    </Card>
  );
}
