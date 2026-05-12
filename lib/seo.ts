import type { Metadata } from 'next';

export const SITE = {
  name: 'TapCraft Studio',
  shortName: 'TapCraft',
  url: 'https://tapcraft.shop',
  domain: 'tapcraft.shop',
  description: "Melbourne's only integrated 3D-printing + NFC studio. Custom NFC keychains, lanyards, badges, and tags---made in Brunswick.",
  locale: 'en_AU',
  region: 'AU',
  city: 'Naarm / Melbourne',
  email: 'hello@tapcraftstudio.com',
  twitter: '@tapcraftstudio',
  address: {
    street: '123 Sydney Rd',
    suburb: 'Brunswick',
    state: 'VIC',
    postcode: '3056',
    country: 'AU',
  },
  founder: ['Samridh Limbu', 'Nikhil Gupta'],
  founded: '2023',
};

export function buildMetadata(input: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE.url}${input.path ?? ''}`;
  const ogImage = input.ogImage ?? `${SITE.url}/og-image.jpg`;
  return {
    title: input.title,
    description: input.description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE.name,
      type: 'website',
      locale: SITE.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [ogImage],
    },
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo/tapcraft-icon.png`,
    email: SITE.email,
    foundingDate: SITE.founded,
    founders: SITE.founder.map((name) => ({ '@type': 'Person', name })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    sameAs: [
      'https://www.instagram.com/tapcraftstudio',
      'https://www.linkedin.com/company/tapcraft-studio',
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}/logo/tapcraft-icon.png`,
    url: SITE.url,
    telephone: '',
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: -37.7681, longitude: 144.9602 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30',
      },
    ],
    areaServed: { '@type': 'Country', name: 'Australia' },
  };
}

export function serviceJsonLd(input: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    areaServed: { '@type': 'Country', name: 'Australia' },
  };
}
