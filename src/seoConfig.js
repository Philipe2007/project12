import { businessInfo, serviceCategoryGroups, services } from './data/siteData';

// Central SEO settings for the whole site.
// Domain confirmed by the owner: delphinebeatystudio.com
export const SITE_URL = 'https://delphinebeatystudio.com';
export const SITE_NAME = 'Delphine Beauty Studio';
export const DEFAULT_IMAGE = '/og-image.jpg'; // put a 1200x630 image in /public

const STATIC_PAGES = {
  '/': {
    title: 'Hair Salon in Bonita Springs, FL | Delphine Beauty Studio',
    description:
      'European-style hair salon in Bonita Springs, FL. Cuts, color, balayage, braids, skin care and eyebrow tint at J. Lee Salon Suites. Book online. English & French spoken.',
  },
  '/services': {
    title: 'Hair & Beauty Services and Prices | Bonita Springs, FL',
    description:
      'Browse hair, color, balayage, braids, keratin, facials and eyebrow services with prices at Delphine Beauty Studio, J. Lee Salon Suites, Bonita Springs, FL.',
  },
  '/gallery': {
    title: 'Hair & Beauty Gallery | Delphine Beauty Studio, Bonita Springs',
    description:
      'See our hair color, cuts, braids and styling work, plus photos of our salon in Bonita Springs, Florida.',
  },
  '/about': {
    title: 'About Delphine Beauty Studio | Bonita Springs, FL Salon',
    description:
      'Meet Delphine Beauty Studio, a European-style salon in Bonita Springs, Florida. English and French spoken, personal service in a private suite.',
  },
  '/contact': {
    title: 'Contact & Directions | Delphine Beauty Studio, Bonita Springs FL',
    description: `Find Delphine Beauty Studio at ${businessInfo.streetAddress}, ${businessInfo.city}, ${businessInfo.region} ${businessInfo.postalCode}. Call, WhatsApp or book online.`,
  },
  '/booking': {
    title: 'Book an Appointment | Delphine Beauty Studio, Bonita Springs',
    description:
      'Book your hair or beauty appointment online with Delphine Beauty Studio in Bonita Springs, FL. Quick, easy online booking.',
  },
};

export function getSeoForPath(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  if (STATIC_PAGES[path]) return { path, ...STATIC_PAGES[path] };

  const category = path.match(/^\/services\/category\/([^/]+)$/);
  if (category) {
    const group = serviceCategoryGroups.find((item) => item.slug === category[1]);
    if (group) {
      const names = services
        .filter((item) => group.categories.includes(item.category))
        .slice(0, 4)
        .map((item) => item.name)
        .join(', ');
      return {
        path,
        title: `${group.name} Services in Bonita Springs, FL | ${SITE_NAME}`,
        description: `${group.name} services at ${SITE_NAME} in Bonita Springs, FL, including ${names} and more. See prices and book online.`,
      };
    }
    return { path: '/services', ...STATIC_PAGES['/services'] };
  }

  const serviceMatch = path.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = services.find((item) => item.slug === serviceMatch[1]);
    if (service) {
      const price = service.priceLabel?.startsWith('$') ? ` Price: ${service.priceLabel}.` : '';
      const time = service.duration && service.duration !== 'Variable' ? ` Time: ${service.duration}.` : '';
      return {
        path,
        title: `${service.name} in Bonita Springs, FL | ${SITE_NAME}`,
        description: `${service.name} at ${SITE_NAME}, J. Lee Salon Suites, Bonita Springs, FL.${price}${time} Book online or call ${businessInfo.phone}.`,
      };
    }
    return { path: '/services', ...STATIC_PAGES['/services'] };
  }

  // Unknown routes are redirected to "/" by the router
  return { path: '/', ...STATIC_PAGES['/'] };
}
