import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { siteConfig, getBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | Custom Software Studio in Rajkot, Gujarat",
  description:
    "Contact Parth Raval and the Gayatri Technology software studio in Rajkot, Gujarat. Discuss your operational bottlenecks, custom ERP, or web apps.",
  path: "/contact",
  openGraphTitle: "Contact Gayatri Technology | Software Built Around Your Workflow",
  openGraphDescription:
    "Tell us what you're trying to build or what isn't working today. Direct conversation with engineers who understand business problems.",
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteConfig.url}/contact#webpage`,
        url: `${siteConfig.url}/contact`,
        name: "Contact Gayatri Technology",
        description:
          "Contact Parth Raval and the software engineering studio in Rajkot to discuss custom ERPs, business tools, and operational software.",
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-white overflow-x-hidden md:overflow-x-clip w-full">
      <JsonLd data={breadcrumbSchema} id="contact-breadcrumb-schema" />
      <JsonLd data={contactPageSchema} id="contact-page-schema" />
      <Navbar />

      <main className="flex-1 pt-4 sm:pt-8">
        {/* Direct Form & Timeline Sidebar without redundant top hero */}
        <ContactSection isPageHeading={true} />
      </main>

      <Footer />
    </div>
  );
}
