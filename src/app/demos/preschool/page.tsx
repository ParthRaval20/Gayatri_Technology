import type { Metadata } from "next";
import PreschoolDemoClient from "./PreschoolDemoClient";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, getDemoDetailSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Preschool Admissions & Tour Booking Demo | Gayatri Tech",
  description:
    "Test an interactive preschool website prototype with parent campus tour booking, tuition calculator, and automated WhatsApp inquiry alerts.",
  path: "/demos/preschool",
  openGraphTitle: "Preschool Admissions & Campus Tour Prototype | Gayatri Technology",
  openGraphDescription:
    "Interactive early education website prototype featuring scheduled parent campus tour reservations, age-tier program breakdown, and instant WhatsApp inquiry alerts.",
});

export default function PreschoolDemoPage() {
  const demoSchema = getDemoDetailSchema({
    slug: "preschool",
    name: "Bloomfield Early Learning Academy Prototype",
    description:
      "Interactive preschool and early education web portal featuring parent campus tour reservations, age-tier curriculum discovery, and WhatsApp inquiry routing.",
    categoryLabel: "Education & Early Childhood",
    applicationCategory: "EducationalApplication",
    features: [
      "Parent campus discovery tour booking calendar",
      "Age-tier curriculum breakdown (Toddler to Kindergarten)",
      "Instant WhatsApp admissions inquiry alerts",
      "Mobile-friendly parent consultation flow",
    ],
  });

  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/demos/preschool#school`,
    name: "Bloomfield Early Learning Academy",
    description:
      "Reggio Emilia-inspired early childhood education and discovery preschool academy prototype.",
    url: `${siteConfig.url}/demos/preschool`,
  };

  return (
    <>
      <JsonLd data={demoSchema} id="preschool-demo-schema" />
      <JsonLd data={schoolSchema} id="preschool-entity-schema" />
      <PreschoolDemoClient />
    </>
  );
}
