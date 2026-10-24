import type { Metadata } from 'next';
import {
  PiArrowDownRight,
  PiHouse,
  PiLeaf,
  PiLightning,
  PiSun,
} from 'react-icons/pi';
import { Estimator } from '@/components/interactive';
import {
  Button,
  CTA,
  FAQ,
  Heading,
  Process,
  ServiceCards,
} from '@/components/ui';
import { copy } from '@/data/copy';
import { site } from '@/data/site';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> {copy.home.text01}
          </span>
          <h1>
            {copy.home.text02}
            <br />
            {copy.home.text03}
            <br />
            <em>{copy.home.text04}</em>
          </h1>
          <p>{copy.home.text05}</p>
          <div className="hero-actions">
            <Button href="/contact/">{copy.home.text06}</Button>
            <a href="/services/" className="text-link">
              {copy.home.text07}
              <PiArrowDownRight />
            </a>
          </div>
          <div className="hero-note">
            <PiSun />
            <span>
              {copy.home.text08}
              <br />
              <strong>{copy.home.text09}</strong>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/solar-home.webp"
            alt={copy.home.text10}
            width="1000"
            height="1000"
            fetchPriority="high"
          />
          <div className="image-label">
            <span className="status-dot" /> {copy.home.text11}
          </div>
          <div className="sun-badge">
            <PiSun />
          </div>
          <div className="energy-card">
            <span className="energy-icon">
              <PiLightning />
            </span>
            <div>
              <small>{copy.home.text12}</small>
              <strong>{copy.home.text13}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits wrap">
        <span>
          <PiSun /> {copy.home.text14}
        </span>
        <span>
          <PiHouse /> {copy.home.text15}
        </span>
        <span>
          <PiLeaf /> {copy.home.text16}
        </span>
      </section>

      <section className="section wrap">
        <div className="section-top">
          <Heading
            eyebrow={copy.home.text17}
            title={copy.home.text18}
            text={copy.home.text19}
          />
          <a className="text-link" href="/services/">
            {copy.home.text20}
          </a>
        </div>
        <ServiceCards />
      </section>

      <section className="story-section">
        <div className="wrap split">
          <div className="story-image">
            <img
              src="/images/solar-detail.webp"
              alt={copy.home.text21}
              width="800"
              height="900"
              loading="lazy"
            />
            <div className="image-caption">
              {copy.home.text22}
              <br />
              {copy.home.text23}
            </div>
          </div>
          <div>
            <Heading
              eyebrow={copy.home.text24}
              title={copy.home.text25}
              text={copy.home.text26}
            />
            <div className="numbered-feature">
              <span>01</span>
              <div>
                <h3>{copy.home.text27}</h3>
                <p>{copy.home.text28}</p>
              </div>
            </div>
            <div className="numbered-feature">
              <span>02</span>
              <div>
                <h3>{copy.home.text29}</h3>
                <p>{copy.home.text30}</p>
              </div>
            </div>
            <Button href="/about/">{copy.home.text31}</Button>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <Heading eyebrow={copy.home.text32} title={copy.home.text33} />
        <Process />
      </section>

      <section className="calculator-section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">{copy.home.text34}</span>
            <h2>
              {copy.home.text35}
              <br />
              {copy.home.text36}
              <br />
              <em>{copy.home.text37}</em>
            </h2>
            <p>{copy.home.text38}</p>
            <div className="outline-chip">
              <PiSun /> {copy.home.text39}
            </div>
          </div>
          <Estimator />
        </div>
      </section>

      <section className="section wrap faq-layout">
        <Heading
          eyebrow={copy.home.text40}
          title={copy.home.text41}
          text={copy.home.text42}
        />
        <div>
          <FAQ limit={4} />
          <a className="text-link" href="/faq/">
            {copy.home.text43}
          </a>
        </div>
      </section>

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: site.name,
            url: site.url,
            logo: site.url + '/logo.svg',
            description: site.description,
          }),
        }}
      />
    </>
  );
}
