export const site = {
  name: 'Heliora Solar',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://heliorasolar.in',
  phone: '+91 98320 45812',
  phoneRaw: '+919832045812',
  whatsapp: '919832045812',
  email: 'hello@heliorasolar.in',
  address: '2nd Floor, Sunview Plaza, Sevoke Road',
  city: 'Siliguri',
  region: 'West Bengal',
  postalCode: '734001',
  country: 'IN',
  hours: 'Monday–Saturday · 9:00 AM–6:00 PM',
  description:
    'Thoughtfully designed rooftop solar for homes and businesses. Explore installation, battery-ready systems and ongoing solar care with Heliora Solar.',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/services/' },
    { label: 'About', href: '/about/' },
    { label: 'Solar guide', href: '/solar-guide/' },
    { label: 'Contact', href: '/contact/' },
  ],
};

export const services = [
  {
    slug: 'residential-solar',
    title: 'Solar for your home',
    tag: 'RESIDENTIAL',
    description:
      'Turn an everyday rooftop into a source of clean electricity, with a system designed around your home and energy use.',
    image: '/images/solar-home.webp',
    points: [
      'Roof and shading assessment',
      'System sizing and layout',
      'Installation and handover',
    ],
    answer:
      'Residential rooftop solar converts sunlight into electricity for your home. A suitable system is designed around roof conditions, daytime consumption and local grid requirements.',
  },
  {
    slug: 'commercial-solar',
    title: 'Better energy for business',
    tag: 'COMMERCIAL',
    description:
      'Make your roof work harder. Plan a rooftop system around operating hours, usable space and long-term energy needs.',
    image: '/images/solar-detail.webp',
    points: [
      'Consumption profile review',
      'Commercial rooftop planning',
      'Commissioning and monitoring',
    ],
    answer:
      'Commercial solar is designed for business electricity demand. Roof suitability, operating hours, utility approvals and the site’s electrical infrastructure determine the final design.',
  },
  {
    slug: 'battery-ready-systems',
    title: 'Plan beyond the sunshine',
    tag: 'BATTERY & HYBRID',
    description:
      'Explore compatible battery storage and backup options, with clear guidance on what your system can support.',
    image: '/images/solar-home.webp',
    points: [
      'Backup-load assessment',
      'Compatible inverter selection',
      'Storage expansion planning',
    ],
    answer:
      'Battery storage can store solar energy for later use. Backup during an outage requires a compatible inverter, battery and correctly configured backup circuits; ordinary grid-tied solar alone does not provide this.',
  },
  {
    slug: 'solar-maintenance',
    title: 'Care that keeps it going',
    tag: 'MAINTENANCE',
    description:
      'Keep your rooftop system understood and maintained with planned inspection, safe cleaning guidance and fault checks.',
    image: '/images/solar-detail.webp',
    points: [
      'Visual and electrical inspections',
      'Generation performance review',
      'Cleaning and service planning',
    ],
    answer:
      'Solar maintenance includes safe panel cleaning when needed, inspection of mounting and electrical connections, and review of monitoring data. Frequency depends on site conditions and manufacturer guidance.',
  },
];

export const faqs = [
  {
    q: 'Is my roof suitable for solar panels?',
    a: 'A site survey checks the roof’s structure, usable area, shade, orientation and safe access. The installation design should be approved only after these conditions are assessed.',
  },
  {
    q: 'How much will my rooftop solar system cost?',
    a: 'Pricing depends on system capacity, components, mounting structure, electrical work and site conditions. Request a written itemised proposal after a site assessment so every cost is tailored to your property.',
  },
  {
    q: 'Will solar work during a power cut?',
    a: 'A conventional grid-tied system normally shuts down during a grid outage for safety. Backup requires suitable battery storage, a compatible inverter and a properly designed backup circuit.',
  },
  {
    q: 'Does solar still generate electricity on cloudy days?',
    a: 'Panels can generate electricity in diffuse daylight, but output is lower than in strong direct sunlight. Seasonal weather and shading should be considered in the energy estimate.',
  },
  {
    q: 'Are subsidies or net metering available?',
    a: 'Eligibility and approval depend on the current government programme, your connection type, location and electricity distributor. Verify the latest rules with the official programme and your DISCOM before making a decision.',
  },
  {
    q: 'What happens after I request a consultation?',
    a: 'Our process begins with a short discussion, a review of your electricity bill, an on-site roof assessment and an itemised proposal. Installation starts only after scope, approvals and timelines are agreed.',
  },
];

export const steps = [
  {
    title: 'Start with your roof',
    body: 'We discuss your goals, recent electricity use and the space you have.',
  },
  {
    title: 'A plan that fits',
    body: 'Review a clear system layout, component selection and itemised scope.',
  },
  {
    title: 'Bring it to life',
    body: 'Installation, electrical checks and commissioning follow the agreed plan.',
  },
  {
    title: 'Know your system',
    body: 'Get a practical handover covering monitoring, maintenance and support.',
  },
];

export const values = [
  {
    title: 'Clarity before commitment',
    body: 'Understand your options, assumptions and scope before deciding.',
  },
  {
    title: 'Designed around your roof',
    body: 'Every proposal begins with the building, the shade and the way you use power.',
  },
  {
    title: 'A longer view of energy',
    body: 'Plan for maintenance, monitoring and future energy needs from the start.',
  },
];
