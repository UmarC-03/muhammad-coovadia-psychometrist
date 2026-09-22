import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  SITE_CONFIG, 
  ROUTE_METADATA, 
  getBaseUrl, 
  getCanonicalUrl, 
  RouteMetadata 
} from '../config/siteConfig';

function setOrCreateMeta(nameOrProp: { name?: string; property?: string }, content: string) {
  const selector = nameOrProp.name 
    ? `meta[name="${nameOrProp.name}"]` 
    : `meta[property="${nameOrProp.property}"]`;
  
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    if (nameOrProp.name) {
      el.setAttribute('name', nameOrProp.name);
    } else if (nameOrProp.property) {
      el.setAttribute('property', nameOrProp.property);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export const SEOHead: React.FC = () => {
  const { currentRoute, assessmentId, path } = useNavigation();

  // Resolve active metadata key
  let metaKey = currentRoute as string;
  if (currentRoute === 'assessment-detail') {
    if (assessmentId === 'grade-9-subject-choice') {
      metaKey = 'assessment-detail-grade-9';
    } else {
      metaKey = 'assessment-detail-tertiary';
    }
  }

  const meta: RouteMetadata = ROUTE_METADATA[metaKey] || ROUTE_METADATA.home;
  const canonicalUrl = getCanonicalUrl(meta.canonicalPath);
  const baseUrl = getBaseUrl();
  const ogImageUrl = meta.ogImage ? `${baseUrl}${meta.ogImage}` : `${baseUrl}${SITE_CONFIG.defaultOgImage}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = meta.title;

    // 2. Core Meta Description & Robots
    setOrCreateMeta({ name: 'description' }, meta.description);
    setOrCreateMeta({ name: 'robots' }, meta.robots);
    setOrCreateLink('canonical', canonicalUrl);

    // 3. Open Graph Tags
    setOrCreateMeta({ property: 'og:title' }, meta.title);
    setOrCreateMeta({ property: 'og:description' }, meta.description);
    setOrCreateMeta({ property: 'og:url' }, canonicalUrl);
    setOrCreateMeta({ property: 'og:type' }, meta.ogType);
    setOrCreateMeta({ property: 'og:site_name' }, SITE_CONFIG.name);
    setOrCreateMeta({ property: 'og:locale' }, SITE_CONFIG.locale);
    setOrCreateMeta({ property: 'og:image' }, ogImageUrl);
    setOrCreateMeta({ property: 'og:image:alt' }, `${SITE_CONFIG.legalName} – ${SITE_CONFIG.designation} in Norwood, Johannesburg`);

    // 4. Twitter / X Card Tags
    setOrCreateMeta({ name: 'twitter:card' }, 'summary_large_image');
    setOrCreateMeta({ name: 'twitter:title' }, meta.title);
    setOrCreateMeta({ name: 'twitter:description' }, meta.description);
    setOrCreateMeta({ name: 'twitter:image' }, ogImageUrl);

    // 5. Schema.org JSON-LD Structured Data
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        // Professional Service Entity
        {
          '@type': 'ProfessionalService',
          '@id': `${baseUrl}/#practice`,
          name: SITE_CONFIG.name,
          legalName: SITE_CONFIG.legalName,
          url: `${baseUrl}/`,
          slogan: SITE_CONFIG.slogan,
          description: SITE_CONFIG.defaultDescription,
          telephone: SITE_CONFIG.phoneIntl,
          email: SITE_CONFIG.email,
          image: `${baseUrl}${SITE_CONFIG.defaultOgImage}`,
          priceRange: 'Private Practice Rates (Itemised medical aid invoice provided)',
          openingHours: SITE_CONFIG.openingHours,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.address.street,
            addressLocality: SITE_CONFIG.address.suburb,
            addressRegion: SITE_CONFIG.address.city,
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
            '@id': `${baseUrl}/#practitioner`,
            name: SITE_CONFIG.legalName,
            jobTitle: SITE_CONFIG.designation,
            url: `${baseUrl}/about`,
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'BA (UJ)',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'BA HONS PSYCH (UJ)',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'PSYCHOMETRY (UJ)',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                name: `HPCSA PMT ${SITE_CONFIG.hpcsaPMT}`,
              },
              {
                '@type': 'EducationalOccupationalCredential',
                name: `Practice PR ${SITE_CONFIG.practicePR}`,
              },
            ],
          },
        },
        // WebSite Entity
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: `${baseUrl}/`,
          name: SITE_CONFIG.name,
          description: SITE_CONFIG.defaultDescription,
          inLanguage: 'en-ZA',
          publisher: {
            '@id': `${baseUrl}/#practice`,
          },
        },
        // WebPage Entity for current view
        {
          '@type': currentRoute === 'about' ? 'AboutPage' : currentRoute === 'contact' ? 'ContactPage' : 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: meta.title,
          description: meta.description,
          isPartOf: {
            '@id': `${baseUrl}/#website`,
          },
          about: {
            '@id': `${baseUrl}/#practice`,
          },
          inLanguage: 'en-ZA',
        },
        // BreadcrumbList Entity
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumbs`,
          itemListElement: meta.breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: getCanonicalUrl(crumb.path),
          })),
        },
      ],
    };

    let scriptTag = document.getElementById('dynamic-schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [meta, canonicalUrl, baseUrl, ogImageUrl, currentRoute]);

  return null;
};
