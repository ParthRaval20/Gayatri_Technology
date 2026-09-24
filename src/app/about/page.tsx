import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Code2,
  Users2,
  MapPin,
  Sparkles,
  ArrowRight,
  Compass,
  Building2,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import CtaBanner from "@/components/CtaBanner";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | Our Story, Team & Engineering Philosophy",
  description:
    "Learn about Gayatri Technology: a premier software engineering and web development firm based in Rajkot, Gujarat. Zero generic templates, direct architect communication, and enterprise standards.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Gayatri Technology",
    description:
      "Enterprise Web & Software Architecture. Learn how we engineer scalable systems tailored to client operational realities.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Gayatri Technology",
    description:
      "Software engineering philosophy and standards from Rajkot, Gujarat.",
  },
};

const principles = [
  {
    icon: Code2,
    title: "The Zero-Template Guarantee",
    desc: "We strictly refuse to paste generic WordPress themes or bloated website builders. Every system is built from scratch with clean, semantic Next.js and TypeScript tailored to your business model.",
  },
  {
    icon: Users2,
    title: "Direct Architect Communication",
    desc: "No non-technical account managers or communication bottlenecks. You collaborate directly with senior software architects who design and implement your systems.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Strict QA",
    desc: "Role-based access control (RBAC), input sanitation, automated testing suites, and OWASP baseline practices protect your critical operational and customer data.",
  },
  {
    icon: Award,
    title: "100% Client IP & Code Ownership",
    desc: "You retain full ownership of the intellectual property, source repositories, documentation, and database schemas. No vendor lock-in or proprietary licensing traps.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-[#F8FAFC] overflow-x-hidden md:overflow-x-clip w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18 lg:py-24 custom-grid-bg border-b border-[#E2E8F0]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(71,197,110,0.12),transparent_70%)] pointer-events-none -z-10" />

          <div className="screen-container max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00875A]" />
              <span>Engineering Excellence • Rajkot, Gujarat</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Software Crafted Around How Businesses Actually Work
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Gayatri Technology was founded with a clear mission: to replace brittle, generic website templates with disciplined, production-grade software architectures.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#47C56E] text-[#091C0F] px-7 py-3 rounded-full text-sm font-bold shadow-md shadow-[#47C56E]/25 hover:bg-[#3db863] transition-all active:scale-95"
              >
                <span>Talk With an Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center gap-2 bg-white text-[#091C0F] border border-[#E2E8F0] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#F0FDF4] transition-colors"
              >
                <span>Explore Our Process</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Company Background & Story */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block font-mono">
                  OUR BACKGROUND
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#091C0F] tracking-tight font-display">
                  Rooted in Engineering. Built for Growing Enterprises.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                  <p>
                    From our engineering hub in Rajkot, Gujarat, we have observed firsthand the frustration growing companies experience when generic off-the-shelf software breaks down under real-world industrial demands.
                  </p>
                  <p>
                    A tool steel wholesaler cannot run their logistics on a generic shopping cart; an industrial manufacturing group cannot coordinate delivery challans and multi-branch GST records on disconnected spreadsheets.
                  </p>
                  <p>
                    That is why Gayatri Technology specializes in bespoke engineering. We sit down with company founders, operational managers, and warehouse supervisors to build digital systems that fit their workflow like a glove.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#091C0F]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#47C56E]" />
                  <span>Headquartered at 102 Dev Palace, Ankur Nagar, Rajkot 360004</span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00875A] sm:hidden">
                  <span>Swipe core principles</span>
                  <span>→</span>
                </div>
                <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-3.5 sm:gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar pb-3 sm:pb-0 items-stretch sm:grid-cols-2">
                  {principles.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="w-[82vw] max-w-[300px] sm:w-auto shrink-0 sm:shrink snap-center sm:snap-align-none p-5 sm:p-6 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] space-y-2.5 sm:space-y-3 hover:border-[#47C56E]/60 transition-all shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] mb-3">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-base font-bold text-[#091C0F] font-display">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* The 6-Stage Process */}
        <div id="process">
          <ProcessSection />
        </div>

        {/* CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
