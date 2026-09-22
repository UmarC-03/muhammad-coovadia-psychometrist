/**
 * Centralized SEO & Site Configuration for Muhammad Coovadia Psychometrist
 * 
 * To change the production domain across the entire site and SEO configuration,
 * either set the VITE_SITE_URL environment variable (e.g. in Vercel or .env)
 * or update the default PRODUCTION_DOMAIN constant below.
 */

export const PRODUCTION_DOMAIN = 'https://muhammad-coovadia-psychometrist.vercel.app';

export const SITE_CONFIG = {
  name: 'Muhammad Coovadia Psychometrist',
  legalName: 'Muhammad Coovadia',
  designation: 'Registered Psychometrist',
  hpcsaPMT: '007523',
  practicePR: '0071253',
  slogan: 'Clarity Starts Here',
  defaultTitle: 'Muhammad Coovadia Psychometrist | Norwood, Johannesburg',
  defaultDescription: 'HPCSA Registered Psychometrist (PMT 007523 / PR 0071253) in Norwood, Johannesburg. In-person, paper-based psychometric evaluations for Grade 9 FET subject choices and tertiary career guidance.',
  phone: '063 237 7926',
  phoneRaw: '0632377926',
  phoneIntl: '+27632377926',
  email: 'muhammadcoovadia88@gmail.com',
  address: {
    street: '84 Frances Rd',
    suburb: 'Norwood',
    city: 'Johannesburg',
    province: 'Gauteng',
    postalCode: '2192',
    country: 'ZA',
    full: '84 Frances Rd, Norwood, Johannesburg, 2192',
  },
  geo: {
    latitude: -26.1554,
    longitude: 28.0772,
  },
  openingHours: 'Mo-Fr 08:30-17:00, Sa 09:00-13:00',
  defaultOgImage: '/portrait.jpg',
  defaultLogo: '/assets/logo.png',
  locale: 'en_ZA',
};

/**
 * Returns the resolved canonical base URL.
 * Prefers VITE_SITE_URL if configured, then window.location.origin if available,
 * then falls back to the default production domain.
 */
export function getBaseUrl(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL.replace(/\/$/, '');
  }
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return window.location.origin.replace(/\/$/, '');
  }
  return PRODUCTION_DOMAIN;
}

/**
 * Generates an absolute canonical URL from a pathname.
 * Strips query parameters, trailing slashes, and hash fragments for strict canonicalization.
 */
export function getCanonicalUrl(pathname: string): string {
  const base = getBaseUrl();
  const cleanPath = pathname.split('?')[0].split('#')[0].replace(/\/$/, '');
  return `${base}${cleanPath === '' ? '/' : cleanPath}`;
}

export interface RouteMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType: 'website' | 'article' | 'profile';
  ogImage?: string;
  robots: string;
  breadcrumbs: Array<{ name: string; path: string }>;
}

export const ROUTE_METADATA: Record<string, RouteMetadata> = {
  home: {
    title: 'Muhammad Coovadia Psychometrist | Norwood, Johannesburg',
    description: 'HPCSA Registered Psychometrist (PMT 007523 / PR 0071253) in Norwood, Johannesburg. In-person, paper-based psychometric evaluations for Grade 9 FET subject choices and tertiary career guidance.',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: '/portrait.jpg',
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', path: '/' },
    ],
  },
  about: {
    title: 'About Muhammad Coovadia – Registered Psychometrist | Norwood, Johannesburg',
    description: 'Learn about Muhammad Coovadia, HPCSA Registered Psychometrist (PMT 007523 / PR 0071253) based in Norwood, Johannesburg. Qualifications, statutory scope, and evaluation philosophy.',
    canonicalPath: '/about',
    ogType: 'profile',
    ogImage: '/portrait.jpg',
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About Practitioner', path: '/about' },
    ],
  },
  assessments: {
    title: 'Psychometric Assessment Batteries | Muhammad Coovadia Psychometrist',
    description: 'Standardized, paper-based psychometric assessment batteries in Norwood, Johannesburg for Grade 9 subject choice and tertiary career field selection.',
    canonicalPath: '/assessments',
    ogType: 'website',
    ogImage: '/portrait.jpg',
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Assessment Batteries', path: '/assessments' },
    ],
  },
  'assessment-detail-grade-9': {
    title: 'Grade 9 Subject Choice Assessment | Muhammad Coovadia Psychometrist',
    description: 'Comprehensive psychometric evaluation battery for Grade 9 learners. Guides FET subject stream selection based on cognitive aptitudes and vocational interests in Norwood.',
    canonicalPath: '/assessments/grade-9-subject-choice',
    ogType: 'article',
    ogImage: '/portrait.jpg',
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Assessment Batteries', path: '/assessments' },
      { name: 'Grade 9 Subject Choice', path: '/assessments/grade-9-subject-choice' },
    ],
  },
  'assessment-detail-tertiary': {
    title: 'Tertiary & Career Guidance Assessment | Muhammad Coovadia Psychometrist',
    description: 'Comprehensive psychometric evaluation battery for Grade 11–12 and post-school candidates. Strategic career pathing and tertiary degree alignment in Norwood.',
    canonicalPath: '/assessments/tertiary-field-career-guidance',
    ogType: 'article',
    ogImage: '/portrait.jpg',
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Assessment Batteries', path: '/assessments' },
      { name: 'Tertiary Career Guidance', path: '/assessments/tertiary-field-career-guidance' },
    ],
  },
  contact: {
    title: 'Intake & Scheduling | Muhammad Coovadia Psychometrist',
    description: 'Inquire and schedule in-person psychometric assessments with Muhammad Coovadia in Norwood, Johannesburg. Contact via phone, email, or direct WhatsApp.',
    canonicalPath: '/contact',
    ogType: 'website',
    ogImage: '/portrait.jpg',
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Intake & Scheduling', path: '/contact' },
    ],
  },
  'not-found': {
    title: 'Page Not Found | Muhammad Coovadia Psychometrist',
    description: 'The requested page does not exist on Muhammad Coovadia Psychometrist website.',
    canonicalPath: '/not-found',
    ogType: 'website',
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: '404 Not Found', path: '/not-found' },
    ],
  },
};
