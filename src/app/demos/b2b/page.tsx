import type { Metadata } from "next";
import B2BDemoClient from "./B2BDemoClient";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, getDemoDetailSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "B2B Wholesale Portal & Merchandise Demo | Gayatri Tech",
  description:
    "Test live B2B wholesale merchandise portal with automated MOQ volume tier discounts, real-time custom branding preview, and WhatsApp RFQ.",
  path: "/demos/b2b",
  openGraphTitle: "B2B Wholesale Portal & Swag Prototype | Gayatri Technology",
  openGraphDescription:
    "Production-grade B2B e-commerce prototype with real-time MOQ discount curves, live custom branding visualization, and automated WhatsApp RFQ dispatches.",
});

export default function B2BDemoPage() {
  const demoSchema = getDemoDetailSchema({
    slug: "b2b",
    name: "BrandSurge Corporate Swag & B2B Portal Prototype",
    description:
      "Full-stack B2B wholesale e-commerce portal with dynamic tiered bulk pricing, custom branding mockup generators, and instant WhatsApp quotation triggers.",
    categoryLabel: "B2B E-Commerce & Corporate Swag",
    applicationCategory: "BusinessApplication",
    features: [
      "Dynamic volume-tier bulk pricing curves",
      "Live Pantone & laser-engraving logo preview",
      "Automated WhatsApp RFQ order generator",
      "Zero per-seat software licensing taxes",
    ],
  });

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.url}/demos/b2b#catalog`,
    name: "Corporate Swag & Promotional Merchandise Catalog",
    url: `${siteConfig.url}/demos/b2b`,
  };

  return (
    <>
      <JsonLd data={demoSchema} id="b2b-demo-schema" />
      <JsonLd data={catalogSchema} id="b2b-catalog-schema" />
      <B2BDemoClient />
    </>
  );
}
