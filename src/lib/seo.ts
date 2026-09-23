export const siteConfig = {
  name: "Gayatri Technology",
  shortName: "Gayatri Tech",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://gayatritechnology.in",
  defaultTitle:
    "Gayatri Technology | Custom Web Development & Enterprise Software Solutions",
  titleTemplate: "%s | Gayatri Technology",
  description:
    "Bespoke web development, enterprise web applications, ERP architectures, and scalable cloud systems tailored to your business goals. Zero templates, pure engineering excellence.",
  keywords: [
    "Gayatri Technology",
    "Custom Web Development",
    "Enterprise Software Solutions",
    "Web Application Development",
    "ERP Software Development Rajkot",
    "Next.js Development Company",
    "Bespoke SaaS Development",
    "E-Commerce Solutions Gujarat",
    "Full-Stack Web Architecture",
    "Cloud Software Engineering",
    "UI/UX Design India",
    "Industrial Software Solutions",
  ],
  authors: [{ name: "Gayatri Technology", url: "https://gayatritechnology.in" }],
  creator: "Gayatri Technology",
  publisher: "Gayatri Technology",
  themeColor: "#47C56E",
  contact: {
    telephone: "+91 93284 37392",
    email: "info@gayatritechnology.in",
    streetAddress: "102 Dev Palace, Ankur Nagar",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360004",
    addressCountry: "IN",
    geo: {
      latitude: "22.3039",
      longitude: "70.8022",
    },
    openingHours: "Mo-Sa 09:00-19:00",
  },
  services: [
    {
      name: "Custom Web Development",
      description:
        "Bespoke web platforms engineered with zero generic templates, enterprise architectures, and lightning performance.",
    },
    {
      name: "Enterprise Software & ERP Systems",
      description:
        "Industrial inventory management, dispatch challan generation, multi-company accounting, and custom ERP software.",
    },
    {
      name: "Modern E-Commerce Solutions",
      description:
        "Conversion-focused, high-volume digital storefronts with integrated payment gateways and real-time inventory synchronization.",
    },
    {
      name: "Cloud Architecture & API Integrations",
      description:
        "Resilient microservices, RESTful and GraphQL APIs, third-party ERP connectors, and secure serverless hosting.",
    },
    {
      name: "UI/UX & Product Design",
      description:
        "Research-driven user interfaces, responsive design systems, accessibility-first design, and seamless cross-platform user experiences.",
    },
  ],
};

/**
 * Builds standard Schema.org Organization and LocalBusiness structured data
 */
export function getOrganizationSchema() {
  const baseUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${baseUrl}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.name,
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#logo`,
          url: `${baseUrl}/gt-logo.png`,
          caption: siteConfig.name,
        },
        image: `${baseUrl}/gt-logo.png`,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.telephone,
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.streetAddress,
          addressLocality: siteConfig.contact.addressLocality,
          addressRegion: siteConfig.contact.addressRegion,
          postalCode: siteConfig.contact.postalCode,
          addressCountry: siteConfig.contact.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.contact.geo.latitude,
          longitude: siteConfig.contact.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "AdministrativeArea",
            name: "Worldwide",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Gayatri Technology Core Engineering Services",
          itemListElement: siteConfig.services.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              position: index + 1,
              name: service.name,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };
}

/**
 * Builds Schema.org BreadcrumbList for subpages
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  const baseUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}
