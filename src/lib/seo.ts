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
          url: `${baseUrl}/gt-logo-full.png`,
          contentUrl: `${baseUrl}/gt-logo-full.png`,
          width: "1024",
          height: "1024",
          caption: siteConfig.name,
        },
        image: `${baseUrl}/opengraph-image.png`,
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "3",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Kaushik Patel",
              jobTitle: "Operations Partner & Dispatch Head",
              worksFor: {
                "@type": "Organization",
                name: "Gayatri Steel Group",
              },
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Our supervisors work on the stockyard floor with lorries waiting outside. The app calculates exact weights the moment diameter and length are selected, and delivery challans are done on phone in 20-30 seconds. Trucks don't wait in line anymore.",
            itemReviewed: {
              "@type": "SoftwareApplication",
              name: "Gayatri Steel Mobile Operations Suite",
              applicationCategory: "BusinessApplication",
            },
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Vaibhav",
              jobTitle: "Commercial & Sales Lead",
              worksFor: {
                "@type": "Organization",
                name: "Gayatri Steel Group",
              },
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "All 28+ tool steel grades are neatly listed with DIN and AISI standards. Now clients browse chemical specs on their phones and send exact inquiries on WhatsApp with one click. Saves us hours of calls every day.",
            itemReviewed: {
              "@type": "WebApplication",
              name: "Gayatri Steel Group Web Portal",
              applicationCategory: "BusinessApplication",
            },
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Vishnu",
              jobTitle: "Trustee & General Secretary",
              worksFor: {
                "@type": "Organization",
                name: "Shree Samast Gujarat Brahm Samaj",
              },
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Entering a member, recording the ₹500 fee receipt, and printing an official photo ID card happens with one click in clean Gujarati. It runs right on our Idar office computer with zero monthly software fees.",
            itemReviewed: {
              "@type": "SoftwareApplication",
              name: "Gujarat Brahm Samaj Management Suite",
              applicationCategory: "BusinessApplication",
            },
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
        image: `${baseUrl}/opengraph-image.png`,
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

/**
 * Builds Schema.org ItemList for Client Testimonials
 */
export function getTestimonialsSchema() {
  const baseUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Verified Client Reviews - Gayatri Technology",
    description:
      "Authentic testimonials and operational reviews from business partners and clients of Gayatri Technology.",
    itemListElement: [
      {
        "@type": "Review",
        position: 1,
        author: {
          "@type": "Person",
          name: "Kaushik Patel",
          jobTitle: "Operations Partner & Dispatch Head",
          worksFor: {
            "@type": "Organization",
            name: "Gayatri Steel Group",
          },
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Our supervisors work on the stockyard floor with lorries waiting outside. The app calculates exact weights the moment diameter and length are selected, and delivery challans are done on phone in 20-30 seconds. Trucks don't wait in line anymore.",
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Gayatri Steel Mobile Operations Suite",
          applicationCategory: "BusinessApplication",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: baseUrl,
          },
        },
      },
      {
        "@type": "Review",
        position: 2,
        author: {
          "@type": "Person",
          name: "Vaibhav",
          jobTitle: "Commercial & Sales Lead",
          worksFor: {
            "@type": "Organization",
            name: "Gayatri Steel Group",
          },
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "All 28+ tool steel grades are neatly listed with DIN and AISI standards. Now clients browse chemical specs on their phones and send exact inquiries on WhatsApp with one click. Saves us hours of calls every day.",
        itemReviewed: {
          "@type": "WebApplication",
          name: "Gayatri Steel Group Web Portal",
          applicationCategory: "BusinessApplication",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: baseUrl,
          },
        },
      },
      {
        "@type": "Review",
        position: 3,
        author: {
          "@type": "Person",
          name: "Vishnu",
          jobTitle: "Trustee & General Secretary",
          worksFor: {
            "@type": "Organization",
            name: "Shree Samast Gujarat Brahm Samaj",
          },
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Entering a member, recording the ₹500 fee receipt, and printing an official photo ID card happens with one click in clean Gujarati. It runs right on our Idar office computer with zero monthly software fees.",
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Gujarat Brahm Samaj Management Suite",
          applicationCategory: "BusinessApplication",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: baseUrl,
          },
        },
      },
    ],
  };
}

