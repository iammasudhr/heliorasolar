import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EnquiryForm, Estimator } from '@/components/interactive';
import {
  Button,
  CTA,
  FAQ,
  Heading,
  PageHero,
  Process,
} from '@/components/ui';
import { copy } from '@/data/copy';
import { pages } from '@/data/pages';
import { faqs, site, values } from '@/data/site';

export function generateStaticParams() {
  return Object.keys(pages).map((page) => ({ page }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const p = pages[page];
  return {
    title: p?.title,
    description: p?.description,
    alternates: {
      canonical: `/${page}/`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const p = pages[page];
  if (!p) notFound();

  return (
    <>
      <PageHero
        tag={page.replace('-', ' ')}
        title={p.title}
        text={p.description}
      />

      {page === 'about' ? (
        <>
          <section className="wrap split section compact">
            <img
              className="rounded-image"
              src="/images/solar-home.webp"
              alt={copy.pages.text01}
              width="900"
              height="800"
            />
            <div>
              <Heading
                eyebrow={copy.pages.text02}
                title={copy.pages.text03}
                text={copy.pages.text04}
              />
              <p>{copy.pages.text05}</p>
              <Button href="/contact/">{copy.pages.text06}</Button>
            </div>
          </section>

          <section className="section wrap">
            <div className="info-grid">
              {values.map((v) => (
                <article key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section wrap">
            <Heading eyebrow={copy.pages.text07} title={copy.pages.text08} />
            <Process />
          </section>

          <CTA />
        </>
      ) : page === 'contact' ? (
        <section className="wrap contact-layout section compact">
          <div>
            <h2>{copy.pages.text09}</h2>
            <p>{copy.pages.text10}</p>

            <div className="contact-item">
              <span className="eyebrow">{copy.pages.text11}</span>
              <h3>
                {site.city}, {site.region}
              </h3>
              <p>
                {site.address}, {site.postalCode}
                <br />
                {copy.pages.text12}
              </p>
              <a
                className="text-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address + ' ' + site.city + ' ' + site.region)}`}
                target="_blank"
                rel="noreferrer"
              >
                {copy.pages.text13}
              </a>
            </div>

            <div className="contact-item">
              <span className="eyebrow">{copy.pages.text14}</span>
              <h3>
                <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
              </h3>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                {site.hours}
              </p>
            </div>
          </div>

          <EnquiryForm />
        </section>
      ) : page === 'faq' ? (
        <>
          <section className="wrap section compact narrow">
            <FAQ />
          </section>
          <CTA />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.a,
                  },
                })),
              }),
            }}
          />
        </>
      ) : page === 'solar-guide' ? (
        <>
          <section className="wrap split section compact">
            <div>
              <Heading eyebrow={copy.pages.text16} title={copy.pages.text17} />
              <p>{copy.pages.text18}</p>
              <h3>{copy.pages.text19}</h3>
              <ol className="guide-list">
                <li>{copy.pages.text20}</li>
                <li>{copy.pages.text21}</li>
                <li>{copy.pages.text22}</li>
                <li>{copy.pages.text23}</li>
              </ol>
              <p>
                {copy.pages.text24}
                <a
                  href="https://pmsuryaghar.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.pages.text25}
                </a>
                ,{' '}
                <a href="https://mnre.gov.in/" target="_blank" rel="noreferrer">
                  {copy.pages.text26}
                </a>{' '}
                {copy.pages.text27}
              </p>
            </div>
            <Estimator />
          </section>

          <section className="wrap section">
            <Heading eyebrow={copy.pages.text28} title={copy.pages.text29} />
            <div className="info-grid">
              {[
                'Panel and inverter specifications',
                'Mounting, wiring and safety scope',
                'Warranty and service responsibilities',
              ].map((t) => (
                <article key={t}>
                  <h3>{t}</h3>
                  <p>{copy.pages.text30}</p>
                </article>
              ))}
            </div>
          </section>

          <CTA />
        </>
      ) : (
        <section className="wrap section compact legal">
          <h2>
            {page === 'privacy' ? 'Your information' : 'About our services'}
          </h2>
          <p>
            {page === 'privacy'
              ? 'This website does not require user accounts, tracking analytics or marketing cookies. Information you enter into the consultation form is used solely to prepare your solar enquiry.'
              : 'Heliora Solar provides rooftop solar consultation, system design, installation and maintenance services for residential and commercial properties. All installations are carried out following an on-site engineering and structural assessment.'}
          </p>

          <h2>
            {page === 'privacy'
              ? 'Enquiries and external services'
              : 'Estimates and proposals'}
          </h2>
          <p>
            {page === 'privacy'
              ? 'When you submit an enquiry via WhatsApp, your message is passed directly to WhatsApp so our solar team can assist you. WhatsApp and map providers apply their own privacy policies, and standard hosting logs may record technical request metadata.'
              : 'Our online solar calculator provides an initial capacity estimate based on your monthly bill and tariff. Actual generation, system cost, savings and grid approvals depend on roof conditions, shading, equipment selection and local DISCOM regulations. Every project is confirmed through a written site-specific proposal.'}
          </p>

          <h2>{copy.pages.text31}</h2>
          <p>{copy.pages.text32}</p>
        </section>
      )}
    </>
  );
}
