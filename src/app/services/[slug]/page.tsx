import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Button,
  CheckList,
  CTA,
  FAQ,
  Heading,
  PageHero,
} from '@/components/ui';
import { copy } from '@/data/copy';
import { services, site } from '@/data/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s?.title,
    description: s?.description,
    alternates: {
      canonical: '/services/' + slug + '/',
    },
  };
}

const expectations = [
  {
    title: 'Site suitability',
    body: 'Roof condition, shade, access and electrical infrastructure are assessed before the design is finalised.',
  },
  {
    title: 'Equipment and scope',
    body: 'Your written proposal should explain component specifications, exclusions, warranties and installation responsibilities.',
  },
  {
    title: 'Approvals and handover',
    body: 'Utility requirements, inspection and commissioning depend on your location and the selected system.',
  },
];

export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();

  return (
    <>
      <PageHero tag={s.tag} title={s.title} text={s.description} />

      <section className="wrap split section compact">
        <img
          className="rounded-image"
          src={s.image}
          alt={`Rooftop solar installation for ${s.title}`}
          width="800"
          height="700"
        />
        <div>
          <span className="eyebrow">{copy.serviceDetail.text01}</span>
          <h2>{copy.serviceDetail.text02}</h2>
          <p>{s.answer}</p>
          <CheckList items={s.points} />
          <Button href="/contact/">{copy.serviceDetail.text03}</Button>
        </div>
      </section>

      <section className="wrap section">
        <Heading
          eyebrow={copy.serviceDetail.text04}
          title={copy.serviceDetail.text05}
        />
        <div className="info-grid">
          {expectations.map((item, i) => (
            <article key={item.title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section faq-layout">
        <Heading
          eyebrow={copy.serviceDetail.text06}
          title={copy.serviceDetail.text07}
        />
        <FAQ limit={3} />
      </section>

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.title,
            description: s.answer,
            url: site.url + '/services/' + s.slug + '/',
            provider: {
              '@type': 'Organization',
              name: site.name,
            },
          }),
        }}
      />
    </>
  );
}
