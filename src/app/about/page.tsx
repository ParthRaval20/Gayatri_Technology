import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  MapPin,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Eye,
  Terminal,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { siteConfig, getBreadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { LinkedinIcon } from "@/components/SocialIcons";
import FounderPhoto from "@/components/FounderPhoto";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Founder-Led Software Studio in Rajkot, Gujarat",
  description:
    "Gayatri Technology was founded by Parth Raval in Rajkot, Gujarat on a simple idea: businesses should not have to change the way they work just because their software doesn't fit them.",
  path: "/about",
  openGraphTitle: "About Gayatri Technology | Founder-Led Software Studio",
  openGraphDescription:
    "Custom software built around the way your business works. Founded in Rajkot, Gujarat.",
});

const principles = [
  {
    num: "01",
    title: "Understand Before Building",
    desc: "We first understand how your business makes money, where delays occur, and how your team interacts with customers and inventory. We don't jump to writing code before mapping the actual business problem.",
  },
  {
    num: "02",
    title: "Build For The Workflow",
    desc: "Software should adapt to your company rather than force your people into a generic template. If your warehouse calculates steel by shape or your orders flow through WhatsApp, we build directly around that reality.",
  },
  {
    num: "03",
    title: "Keep It Practical",
    desc: "Technology should solve a real headache, not exist just to look impressive or complex. Interfaces must be simple enough that warehouse supervisors and busy owners can operate them effortlessly from a phone.",
  },
  {
    num: "04",
    title: "Build For The Long Term",
    desc: "We write clean, standard code with strict database integrity so your system remains stable, fast, and easy to maintain as your business scales over the next 5 to 10 years.",
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
        {/* Split Founder & Studio Introduction Header */}
        <section className="scroll-section py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Mission Story & Single H1 */}
              <div className="lg:col-span-7 space-y-5 scroll-reveal">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00875A] block">
                  FOUNDER-LED SOFTWARE STUDIO &bull; RAJKOT, GUJARAT
                </span>

                <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display leading-[1.14]">
                  An engineering studio in Rajkot built for the factory floor, not the boardroom.
                </h1>

                <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed pt-2">
                  <p>
                    Every day in industrial hubs like Rajkot and across Gujarat, ambitious companies
                    run into the same roadblock: they grow fast, but their operational systems remain
                    stuck in loose Excel sheets, physical registers, and chaotic WhatsApp threads.
                  </p>
                  <p>
                    When they try off-the-shelf software or rigid ERP packages, they find themselves
                    forced to adapt to someone else&apos;s workflow. The software asks for 30 unnecessary
                    fields, crashes on mobile phones in the yard, or doesn&apos;t understand the way raw materials,
                    delivery challans, or Indian GST accounts work.
                  </p>
                  <p>
                    That is why Gayatri Technology exists. We sit down with founders, production
                    managers, and warehouse teams to build clean software that fits their business
                    like a glove.
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#091C0F]">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <MapPin className="w-4 h-4 text-[#00875A]" />
                    <span>102 Dev Palace, Ankur Nagar, Rajkot 360004</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Terminal className="w-4 h-4 text-[#00875A]" />
                    <span>Founder-Led Architecture</span>
                  </div>
                </div>

                <div className="pt-4 hidden lg:flex flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#091C0F] hover:bg-[#163820] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md min-h-[44px]"
                  >
                    <span>Tell Us What You Need</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#47C56E]" />
                  </Link>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#091C0F] border border-[#E2E8F0] px-5 py-3 rounded-full text-xs font-bold hover:bg-[#F0FDF4] transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Talk on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Resolution Founder Card */}
              <div className="lg:col-span-5 scroll-popup delay-100">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                    <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider font-mono">
                      LEAD ENGINEER &amp; FOUNDER
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-[#E2E8F0]">
                      Rajkot, Gujarat
                    </span>
                  </div>

                  {/* Founder Profile Identity */}
                  <div className="flex items-start gap-4">
                    <FounderPhoto size="md" />
                    <div>
                      <h2 className="text-xl font-bold text-[#091C0F] font-display">
                        Parth Raval
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-[#00875A]">
                        Founder &amp; Lead Software Engineer
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        B.E. Computer Science • Full-Stack Systems Architect
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-4">
                    <p className="italic">
                      &ldquo;I believe software should be practical before anything else. A system is only
                      good if the person on the warehouse floor or at the billing desk actually enjoys
                      using it every single day.&rdquo;
                    </p>
                    <p className="italic">
                      &ldquo;When you work with Gayatri Technology, you don&apos;t get passed around between
                      sales agents and outsourced developers. You talk directly with the engineers
                      designing and writing your codebase.&rdquo;
                    </p>
                  </div>

                  {/* Direct Contact Credentials */}
                  <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] space-y-2.5 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#00875A]" />
                        <a href="tel:+919328437392" className="font-semibold text-[#091C0F] hover:text-[#00875A]">
                          +91 93284 37392
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#00875A]" />
                        <a href="mailto:info@gayatritechnology.in" className="font-semibold text-[#091C0F] hover:text-[#00875A]">
                          info@gayatritechnology.in
                        </a>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center gap-2.5">
                      <a
                        href={siteConfig.social.linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] hover:border-[#0077b5] text-xs font-bold text-[#091C0F] hover:text-[#0077b5] transition-all shadow-2xs"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                        <span>LinkedIn Profile</span>
                      </a>
                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-bold text-[#128C7E] hover:bg-[#25D366]/20 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Direct WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Principles That Guide Our Work */}
        <section className="scroll-section py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="max-w-3xl mb-10 sm:mb-14 scroll-reveal">
              <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#091C0F] tracking-tight font-display">
                Four principles that guide our work
              </h2>
              <p className="text-base text-[#475569] mt-2">
                We avoid corporate jargon and focus on what actually creates long-term value for a business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {principles.map((item, idx) => {
                const delayClass = (idx % 2 === 1) ? "delay-100" : "";
                return (
                  <div
                    key={idx}
                    className={`scroll-popup ${delayClass} p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#47C56E]/60 transition-all space-y-3`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2.5 py-1 rounded-md border border-[#47C56E]/20">
                        {item.num}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#47C56E]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#091C0F] font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Seamless Cross-Link to 8-Week Delivery Lifecycle replacing duplicate process section */}
            <div className="scroll-popup delay-150 mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#091C0F] block">
                  Looking for our 8-week engineering sprint lifecycle &amp; 30-day floor warranty?
                </span>
                <p className="text-xs text-slate-500">
                  Inspect our 5-phase delivery blueprint, UAT milestones, and zero-downtime deployment process.
                </p>
              </div>
              <Link
                href="/services#process"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#091C0F] hover:bg-[#163820] text-white text-xs font-bold transition-all shrink-0 shadow-xs"
              >
                <span>Explore Delivery Lifecycle</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#47C56E]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Real Evidence Highlight */}
        <section className="scroll-section py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="scroll-reveal-scale p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAFCFF] border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#00875A] uppercase tracking-wider block">
                  REAL PRODUCTION EVIDENCE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                  See how we built Gayatri Steel&apos;s 10-module operational suite
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] max-w-xl">
                  Inspect real mobile screens for multi-company stock tracking, shape-aware auto weight,
                  and digital delivery challans currently in active production.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-[#091C0F] hover:bg-[#163820] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <Eye className="w-4 h-4 text-[#47C56E]" />
                  <span>Inspect Case Studies &amp; UI</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}