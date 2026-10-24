'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  PiArrowUpRight,
  PiBookOpen,
  PiChatCircle,
  PiHouse,
  PiInfo,
  PiList,
  PiSun,
  PiX,
} from 'react-icons/pi';
import { copy } from '@/data/copy';
import { site } from '@/data/site';

const icons = [PiHouse, PiSun, PiInfo, PiBookOpen, PiChatCircle];

export function Navigation() {
  const path = usePathname();
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const start = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 7) {
        setHidden(y > last && y > 110);
        last = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
    setHidden(false);
  }, [path]);

  const active = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href);

  return (
    <>
      <header className="site-header">
        <div className="header wrap">
          <Link href="/" aria-label="Heliora Solar home" className="logo">
            <img
              src="/logo.svg"
              width="136"
              height="40"
              alt={copy.navigation.text01}
            />
          </Link>

          <nav aria-label="Main navigation" className="desktop-nav">
            {site.navigation.map((n) => (
              <Link
                aria-current={active(n.href) ? 'page' : undefined}
                key={n.href}
                href={n.href}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact/" className="header-cta">
            {copy.navigation.text02}
            <PiArrowUpRight />
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label="Toggle navigation"
          >
            {menu ? <PiX /> : <PiList />}
          </button>
        </div>

        {menu && (
          <nav className="menu-panel" aria-label="Expanded navigation">
            {site.navigation.map((n) => (
              <Link
                href={n.href}
                key={n.href}
                aria-current={active(n.href) ? 'page' : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <nav
        aria-label="Mobile navigation; swipe left or right to change page"
        className={`mobile-dock ${hidden ? 'dock-hidden' : ''}`}
        onFocusCapture={() => setHidden(false)}
        onTouchStart={(e) => {
          swiped.current = false;
          start.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          };
        }}
        onTouchEnd={(e) => {
          if (!start.current) return;
          const dx = e.changedTouches[0].clientX - start.current.x;
          const dy = e.changedTouches[0].clientY - start.current.y;
          start.current = null;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            swiped.current = true;
            const idx = site.navigation.findIndex((n) => active(n.href));
            const next = Math.max(
              0,
              Math.min(site.navigation.length - 1, idx + (dx < 0 ? 1 : -1))
            );
            router.push(site.navigation[next].href);
          }
        }}
        onClickCapture={(e) => {
          if (swiped.current) {
            e.preventDefault();
            swiped.current = false;
          }
        }}
      >
        {site.navigation.map((n, i) => {
          const Icon = icons[i];
          return (
            <Link
              key={n.href}
              href={n.href}
              className={active(n.href) ? 'selected' : ''}
              aria-current={active(n.href) ? 'page' : undefined}
            >
              <Icon />
              <span>{i === 1 ? 'Solar' : i === 3 ? 'Guide' : n.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
