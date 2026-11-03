import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { getBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | Have a Business Problem Software Could Solve?",
  description:
    "Get in touch directly with Parth Raval and the Gayatri Technology software studio in Rajkot, Gujarat. Discuss your workflow, ERP requirements, or custom web application.",
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

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-white overflow-x-hidden md:overflow-x-clip w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />

      <main className="flex-1 pt-4 sm:pt-8">
        {/* Direct Form & Timeline Sidebar without redundant top hero */}
        <ContactSection isPageHeading={true} />
      </main>

      <Footer />
    </div>
  );
}