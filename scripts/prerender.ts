/**
 * Static Site Generation (SSG) Pre-rendering Script for Muhammad Coovadia Psychometrist
 * 
 * Generates 100% semantic static HTML pages for all routes during 'npm run build'.
 * This ensures that:
 * 1. Simple HTML crawlers, SEO validators (SEObility, Screaming Frog), and AI agents
 *    (ChatGPT, Claude, Perplexity) see full text, headings, structured data, and links immediately.
 * 2. Vercel serves pure static HTML with 200 OK directly for all paths (/about, /assessments, etc.).
 * 3. Client-side React SPA functionality (navigation, forms, active state) remains 100% intact.
 */

import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { NavigationProvider } from '../src/context/NavigationContext';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { HomeView } from '../src/views/HomeView';
import { AboutView } from '../src/views/AboutView';
import { AssessmentsCatalogView } from '../src/views/AssessmentsCatalogView';
import { AssessmentDetailView } from '../src/views/AssessmentDetailView';
import { ContactBookingView } from '../src/views/ContactBookingView';

import { 
  SITE_CONFIG, 
  ROUTE_METADATA, 
  PRODUCTION_DOMAIN,
  RouteMetadata 
} from '../src/config/siteConfig';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

interface RouteToRender {
  path: string;
  metaKey: string;
  component: React.ComponentType<any>;
  param?: string;
  outputPath: string;
}

const ROUTES_TO_RENDER: RouteToRender[] = [
  {
    path: '/',
    metaKey: 'home',
    component: HomeView,
    outputPath: path.join(DIST_DIR, 'index.html'),
  },
  {
    path: '/about',
    metaKey: 'about',
    component: AboutView,
    outputPath: path.join(DIST_DIR, 'about', 'index.html'),
  },
  {
    path: '/assessments',
    metaKey: 'assessments',
    component: AssessmentsCatalogView,
    outputPath: path.join(DIST_DIR, 'assessments', 'index.html'),
  },
  {
    path: '/assessments/grade-9-subject-choice',
    metaKey: 'assessment-detail-grade-9',
    component: AssessmentDetailView,
    param: 'grade-9-subject-choice',
    outputPath: path.join(DIST_DIR, 'assessments', 'grade-9-subject-choice', 'index.html'),
  },
  {
    path: '/assessments/tertiary-field-career-guidance',
    metaKey: 'assessment-detail-tertiary',
    component: AssessmentDetailView,
    param: 'tertiary-field-career-guidance',
    outputPath: path.join(DIST_DIR, 'assessments', 'tertiary-field-career-guidance', 'index.html'),
  },
  {
    path: '/contact',
    metaKey: 'contact',
    component: ContactBookingView,
    outputPath: path.join(DIST_DIR, 'contact', 'index.html'),
  },
];

function generateSchemaJsonLd(meta: RouteMetadata, canonicalUrl: string): string {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${PRODUCTION_DOMAIN}/#practice`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: `${PRODUCTION_DOMAIN}/`,
        slogan: SITE_CONFIG.slogan,
        description: SITE_CONFIG.defaultDescription,
        telephone: SITE_CONFIG.phoneIntl,
        email: SITE_CONFIG.email,
        image: `${PRODUCTION_DOMAIN}${SITE_CONFIG.defaultOgImage}`,
        priceRange: 'Private Practice Rates (Itemised medical aid invoice provided)',
        openingHours: SITE_CONFIG.openingHours,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.suburb,
          addressRegion: SITE_CONFIG.address.province,
          postalCode: SITE_CONFIG.address.postalCode,
          addressCountry: SITE_CONFIG.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE_CONFIG.geo.latitude,
          longitude: SITE_CONFIG.geo.longitude,
        },
        employee: {
          '@type': 'Person',
          '@id': `${PRODUCTION_DOMAIN}/#practitioner`,
          name: SITE_CONFIG.legalName,
          jobTitle: SITE_CONFIG.designation,
          url: `${PRODUCTION_DOMAIN}/about`,
          hasCredential: [
            { '@type': 'EducationalOccupationalCredential', name: 'BA (UJ)' },
            { '@type': 'EducationalOccupationalCredential', name: 'BA HONS PSYCH (UJ)' },
            { '@type': 'EducationalOccupationalCredential', name: 'PSYCHOMETRY (UJ)' },
            { '@type': 'EducationalOccupationalCredential', name: `HPCSA ${SITE_CONFIG.hpcsaPMT}` },
            { '@type': 'EducationalOccupationalCredential', name: `Practice PR ${SITE_CONFIG.practicePR}` },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${PRODUCTION_DOMAIN}/#website`,
        url: `${PRODUCTION_DOMAIN}/`,
        name: SITE_CONFIG.name,
        publisher: { '@id': `${PRODUCTION_DOMAIN}/#practice` },
        inLanguage: 'en-ZA',
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': `${PRODUCTION_DOMAIN}/#website` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: meta.breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.name,
            item: `${PRODUCTION_DOMAIN}${crumb.path === '/' ? '' : crumb.path}`,
          })),
        },
      },
    ],
  };

  return JSON.stringify(baseSchema, null, 2);
}

function renderRouteToHtml(route: RouteToRender): string {
  let mainContent: React.ReactNode;
  if (route.param) {
    mainContent = React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: '/assessments/:id',
        element: React.createElement(route.component),
      })
    );
  } else {
    mainContent = React.createElement(route.component);
  }

  const appElement = React.createElement(
    MemoryRouter,
    { initialEntries: [route.path] },
    React.createElement(
      NavigationProvider,
      null,
      React.createElement(
        'div',
        { className: 'min-h-screen flex flex-col bg-[#ededed] text-[#2b2b2b]' },
        // Skip link for accessibility
        React.createElement(
          'a',
          {
            href: '#main-content',
            className: 'sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0c5253] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-hidden',
          },
          'Skip to main content'
        ),
        React.createElement(Header),
        React.createElement(
          'main',
          { id: 'main-content', className: 'grow' },
          mainContent
        ),
        React.createElement(Footer)
      )
    )
  );

  return renderToString(appElement);
}

async function runPrerender() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`[prerender] Error: Template file not found at ${TEMPLATE_PATH}. Run 'vite build' first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  console.log(`[prerender] Starting static HTML generation for ${ROUTES_TO_RENDER.length} routes...`);

  for (const route of ROUTES_TO_RENDER) {
    const meta: RouteMetadata = ROUTE_METADATA[route.metaKey] || ROUTE_METADATA.home;
    const canonicalUrl = `${PRODUCTION_DOMAIN}${route.path === '/' ? '/' : route.path}`;
    const ogImageUrl = `${PRODUCTION_DOMAIN}${meta.ogImage || SITE_CONFIG.defaultOgImage}`;

    // 1. Render React tree to static HTML string
    const renderedAppMarkup = renderRouteToHtml(route);

    // 2. Build customized HTML document
    let pageHtml = baseHtml;

    // Update <title>
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/s,
      `<title>${meta.title}</title>`
    );

    // Update canonical link
    pageHtml = pageHtml.replace(
      /<link rel="canonical" href=".*?" \/>/s,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Update Meta Description
    pageHtml = pageHtml.replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />`
    );

    // Update Robots
    pageHtml = pageHtml.replace(
      /<meta name="robots" content=".*?" \/>/s,
      `<meta name="robots" content="${meta.robots}" />`
    );

    // Update OpenGraph tags
    pageHtml = pageHtml.replace(
      /<meta property="og:title" content=".*?" \/>/s,
      `<meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:description" content=".*?" \/>/s,
      `<meta property="og:description" content="${meta.description.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:url" content=".*?" \/>/s,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:type" content=".*?" \/>/s,
      `<meta property="og:type" content="${meta.ogType}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:image" content=".*?" \/>/s,
      `<meta property="og:image" content="${ogImageUrl}" />`
    );

    // Update Twitter tags
    pageHtml = pageHtml.replace(
      /<meta name="twitter:title" content=".*?" \/>/s,
      `<meta name="twitter:title" content="${meta.title.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:description" content=".*?" \/>/s,
      `<meta name="twitter:description" content="${meta.description.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:image" content=".*?" \/>/s,
      `<meta name="twitter:image" content="${ogImageUrl}" />`
    );

    // Replace Schema.org JSON-LD
    const schemaJson = generateSchemaJsonLd(meta, canonicalUrl);
    pageHtml = pageHtml.replace(
      /<script id="dynamic-schema-jsonld" type="application\/ld\+json">.*?<\/script>/s,
      `<script id="dynamic-schema-jsonld" type="application/ld+json">\n${schemaJson}\n    </script>`
    );

    // Replace <div id="root"> content with full pre-rendered HTML
    pageHtml = pageHtml.replace(
      /<div id="root">.*?<\/div>\s*<!-- Non-JavaScript Fallback/s,
      `<div id="root">${renderedAppMarkup}</div>\n\n    <!-- Non-JavaScript Fallback`
    );

    // Ensure target directory exists
    const targetDir = path.dirname(route.outputPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Write pristine pre-rendered file
    fs.writeFileSync(route.outputPath, pageHtml, 'utf-8');
    console.log(`[prerender] ✓ Successfully generated: ${path.relative(process.cwd(), route.outputPath)} (${renderedAppMarkup.length} chars)`);
  }

  console.log('[prerender] All pages pre-rendered successfully! 100% full text visible to crawlers & AI agents.');
}

runPrerender().catch((err) => {
  console.error('[prerender] Fatal error during static rendering:', err);
  process.exit(1);
});
