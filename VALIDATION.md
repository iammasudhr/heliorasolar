# Verification

- Production Next.js static export: passed.
- Strict TypeScript check: passed.
- 12 content routes: single H1, canonical and viewport-fit=cover checked.
- All local links, images, script and stylesheet references checked in exported HTML.
- JSON-LD syntax checked; SVG logo contains no text nodes.
- Desktop design visually reviewed.
- Mobile layouts visually reviewed in 320px and 390px browser frames.
- Production enquiry form preview tested; data stays on the page in demo mode.
- Production mobile tab tap navigation and scroll hide/reveal tested.
- Physical iOS touch swipe and device-specific safe-area behavior were not tested on actual hardware. Touch handlers and safe-area CSS are implemented; verify these on your phone before launch.
- Development preview HTML rendered, but hydration could not be verified in the managed preview environment. The exported production build passed interaction checks.
- No live WhatsApp message was sent. Real domain/contact configuration is intentionally left to the owner.
