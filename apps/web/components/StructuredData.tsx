export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PayPlan',
    url: 'https://www.payplan.com',
    logo: 'https://www.payplan.com/logo.png',
    description: 'Free, confidential debt advice. Funded by creditors, regulated by the FCA.',
    telephone: '08003161833',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kempton House, Dysart Road',
      addressLocality: 'Grantham',
      addressRegion: 'Lincolnshire',
      postalCode: 'NG31 7LE',
      addressCountry: 'GB',
    },
    sameAs: [
      'https://www.linkedin.com/company/payplan',
      'https://www.facebook.com/PayPlanUK',
      'https://www.instagram.com/payplanuk',
      'https://www.youtube.com/@PayPlan',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqSchema({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
