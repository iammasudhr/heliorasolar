import type { Metadata } from 'next';
import {
  CTA,
  Heading,
  PageHero,
  Process,
  ServiceCards,
} from '@/components/ui';
import { copy } from '@/data/copy';

export const metadata: Metadata = {
  title: 'Rooftop Solar Solutions',
  description:
    'Explore home solar, commercial rooftop installations, battery-ready systems and maintenance.',
  alternates: {
    canonical: '/services/',
  },
};

export default function Services() {
  return (
    <>
      <PageHero
        tag="Our solutions"
        title={copy.solutions.text01}
        text={copy.solutions.text02}
      />
      <section className="wrap section compact">
        <ServiceCards />
      </section>
      <section className="wrap section">
        <Heading eyebrow={copy.solutions.text03} title={copy.solutions.text04} />
        <Process />
      </section>
      <CTA />
    </>
  );
}
