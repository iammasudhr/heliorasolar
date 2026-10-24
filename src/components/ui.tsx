import Link from 'next/link';
import { PiArrowRight, PiArrowUpRight, PiCheckCircle } from 'react-icons/pi';
import { copy } from '@/data/copy';
import { faqs, services, steps } from '@/data/site';

export function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`button ${light ? 'light' : ''}`} href={href}>
      {children}
      <PiArrowUpRight aria-hidden />
    </Link>
  );
}

export function Heading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function ServiceCards() {
  return (
    <div className="service-grid">
      {services.map((s, i) => (
        <Link
          className="service-card"
          href={'/services/' + s.slug + '/'}
          key={s.slug}
        >
          <div className="card-image">
            <img
              src={s.image}
              alt={
                i % 2
                  ? 'Close view of rooftop photovoltaic panels'
                  : 'Home with rooftop solar installation'
              }
              loading="lazy"
              width="700"
              height="520"
            />
            <span className="round-arrow">
              <PiArrowUpRight />
            </span>
          </div>
          <span className="eyebrow">
            0{i + 1} / {s.tag}
          </span>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </Link>
      ))}
    </div>
  );
}

export function FAQ({ limit = faqs.length }: { limit?: number }) {
  return (
    <div className="faq">
      {faqs.slice(0, limit).map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span>+</span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Process() {
  return (
    <div className="process">
      {steps.map((s, i) => (
        <article key={s.title}>
          <span className="step-number">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </article>
      ))}
    </div>
  );
}

export function CTA() {
  return (
    <section className="cta wrap">
      <div>
        <span className="eyebrow">{copy.shared.text01}</span>
        <h2>
          {copy.shared.text02}
          <br />
          {copy.shared.text03}
        </h2>
        <p>{copy.shared.text04}</p>
      </div>
      <Button href="/contact/" light>
        {copy.shared.text05}
      </Button>
    </section>
  );
}

export function PageHero({
  tag,
  title,
  text,
}: {
  tag: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero wrap">
      <div className="breadcrumb">
        <Link href="/">{copy.shared.text06}</Link>
        <PiArrowRight />
        {tag}
      </div>
      <span className="eyebrow">{tag}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((i) => (
        <li key={i}>
          <PiCheckCircle />
          {i}
        </li>
      ))}
    </ul>
  );
}
