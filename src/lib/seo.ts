export const siteConfig = {
  name: "Gayatri Technology",
  shortName: "Gayatri Tech",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://gayatritechnology.in",
  defaultTitle:
    "Gayatri Technology | Software Built Around How Your Business Works",
  titleTemplate: "%s | Gayatri Technology",
  description:
    "We build custom websites, ERP systems, business applications and digital products for growing businesses. Instead of forcing your workflow into generic software, we build around the way your team actually works.",
  keywords: [
    "Gayatri Technology",
    "Custom Software Development Rajkot",
    "Custom ERP Development Gujarat",
    "Business Software India",
    "Web Application Development Rajkot",
    "Manufacturing ERP Software",
    "Inventory & Dispatch Systems",
    "Mobile Business Applications",
    "Next.js Development Company",
    "Parth Raval Gayatri Technology",
  ],
  authors: [{ name: "Parth Raval", url: "https://gayatritechnology.in/about" }],
  creator: "Gayatri Technology",
  publisher: "Gayatri Technology",
  themeColor: "#47C56E",
  whatsappNumber: "+919328437392",
  whatsappUrl: "https://wa.me/919328437392?text=Hello%20Gayatri%20Technology%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20our%20business.",
  social: {
    instagram: {
      handle: "gayatri.technology",
      url: "https://www.instagram.com/gayatri.technology",
    },
    linkedin: {
      handle: "gayatritechnology",
      url: "https://www.linkedin.com/company/gayatritechnology/",
    },
  },
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
      name: "Custom Business Software",
      description:
        "Tailored web and internal applications designed to replace scattered spreadsheets and coordinate day-to-day business operations.",
    },
    {
      name: "ERP & Operations Systems",
      description:
        "Real-time inventory tracking, production workflows, delivery challans, and multi-branch management built around your actual workflow.",
    },
    {
      name: "Websites & Web Applications",
      description:
        "Fast, modern, and search-optimized company websites and interactive portals that clearly explain what you do and generate inquiries.",
    },
    {
      name: "Mobile Applications",
      description:
        "Practical mobile apps for field staff, warehouse supervisors, and business owners who need to track inventory and work on the move.",
    },
    {
      name: "E-Commerce & B2B Portals",
      description:
        "Wholesale ordering catalogs, customer ledgers, payment tracking, and digital quotation systems.",
    },
    {
      name: "Automation & Workflow Tools",
      description:
        "Smart integrations connecting WhatsApp, inventory, customer inquiries, and internal data to cut repetitive manual work.",
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
          url: `${baseUrl}/icon-512.png`,
          contentUrl: `${baseUrl}/icon-512.png`,
          width: "512",
          height: "512",
          caption: siteConfig.name,
        },
        image: `${baseUrl}/icon-512.png`,
        description: siteConfig.description,
        sameAs: [
          siteConfig.social.instagram.url,
          siteConfig.social.linkedin.url,
        ],
        founder: {
          "@type": "Person",
          name: "Parth Raval",
          jobTitle: "Founder & Lead Engineer",
        },
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.telephone,
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
            "@type": "AdministrativeArea",
            name: "Gujarat",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Gayatri Technology Core Software Services",
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
        alternateName: ["Gayatri Tech", "Gayatri Technology Rajkot"],
        description: siteConfig.description,
        image: `${baseUrl}/icon-512.png`,
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
