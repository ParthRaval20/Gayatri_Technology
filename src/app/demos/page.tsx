import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { DEMOS_DATA } from "@/lib/demos-data";
import DemosClient from "./DemosClient";
import { CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "Interactive Website Demos & Production Prototypes | Gayatri Technology",
  description:
    "Test live, functional website prototypes built for restaurants, B2B wholesale, hair salons, and preschools. Real booking engines, WhatsApp lead delivery, and zero proprietary builder lock-in.",
  path: "/demos",
  openGraphTitle: "Working Website Demos & Prototypes | Gayatri Technology",
  openGraphDescription:
    "Interact with working prototypes: direct table booking, wholesale MOQ calculators, stylist slot locking, and preschool admissions flows. Engineered with Next.js 15.",
});

export default function DemosPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Live Demos", path: "/demos" },
  ]);

  const demosItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Gayatri Technology Interactive Production Website Demos",
    description:
      "Functional prototypes of custom Next.js web applications engineered for hospitality, B2B wholesale, salons, and education.",
    itemListElement: DEMOS_DATA.map((demo, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: demo.title,
      url: `https://gayatritechnology.in${demo.liveUrl}`,
      description: demo.description,
    })),
  };

  const demosFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How are these custom Next.js prototypes different from ready-made WordPress or Shopify templates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike WordPress or Shopify themes that rely on dozens of heavy third-party plugins that slow down mobile devices, our custom Next.js prototypes are compiled React Server Components with sub-400ms loading, zero plugin bloat, and bespoke database workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Can we deploy these interactive features (booking, carts, WhatsApp lead delivery) to our own domain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every prototype represents production-ready architecture that we tailor to your exact business workflow, brand identity, and domain, with direct WhatsApp webhook alerts and 100% intellectual property ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Can these custom web apps integrate with our existing ERP, POS, or Google Sheets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because every build uses modern TypeScript and API routes, we easily synchronize form submissions, reservations, and inventory with your existing ERP, billing software, CRM, or Google Sheets via webhooks and REST APIs.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical development timeline for a custom Next.js website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard production websites and direct ordering portals typically deploy within 2 to 4 weeks from architecture sign-off, complete with speed optimization, SEO metadata, and staff onboarding.",
        },
      },
    ],
  };

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-[#F8FAFC] overflow-x-hidden md:overflow-x-clip w-full">
      <JsonLd data={breadcrumbSchema} id="demos-breadcrumb-schema" />
      <JsonLd data={demosItemListSchema} id="demos-itemlist-schema" />
      <JsonLd data={demosFaqSchema} id="demos-faq-schema" />
      <Navbar />

      <main className="flex-1">
        {/* Grounded Founder Architectural Header */}
        <section className="pt-6 pb-8 sm:pt-14 sm:pb-14 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#DCFCE7] border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-[#00875A] animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#00875A]">
                  HAND-CODED PROTOTYPES &bull; INTERACT BEFORE YOU COMMIT
                </span>
              </div>

              <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-black text-[#091C0F] tracking-tight font-display leading-[1.15]">
                Working Prototypes Built for Actual Business Workflows
              </h1>

              <p className="text-xs sm:text-base text-[#475569] leading-relaxed">
                Instead of reviewing static Figma mockups or fighting template limitations in WordPress, test how your customers will actually interact with your site. Every prototype below runs on our production Next.js stack with instant WhatsApp lead delivery, real-time booking forms, and complete codebase ownership.
              </p>

              <div className="flex flex-col min-[480px]:flex-row items-start min-[480px]:items-center gap-2 sm:gap-6 pt-3 text-xs font-mono text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                  <span>Next.js 15 App Router</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                  <span>Sub-400ms Edge Performance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                  <span>Direct WhatsApp Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filterable Gallery with Asymmetrical Bespoke Cards */}
        <DemosClient />

        {/* Engineering Standard Section: Bespoke UI Snippets Replacing Generic AI Emojis */}
        <section className="py-10 sm:py-20 bg-white border-t border-[#E2E8F0]">
          <div className="screen-container">
            <div className="max-w-2xl mb-8 sm:mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00875A] uppercase block mb-1">
                ENGINEERING SPECIFICATIONS
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-[#091C0F] font-display">
                Why Custom Next.js Architecture Outperforms WordPress &amp; Ready-Made Themes
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1.5 sm:mt-2">
                The technical difference between a bloated template that bleeds mobile visitors and a custom-compiled web system built to convert.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1: Real Lighthouse 100/100 Gauge & Core Web Vitals */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between space-y-4 sm:space-y-5 hover:border-slate-300 transition-colors">
                <div className="space-y-4">
                  {/* Real Lighthouse Gauge UI Snippet */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Circular SVG Gauge for 100 Score */}
                        <div className="relative w-10 h-10 flex items-center justify-center">
                          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-emerald-100"
                              strokeWidth="3.5"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-emerald-600"
                              strokeDasharray="100, 100"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <span className="absolute font-mono text-xs font-black text-emerald-700">
                            100
                          </span>
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-800 font-mono">
                            Google Lighthouse
                          </div>
                          <div className="text-[10px] text-emerald-700 font-medium">
                            Performance Audit
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        AUDITED
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[10px] font-mono">
                      <div>
                        <span className="text-slate-400 block text-[9px]">FCP</span>
                        <span className="font-bold text-slate-800">0.4s</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[9px]">LCP</span>
                        <span className="font-bold text-slate-800">0.6s</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[9px]">CLS</span>
                        <span className="font-bold text-slate-800">0.00</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#091C0F]">
                      Sub-400ms Next.js Edge Execution
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed mt-1">
                      Pre-rendered React Server Components eliminate the 15+ blocking plugins that bog down standard WordPress and Shopify stores. Your pages load instantly on mid-range 4G mobile devices, boosting Google Quality Scores and conversion rates.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#00875A]" />
                  <span>Zero runtime JavaScript bloat</span>
                </div>
              </div>

              {/* Card 2: Stylized WhatsApp Webhook & Direct Lead Message Bubble */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between space-y-5 hover:border-slate-300 transition-colors">
                <div className="space-y-4">
                  {/* WhatsApp Webhook Message Snippet */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span className="flex items-center gap-1 text-emerald-700 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        DIRECT LEAD WEBHOOK
                      </span>
                      <span>140ms dispatch</span>
                    </div>

                    <div className="bg-[#DCF8C6]/60 rounded-xl p-2.5 text-xs text-slate-800 space-y-1 border border-emerald-200/60">
                      <div className="font-bold text-[#091C0F] text-[11px]">
                        🔔 New Direct Reservation #SH-482
                      </div>
                      <p className="text-[10px] text-slate-600 font-mono leading-tight">
                        Siddharth S. &bull; 4 Guests &bull; Counter Omakase &bull; 8:00 PM
                      </p>
                      <div className="flex justify-end text-[9px] text-slate-400 font-mono">
                        Delivered ✓✓
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#091C0F]">
                      Direct WhatsApp &amp; Webhook Delivery
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed mt-1">
                      Customer bookings, tour requests, and RFP briefs route directly to your personal WhatsApp and team spreadsheet in real time. Never lose a high-value customer in a spam folder, and eliminate third-party commission charges entirely.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00875A]" />
                  <span>Bypasses third-party 20% platform cuts</span>
                </div>
              </div>

              {/* Card 3: Code Repository & Asset Ownership Badge */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between space-y-5 hover:border-slate-300 transition-colors">
                <div className="space-y-4">
                  {/* Clean Git Repo Inspector Snippet */}
                  <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] shadow-2xs space-y-2 border border-slate-800">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1.5">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span>●</span> git.gayatri.tech/client-repo
                      </span>
                      <span>MIT / FULL IP</span>
                    </div>
                    <div className="text-[10px] text-slate-300 leading-snug space-y-0.5">
                      <div>$ git clone git@github.com:client/site.git</div>
                      <div className="text-emerald-400">&#10003; 100% Codebase Ownership</div>
                      <div className="text-slate-400">&#10003; Portable Next.js &amp; TypeScript Stack</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#091C0F]">
                      100% Code Ownership &amp; Zero Lock-in
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed mt-1">
                      You receive full intellectual property ownership of clean TypeScript code, Tailwind CSS designs, and database models. No locked proprietary builder platforms, and total freedom to host, scale, and evolve anywhere.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00875A]" />
                  <span>Independent source code &amp; zero builder lock-in</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
