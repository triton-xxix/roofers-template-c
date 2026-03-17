import { useEffect } from 'react';

export function SchemaMarkup() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'PLACEHOLDER_BUSINESS_NAME',
      image: '/images/hero-roofer.jpg',
      '@id': 'PLACEHOLDER_WEBSITE_URL',
      url: 'PLACEHOLDER_WEBSITE_URL',
      telephone: 'PLACEHOLDER_PHONE',
      email: 'PLACEHOLDER_EMAIL',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PLACEHOLDER_STREET_ADDRESS',
        addressLocality: 'PLACEHOLDER_AREA',
        addressRegion: 'PLACEHOLDER_REGION',
        postalCode: 'PLACEHOLDER_POSTCODE',
        addressCountry: 'PLACEHOLDER_COUNTRY',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 'PLACEHOLDER_GEO_LAT',
        longitude: 'PLACEHOLDER_GEO_LNG',
      },
      openingHoursSpecification: 'PLACEHOLDER_OPENING_HOURS',
      priceRange: 'PLACEHOLDER_PRICE_RANGE',
      areaServed: 'PLACEHOLDER_AREAS_SERVED',
      serviceType: [
        'Roof Repairs',
        'New Roof Installation',
        'Flat Roofing',
        'Chimney Repairs',
        'Guttering Services',
        'Emergency Roofing',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 'PLACEHOLDER_RATING',
        reviewCount: 'PLACEHOLDER_REVIEW_COUNT',
        bestRating: '5',
        worstRating: '1',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
