import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { articles } from "@/lib/knowledge";

export default function KnowledgePreviewSection() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-[#E2E8F0] overflow-hidden">
      <div className="screen-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#00875A]" />
              <span>PRACTICAL ENGINEERING INSIGHTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#091C0F] tracking-tight font-display">
              Knowledge &amp; Guides for Business Owners
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              No generic AI articles. Practical breakdowns of real operational problems, spreadsheet bottlenecks, and software decisions facing growing Indian businesses.
            </p>
          </div>

          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00875A] hover:text-[#47C56E] group shrink-0 min-h-[44px]"
          >
            <span>Read all {articles.length} practical guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-[#00875A] font-semibold mb-3 px-1">
          <span>← Swipe horizontally to browse guides →</span>
          <span className="font-mono text-slate-400 text-[11px]">3 Practical Guides</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="w-[85vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-center bg-[#FAFCFF] rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#47C56E]/70 hover:shadow-md hover:-translate-y-1 transition-all duration-250 group flex flex-col justify-between h-auto min-h-[360px]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-3">
                  <span className="font-mono font-bold text-[#00875A] bg-[#47C56E]/12 px-2.5 py-0.5 rounded-md">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#091C0F] font-display group-hover:text-[#00875A] transition-colors mb-2 leading-snug h-[56px] line-clamp-2">
                  <Link href={`/knowledge/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 h-[54px] mb-4">
                  {article.excerpt}
                </p>

                <div className="pt-3 border-t border-[#E2E8F0] mb-4 space-y-1.5 h-[76px] overflow-hidden">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#475569] block">
                    Core insight:
                  </span>
                  <p className="text-xs text-[#091C0F] font-medium leading-relaxed flex items-start gap-1.5 line-clamp-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00875A] shrink-0 mt-0.5" />
                    <span>{article.keyTakeaways[0]}</span>
                  </p>
                </div>
              </div>

              <Link
                href={`/knowledge/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00875A] group-hover:text-[#47C56E] group-hover:translate-x-1 transition-all pt-2 min-h-[36px]"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
