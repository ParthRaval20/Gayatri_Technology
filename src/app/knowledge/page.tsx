import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/knowledge";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Knowledge & Practical Guides | Gayatri Technology",
  description:
    "Practical guides and engineering insights on moving from Excel to ERP, custom vs off-the-shelf software, manufacturing operations, and software costs in India.",
  alternates: {
    canonical: "/knowledge",
  },
  openGraph: {
    title: "Knowledge & Practical Guides | Gayatri Technology",
    description:
      "Actionable engineering insights for business owners: Excel to ERP migration, custom software costs, shop-floor manufacturing ERP, and WhatsApp workflow automation.",
    url: `${siteConfig.url}/knowledge`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge & Practical Guides | Gayatri Technology",
    description:
      "Actionable software engineering guides for growing businesses.",
  },
};

export default function KnowledgePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Knowledge", path: "/knowledge" },
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
              <span>Practical Guides • Zero AI Fluff • Written By Builders</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Practical Insights for Growing Businesses
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              No generic buzzwords or high-level corporate fluff. Actionable guides on how to evaluate custom software, when to replace Excel, and how real operations work on the ground.
            </p>
          </div>
        </section>

        {/* Founder Context Strip */}
        <section className="bg-white py-6 border-b border-[#E2E8F0]">
          <div className="screen-container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#091C0F] text-[#47C56E] font-bold flex items-center justify-center font-mono">
                PR
              </div>
              <div>
                <span className="font-bold text-[#091C0F] block">Curated by Parth Raval</span>
                <span className="text-[#64748B]">Founder &amp; Software Lead, Gayatri Technology (Rajkot)</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-[#00875A] font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>{articles.length} Comprehensive In-Depth Guides</span>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC]">
          <div className="screen-container max-w-5xl mx-auto space-y-8">
            <div className="grid gap-6 md:gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#47C56E]/60 hover:shadow-md transition-all group relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#47C56E]/12 text-[#00875A]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-[#64748B]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readingTime}
                      </span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display group-hover:text-[#00875A] transition-colors mb-2">
                    <Link href={`/knowledge/${article.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#00875A] font-semibold mb-3">
                    {article.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  {/* Key Takeaways Snapshot */}
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 mb-6">
                    <span className="text-xs font-bold text-[#091C0F] uppercase tracking-wider block mb-2 font-mono">
                      Key Highlights:
                    </span>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#475569]">
                      {article.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9] text-xs font-bold">
                    <span className="text-[#64748B]">
                      By {article.author.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#00875A] group-hover:text-[#47C56E] group-hover:translate-x-1 transition-all">
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Direct WhatsApp Ask CTA */}
            <div className="bg-gradient-to-br from-[#091C0F] to-[#12381B] text-white p-8 sm:p-10 rounded-3xl shadow-lg border border-[#1b4324] text-center space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#47C56E]/20 text-[#86EFAC] inline-block">
                FOUNDER-TO-FOUNDER CONVERSATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Have a specific question about your business workflow?
              </h3>
              <p className="text-sm text-[#E2E8F0]/80 max-w-xl mx-auto leading-relaxed">
                Whether you are evaluating an ERP, trying to fix a messy spreadsheet setup, or want to know if custom software makes sense for your budget—ask directly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/919328437392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#20ba59] transition-all shadow-md shadow-[#25D366]/25 min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask Parth on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold border border-white/20 transition-all min-h-[44px]"
                >
                  <span>Submit Project Details</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
