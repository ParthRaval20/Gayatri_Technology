import type { Metadata } from "next";
import SalonDemoClient from "./SalonDemoClient";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, getDemoDetailSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hair Salon Appointment Booking Demo | Gayatri Tech",
  description:
    "Experience a live beauty salon booking workflow with stylist schedule locking, service add-on selection, and instant WhatsApp appointment alerts.",
  path: "/demos/salon",
  openGraphTitle: "Hair Salon Appointment Booking Prototype | Gayatri Technology",
  openGraphDescription:
    "Interactive beauty salon web prototype featuring live stylist schedule locking, treatment customization, and automated WhatsApp booking confirmations.",
});

export default function SalonDemoPage() {
  const demoSchema = getDemoDetailSchema({
    slug: "salon",
    name: "MAISON ÉLAN Luxury Hair Studio Prototype",
    description:
      "Interactive beauty salon appointment scheduling web application featuring master stylist locking, treatment selection, and instant WhatsApp confirmations.",
    categoryLabel: "Personal Care & Beauty",
    applicationCategory: "BusinessApplication",
    features: [
      "Master stylist time slot booking engine",
      "Custom treatment & luxury add-on selection",
      "Automated WhatsApp appointment confirmations",
      "Mobile-optimized client booking experience",
    ],
  });

  const salonSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.url}/demos/salon#salon`,
    name: "MAISON ÉLAN Luxury Hair & Color Studio",
    priceRange: "₹₹₹",
    url: `${siteConfig.url}/demos/salon`,
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Cards, Cash",
  };

  return (
    <>
      <JsonLd data={demoSchema} id="salon-demo-schema" />
      <JsonLd data={salonSchema} id="salon-entity-schema" />
      <SalonDemoClient />
    </>
  );
}
