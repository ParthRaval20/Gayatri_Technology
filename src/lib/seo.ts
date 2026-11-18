import type { Metadata } from "next";

export const siteConfig = {
  name: "Gayatri Technology",
  shortName: "Gayatri Tech",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://gayatritechnology.in",
  defaultTitle:
    "Gayatri Technology | Custom Business Software & ERP Rajkot",
  titleTemplate: "%s | Gayatri Technology",
  description:
    "Custom ERP systems, mobile software, and web applications built around your business workflow in Rajkot, Gujarat. 100% owned, zero per-seat fees.",
  keywords: [
    "Gayatri Technology",
    "Custom Software Development Rajkot",
    "Custom ERP Development Gujarat",
    "Business Software India",
    "Web Application Development Rajkot",
    "Manufacturing ERP Software",
    "Inventory & Dispatch Systems",
    "Mobile Business Applications",
    "Next.js Development Company Rajkot",
    "Parth Raval Gayatri Technology",
    "Industrial Software India",
    "B2B Portal Development",
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
    founderLinkedin: {
      handle: "parth-raval",
      url: "https://www.linkedin.com/company/gayatritechnology/",
    },
  },
  contact: {
    telephone: "+91 93284 37392",
    email: "info@gayatritechnology.in",
    streetAddress:
      "1st Floor, Gayatri Technology, Street No. 7, above Gayatri Industries, Panchsheel Wadi, Samrat Industrial Area",
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

export const defaultOpenGraphImages = [
  {
    url: `${siteConfig.url}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: siteConfig.defaultTitle,
    type: "image/png",
  },
  {
    url: `${siteConfig.url}/og-image-square.png`,
    width: 800,
    height: 800,
    alt: `${siteConfig.name} Logo`,
    type: "image/png",
  },
];

export const defaultTwitterImages = [`${siteConfig.url}/twitter-image.png`];

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  authors?: string[];
  openGraphTitle?: string;
  openGraphDescription?: string;
}

/**
 * Standardized metadata builder ensuring uniform canonical tags (self-referencing absolute URLs),
 * Open Graph tags, and high-resolution logo preview images across all subpages.
 */
export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  authors,
  openGraphTitle,
  openGraphDescription,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl =
    normalizedPath === "/" ? siteConfig.url : `${siteConfig.url}${normalizedPath}`;
  const ogTitle = openGraphTitle || title;
  const ogDesc = openGraphDescription || description;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      ...(authors && authors.length > 0 ? { authors } : {}),
      images: defaultOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
      images: defaultTwitterImages,
    },
  };
}

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
          "@id": `${baseUrl}/about#parth-raval`,
          name: "Parth Raval",
          jobTitle: "Founder & Lead Engineer",
          description:
            "Software architect specializing in industrial operations ERP, shop-floor automation, and custom web systems in Gujarat.",
          url: `${baseUrl}/about`,
          sameAs: [
            siteConfig.social.linkedin.url,
          ],
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
    itemListElement: items.map((item, index) => {
      const normalizedPath = item.path.startsWith("/") ? item.path : `/${item.path}`;
      const itemUrl = normalizedPath === "/" ? baseUrl : `${baseUrl}${normalizedPath}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

/**
 * Builds Schema.org FAQPage structured data for AEO snippet extraction
 */
export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Builds Schema.org TechArticle structured data with connected BreadcrumbList & Person author
 */
export interface ArticleSchemaInput {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  keywords?: string[];
}

export function getArticleDetailSchema(article: ArticleSchemaInput) {
  const baseUrl = siteConfig.url;
  const articleUrl = `${baseUrl}/knowledge/${article.slug}`;

  // Convert "May 18, 2026" or similar to ISO format if possible
  const parsedDate = new Date(article.publishedDate);
  const isoDate = !isNaN(parsedDate.getTime())
    ? parsedDate.toISOString()
    : "2026-05-18T00:00:00.000Z";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge",
            item: `${baseUrl}/knowledge`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "TechArticle",
        "@id": `${articleUrl}#article`,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        headline: article.title,
        description: article.excerpt,
        url: articleUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        inLanguage: "en-US",
        articleSection: article.category,
        datePublished: isoDate,
        dateModified: isoDate,
        author: {
          "@type": "Person",
          "@id": `${baseUrl}/about#parth-raval`,
          name: article.author.name,
          jobTitle: article.author.role,
          url: `${baseUrl}/about`,
          worksFor: {
            "@id": `${baseUrl}/#organization`,
          },
        },
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        image: `${baseUrl}/opengraph-image.png`,
      },
    ],
  };
}

/**
 * Builds Schema.org SoftwareApplication and Review structured data for client testimonials.
 * Follows Google Search Central guidelines for Review Snippets and Software Apps.
 */
export function getTestimonialsSchema() {
  const baseUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/portfolio#gayatri-steel-app`,
        name: "Gayatri Steel Mobile Operations Suite",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, Web",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: baseUrl,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "1",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
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
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/portfolio#gayatri-steel-web`,
        name: "Gayatri Steel Group Web Portal",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: baseUrl,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "1",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
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
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/portfolio#brahm-samaj-erp`,
        name: "Gujarat Brahm Samaj Management Suite",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, Web",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: baseUrl,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "1",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
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
        },
      },
    ],
  };
}

/**
 * Builds Schema.org WebApplication & BreadcrumbList for interactive prototype demo pages
 */
export interface DemoDetailSchemaInput {
  slug: string;
  name: string;
  description: string;
  categoryLabel: string;
  applicationCategory?: string;
  features?: string[];
}

export function getDemoDetailSchema({
  slug,
  name,
  description,
  categoryLabel,
  applicationCategory = "BusinessApplication",
  features = [],
}: DemoDetailSchemaInput) {
  const baseUrl = siteConfig.url;
  const demoUrl = `${baseUrl}/demos/${slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${demoUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Live Demos",
            item: `${baseUrl}/demos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: demoUrl,
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": `${demoUrl}#app`,
        name,
        description,
        applicationCategory,
        applicationSubCategory: categoryLabel,
        operatingSystem: "Web (Desktop, Tablet, Mobile)",
        url: demoUrl,
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        creator: {
          "@id": `${baseUrl}/#organization`,
        },
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        featureList: features,
        screenshot: `${baseUrl}/opengraph-image.png`,
      },
    ],
  };
}

/**
 * Builds CollectionPage & ItemList structured data for the Knowledge library
 */
export function getKnowledgeCollectionSchema(
  articles: { slug: string; title: string; excerpt: string; publishedDate: string }[]
) {
  const baseUrl = siteConfig.url;
  const knowledgeUrl = `${baseUrl}/knowledge`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${knowledgeUrl}#page`,
        url: knowledgeUrl,
        name: "Practical Engineering & ERP Guides | Gayatri Technology",
        description:
          "Actionable playbooks on ERP transition, software costs, manufacturing operations, and Excel migration for Indian businesses.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: articles.length,
          itemListElement: articles.map((art, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: art.title,
            description: art.excerpt,
            url: `${knowledgeUrl}/${art.slug}`,
          })),
        },
      },
    ],
  };
}

export const portfolioFaqs = [
  {
    q: "How does Gayatri Technology guarantee 100% source code ownership?",
    a: "Every custom ERP and business system we build is transferred with 100% source code and database ownership upon final milestone payment. We deploy directly to your designated cloud (AWS, Hetzner, DigitalOcean) or on-premise hardware with zero proprietary lock-in.",
  },
  {
    q: "Can your custom ERP software operate offline in factory stockyards?",
    a: "Yes. For clients like Gayatri Steel and Gujarat Brahm Samaj, we architect local SQLite and edge-caching databases. Critical workflows—such as theoretical weight calculations and photo ID generation—operate without internet downtime.",
  },
  {
    q: "How do your custom systems integrate with our existing Tally accounting?",
    a: "We build tailored operational front-ends that manage floor dispatches, stock allotments, and delivery challans while exporting structured XML or CSV ledgers directly into Tally for GST filing and CA audit.",
  },
  {
    q: "What is the typical deployment timeline for a custom manufacturing ERP?",
    a: "Standard operational modules deploy in 4 to 8 weeks through agile two-week milestone sprints. High-friction workflows (e.g. digital delivery challans or piece inventory) go live first so your floor sees immediate ROI.",
  },
];

