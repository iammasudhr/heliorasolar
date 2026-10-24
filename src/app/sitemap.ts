import type { MetadataRoute } from 'next';
import { services, site } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    'services',
    'about',
    'contact',
    'solar-guide',
    'faq',
    'privacy',
    'terms',
    ...services.map((s) => 'services/' + s.slug),
  ];

  return routes.map((path) => ({
    url: `${site.url}/${path ? path + '/' : ''}`,
    changeFrequency: 'monthly',
    priority: path ? 0.7 : 1,
  }));
}
