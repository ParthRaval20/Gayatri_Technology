import type { Metadata } from "next";
import RestaurantDemoClient from "./RestaurantDemoClient";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, getDemoDetailSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Omakase Restaurant Reservation Demo | Gayatri Tech",
  description:
    "Test a live Japanese dining reservation prototype with real-time counter seating locks, multi-course menu ordering, and WhatsApp lead alerts.",
  path: "/demos/restaurant",
  openGraphTitle: "Omakase Restaurant Reservation Prototype | Gayatri Technology",
  openGraphDescription:
    "Functional Japanese dining prototype with counter seating reservation engine, seasonal menu ordering, and WhatsApp booking notifications.",
});

export default function RestaurantDemoPage() {
  const demoSchema = getDemoDetailSchema({
    slug: "restaurant",
    name: "SHIBUI (澁) Modern Edomae Dining Prototype",
    description:
      "Interactive Next.js dining reservation and multi-course menu ordering prototype with real-time counter seating allocation and WhatsApp lead dispatch.",
    categoryLabel: "Hospitality & Dining",
    applicationCategory: "BusinessApplication",
    features: [
      "Real-time counter omakase seating reservation",
      "Micro-seasonal multi-course menu basket",
      "Direct WhatsApp booking webhook alerts",
      "Sub-400ms Next.js Edge execution",
    ],
  });

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/demos/restaurant#restaurant`,
    name: "SHIBUI (澁) Modern Edomae",
    servesCuisine: "Japanese, Omakase, Sushi",
    priceRange: "₹₹₹₹",
    url: `${siteConfig.url}/demos/restaurant`,
    menu: `${siteConfig.url}/demos/restaurant#selection`,
    acceptsReservations: "True",
  };

  return (
    <>
      <JsonLd data={demoSchema} id="restaurant-demo-schema" />
      <JsonLd data={restaurantSchema} id="restaurant-entity-schema" />
      <RestaurantDemoClient />
    </>
  );
}
