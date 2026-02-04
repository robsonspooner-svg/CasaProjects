import {
  Hero,
  TrustBar,
  ProblemsWeSolve,
  HowWeWork,
  ServicesOverview,
  ClientTypes,
  FAQ,
  FinalCTA,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemsWeSolve />
      <HowWeWork />
      <ServicesOverview />
      <ClientTypes />
      <FAQ />
      <FinalCTA />
    </>
  );
}
