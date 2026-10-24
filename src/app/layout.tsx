import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { copy } from '@/data/copy';
import { services, site } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Heliora Solar | Thoughtful Rooftop Solar Solutions',
    template: '%s | Heliora Solar',
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heliora Solar — a brighter kind of energy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#173e31',
  colorScheme: 'light',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a className="skip" href="#main">
          {copy.footer.text01}
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="wrap footer-grid">
            <div>
              <Link href="/" aria-label="Heliora Solar home">
                <img
                  src="/logo.svg"
                  width="165"
                  height="48"
                  alt={copy.footer.text02}
                />
              </Link>
              <h3>
                {copy.footer.text03}
                <br />
                {copy.footer.text04}
              </h3>
              <p>
                {copy.footer.text05}
                <br />
                {copy.footer.text06}
              </p>
            </div>
            <div>
              <h4>{copy.footer.text07}</h4>
              {site.navigation.map((n) => (
                <Link href={n.href} key={n.href}>
                  {n.label}
                </Link>
              ))}
              <Link href="/faq/">{copy.footer.text08}</Link>
            </div>
            <div>
              <h4>{copy.footer.text09}</h4>
              {services.map((s) => (
                <Link href={'/services/' + s.slug + '/'} key={s.slug}>
                  {s.title}
                </Link>
              ))}
            </div>
            <div>
              <h4>{copy.footer.text10}</h4>
              <p>
                {site.address}
                <br />
                {site.city}, {site.region}
                <br />
                {site.postalCode}
              </p>
              <p>
                <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </div>
          <div className="wrap footer-bottom">
            <span>
              © {new Date().getFullYear()} {copy.footer.text12}
            </span>
            <span>
              <Link href="/privacy/">{copy.footer.text13}</Link> ·{' '}
              <Link href="/terms/">{copy.footer.text14}</Link>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
