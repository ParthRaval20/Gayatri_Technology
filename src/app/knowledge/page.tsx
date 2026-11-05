import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/knowledge";
import { getBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Practical Engineering Guides",
  description:
    "Practical guides and engineering insights on moving from Excel to ERP, custom vs off-the-shelf software, manufacturing operations, and software costs in India.",
  path: "/knowledge",
  openGraphTitle: "Practical Engineering Guides | Gayatri Technology",
  openGraphDescription:
    "Actionable engineering insights for business owners: Excel to ERP migration, custom software costs, shop-floor manufacturing ERP, and WhatsApp workflow automation.",
});

export default function KnowledgePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Knowledge", path: "/knowledge" },
  ]);

  const featuredArticle =
    articles.find((a) => a.slug === "whatsapp-excel-tally-integration") || articles[0];
  const gridArticles = articles.filter((a) => a.slug !== featuredArticle.slug);

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
        {/* Compact Left-Aligned Architectural Header (No pill badge, no faint grid background) */}
        <section className="scroll-section pt-8 pb-10 sm:pt-14 sm:pb-16 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="max-w-4xl space-y-3 scroll-reveal">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00875A]">
                FIELD NOTES ON ERP, EXCEL &amp; OPERATIONS
              </span>
              <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display leading-[1.14]">
                Practical Engineering Guides for Growing Businesses
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#475569] max-w-2xl leading-relaxed pt-1">
                Actionable guides on how to evaluate custom software, when to replace Excel, and how shop-floor operations work on the ground.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Context Bar */}
        <section className="scroll-section bg-white py-4 sm:py-5 border-b border-[#E2E8F0]">
          <div className="screen-container flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-[#475569]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#091C0F] text-[#86EFAC] font-bold flex items-center justify-center font-mono text-xs shrink-0">
                GT
              </div>
              <div>
                <span className="font-bold text-[#091C0F] block">Curated by Parth Raval</span>
                <span className="text-[#64748B] text-[11px] sm:text-xs">Founder &amp; Lead Engineer, Gayatri Technology (Rajkot)</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-[#00875A] font-semibold bg-[#F0FDF4] px-3 py-1.5 rounded-full border border-[#86EFAC]/40 text-xs shrink-0">
              <BookOpen className="w-4 h-4" />
              <span>{articles.length} In-Depth Operations Playbooks</span>
            </div>
          </div>
        </section>

        {/* Articles Section: Full-Width Featured Guide + 2x2 Grid */}
        <section className="scroll-section py-12 sm:py-16 lg:py-20 bg-[#F8FAFC]">
          <div className="screen-container space-y-8 sm:space-y-10">
            {/* 1. Full-Width 2-Column Featured Article */}
            <div className="scroll-popup bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 hover:border-[#47C56E]/70 shadow-sm hover:shadow-md transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#47C56E]/12 text-[#00875A]">
                      FEATURED PLAYBOOK
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readingTime}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-mono">
                      {featuredArticle.publishedDate}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091C0F] font-display group-hover:text-[#00875A] transition-colors leading-snug">
                    <Link href={`/knowledge/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/knowledge/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#091C0F] hover:bg-[#163820] text-white text-xs font-bold transition-all shadow-xs min-h-[44px]"
                    >
                      <span>Read Featured Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#47C56E]" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#00875A] font-bold block">
                    Core Operational Takeaways:
                  </span>
                  <ul className="space-y-2 text-xs text-[#475569]">
                    {featuredArticle.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00875A] font-bold text-sm leading-none shrink-0">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="lg:hidden pt-3 border-t border-[#E2E8F0]">
                    <Link
                      href={`/knowledge/${featuredArticle.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#091C0F] hover:bg-[#163820] text-white text-xs font-bold transition-all shadow-xs min-h-[44px]"
                    >
                      <span>Read Featured Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#47C56E]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 2x2 Grid Below for Remaining 4 Guides */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {gridArticles.map((article, idx) => (
                <article
                  key={article.slug}
                  className={`scroll-popup ${idx % 2 === 1 ? "delay-100" : ""} bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#47C56E]/60 hover:shadow-md transition-all group flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono bg-[#47C56E]/12 text-[#00875A]">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-[#64748B] font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readingTime}
                        </span>
                        <span>•</span>
                        <span>{article.publishedDate}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#091C0F] font-display group-hover:text-[#00875A] transition-colors leading-snug">
                      <Link href={`/knowledge/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold">
                    <Link
                      href={`/knowledge/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#00875A] hover:text-[#091C0F] transition-colors"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Direct WhatsApp Ask CTA */}
            <div className="scroll-reveal-scale delay-150 bg-[#091C0F] text-white p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-[#163820] text-center space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#163820] text-[#86EFAC] border border-[#225430] inline-block">
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