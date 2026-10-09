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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About Us | Founder-Led Software Studio in Rajkot, Gujarat",
  description:
    "Gayatri Technology was founded by Parth Raval in Rajkot, Gujarat on a simple idea: businesses should not have to change the way they work just because their software doesn't fit them.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gayatri Technology | Founder-Led Software Studio",
    description:
      "Custom software built around the way your business works. Founded in Rajkot, Gujarat.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gayatri Technology",
    description:
      "Software built around the way your business actually works. Rajkot, Gujarat.",
  },
};

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

const workSteps = [
  {
    step: "01",
    title: "Walk The Workflow",
    desc: "We sit down with you and the team members actually doing the work. We examine your current sheets, challans, and registers to see where data gets stuck.",
  },
  {
    step: "02",
    title: "Design Clean Screens",
    desc: "Before writing backend code, we design simple, readable screens showing exact fields and buttons. You test and confirm the workflow before engineering starts.",
  },
  {
    step: "03",
    title: "Build & Test on Floor",
    desc: "We build in clear milestones. You see working software early and test it on real phones or office laptops with real data.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    desc: "We launch the system, help your team start using it smoothly, and provide ongoing direct technical support. You retain 100% ownership of your code and data.",
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
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18 lg:py-20 custom-grid-bg border-b border-[#E2E8F0]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(71,197,110,0.12),transparent_70%)] pointer-events-none -z-10" />

          <div className="screen-container max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#47C56E] shrink-0" />
              <span>Founder-Led • Rajkot, Gujarat</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Software built around the way your business{" "}
              <span className="text-[#00875A]">actually works.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Gayatri Technology started with a simple idea: businesses should not have to change the
              way they work just because their software doesn&apos;t fit them.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#47C56E] text-[#091C0F] px-7 py-3.5 rounded-full text-sm font-bold shadow-md shadow-[#47C56E]/25 hover:bg-[#3db863] transition-all active:scale-95"
              >
                <span>Tell Us What You Need</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#091C0F] border border-[#E2E8F0] px-6 py-3.5 rounded-full text-sm font-bold hover:bg-[#F0FDF4] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Talk on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* WHO WE ARE & WHY WE EXIST */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block font-mono">
                  WHO WE ARE &bull; WHY WE EXIST
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#091C0F] tracking-tight font-display">
                  Practical software engineering for growing businesses.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                  <p>
                    Every day in industrial hubs like Rajkot and across Gujarat, ambitious companies
                    run into the same roadblock: they grow fast, but their operational systems remain
                    stuck in loose Excel sheets, physical registers, and chaotic WhatsApp threads.
                  </p>
                  <p>
                    When they try off-the-shelf software or rigid ERP packages, they find themselves
                    forced to adapt to someone else&apos;s workflow. The software asks for 30 unnecessary
                    fields, crashes on mobile phones, or doesn&apos;t understand the way raw materials,
                    challans, or local accounts work.
                  </p>
                  <p>
                    That is why Gayatri Technology exists. We sit down with founders, production
                    managers, and warehouse teams to build clean software that fits their business
                    like a glove.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#091C0F]">
                  <MapPin className="w-4 h-4 text-[#00875A]" />
                  <span>Headquartered at 102 Dev Palace, Ankur Nagar, Rajkot 360004</span>
                </div>
              </div>

              {/* Founder Section */}
              <div className="lg:col-span-6">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                    <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider font-mono">
                      BEHIND THE COMPANY
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-[#E2E8F0]">
                      Founder &bull; Engineer
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#091C0F] text-[#86EFAC] font-display font-black text-xl flex items-center justify-center shrink-0 border-2 border-[#47C56E]/40 shadow-sm">
                      PR
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] font-display">
                        Parth Raval
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#00875A]">
                        Founder &amp; Lead Engineer
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Gayatri Technology &bull; Rajkot, Gujarat
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-4">
                    <p>
                      &ldquo;I believe software should be practical before anything else. A system is only
                      good if the person on the warehouse floor or at the billing desk actually enjoys
                      using it every single day.&rdquo;
                    </p>
                    <p>
                      &ldquo;When you work with Gayatri Technology, you don&apos;t get passed around between
                      sales agents and outsourced developers. You talk directly with the engineers
                      designing and writing your codebase.&rdquo;
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] space-y-2.5 text-xs">
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
                    <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap items-center gap-2">
                      <a
                        href={siteConfig.social.linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0077b5] text-[11px] font-bold text-[#091C0F] hover:text-[#0077b5] transition-colors"
                      >
                        <LinkedinIcon className="w-3 h-3 text-[#0077b5]" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={siteConfig.social.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#E1306C] text-[11px] font-bold text-[#091C0F] hover:text-[#E1306C] transition-colors"
                      >
                        <InstagramIcon className="w-3 h-3 text-[#E1306C]" />
                        <span>@{siteConfig.social.instagram.handle}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BELIEVE: 4 PRACTICAL PRINCIPLES */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#091C0F] tracking-tight font-display">
                Four principles that guide our work
              </h2>
              <p className="text-base text-[#475569] mt-2">
                We avoid corporate jargon and focus on what actually creates long-term value for a business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#47C56E]/60 transition-all space-y-3"
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
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK: 4 PRACTICAL PHASES */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0] overflow-hidden">
          <div className="screen-container">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
                OUR PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#091C0F] tracking-tight font-display">
                How we take a project from problem to production
              </h2>
              <p className="text-base text-[#475569] mt-2">
                Clear expectations, iterative reviews, and no surprise costs.
              </p>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex sm:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
              <span>← Swipe horizontally to see 4 phases →</span>
              <span className="font-mono text-slate-400 text-[11px]">4 Steps</span>
            </div>

            <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar pb-3 sm:pb-0 items-stretch">
              {workSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="w-[78vw] max-w-[280px] sm:w-auto shrink-0 sm:shrink snap-center p-5 sm:p-6 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] flex flex-col justify-between space-y-3 shadow-2xs h-auto"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2 py-0.5 rounded-md inline-block mb-3">
                      STEP {step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#091C0F] font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REAL EVIDENCE HIGHLIGHT */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#00875A] uppercase tracking-wider block">
                  REAL PRODUCTION EVIDENCE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                  See how we built Gayatri Steel&apos;s 10-module operational suite
                </h3>
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

