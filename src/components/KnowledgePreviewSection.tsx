import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { articles } from "@/lib/knowledge";

export default function KnowledgePreviewSection() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section className="scroll-section py-14 sm:py-20 bg-paper border-t border-rule overflow-hidden">
      <div className="screen-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 scroll-reveal">
          <div className="max-w-2xl space-y-3">
            <span className="text-accent font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
              OPERATIONAL PLAYBOOKS &bull; B2B KNOWLEDGE BASE
            </span>
            <h2 className="text-[length:var(--text-section)] tracking-[var(--tracking-display)] leading-[1.12] font-extrabold text-ink tracking-tight font-display">
              Knowledge &amp; Guides for Business Owners
            </h2>
            <p className="text-[length:var(--text-lead)] text-ink-2 leading-relaxed">
              Actionable engineering breakdowns of real operational problems, spreadsheet bottlenecks, and software architecture decisions facing growing businesses.
            </p>
          </div>

          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-ink transition-colors group shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Read all {articles.length} practical guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 motion-safe:transition-transform" />
          </Link>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-accent font-semibold mb-3 px-1 scroll-reveal">
          <span>&larr; Swipe horizontally to browse guides &rarr;</span>
          <span className="text-muted font-mono text-[11px]">3 practical guides</span>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-3 md:pb-0 items-stretch">
          {featuredArticles.map((article, idx) => {
            const delayClass = idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300";

            return (
              <article
                key={article.slug}
                className={`w-[85vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-center bg-paper-2 rounded-2xl border border-rule p-6 hover:border-accent-light/70 hover:shadow-md hover:-translate-y-1 transition-colors motion-safe:transition-transform duration-250 group flex flex-col justify-between h-auto min-h-[360px] scroll-reveal ${delayClass}`}
              >
              <div>
                <div className="flex items-center justify-between text-xs text-muted mb-3">
                  <span className="font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-md font-mono text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="text-[length:var(--text-title)] font-bold text-ink font-display group-hover:text-accent transition-colors mb-2 leading-snug h-[56px] line-clamp-2">
                  <Link href={`/knowledge/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-muted leading-relaxed line-clamp-3 h-[54px] mb-4">
                  {article.excerpt}
                </p>

                <div className="pt-3 border-t border-rule mb-4 space-y-1.5 h-[76px] overflow-hidden">
                  <span className="text-[11px] font-semibold text-ink-2 font-mono block">
                    Core insight:
                  </span>
                  <p className="text-xs text-ink font-medium leading-relaxed flex items-start gap-1.5 line-clamp-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{article.keyTakeaways[0]}</span>
                  </p>
                </div>
              </div>

              <Link
                href={`/knowledge/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:text-ink transition-colors pt-2 min-h-[36px] focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 motion-safe:transition-transform" />
              </Link>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
