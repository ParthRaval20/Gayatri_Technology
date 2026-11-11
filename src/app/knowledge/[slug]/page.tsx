import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  MessageSquare,
  Terminal,
  ArrowRight,
  ExternalLink,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import CitationBox from "@/components/CitationBox";
import JsonLd from "@/components/JsonLd";
import { LinkedinIcon } from "@/components/SocialIcons";
import { articles, getArticleBySlug } from "@/lib/knowledge";
import { siteConfig, getArticleDetailSchema, createPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  // Ensure title is within 50-60 chars and description within 120-155 chars
  const title = `${article.title.slice(0, 42)} | Gayatri Tech`;
  const description =
    article.excerpt.length > 155
      ? `${article.excerpt.slice(0, 151)}...`
      : article.excerpt.length < 120
      ? `${article.excerpt} Field-tested operational guide by Gayatri Technology.`
      : article.excerpt;

  return createPageMetadata({
    title,
    description,
    path: `/knowledge/${article.slug}`,
    type: "article",
    authors: [article.author.name],
  });
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = getArticleDetailSchema({
    slug: article.slug,
    title: article.title,
    subtitle: article.subtitle,
    excerpt: article.excerpt,
    category: article.category,
    publishedDate: article.publishedDate,
    author: {
      name: article.author.name,
      role: article.author.role,
    },
  });

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const parsedDate = new Date(article.publishedDate);
  const isoDate = !isNaN(parsedDate.getTime())
    ? parsedDate.toISOString().slice(0, 10)
    : "2026-05-18";

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-paper overflow-x-hidden md:overflow-x-clip w-full">
      <JsonLd data={articleSchema} id="article-detail-schema" />
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <article className="no-popup screen-container max-w-[68ch] mx-auto">
          {/* Breadcrumb Back Button */}
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-ink uppercase tracking-wider mb-6 sm:mb-8 group transition-colors min-h-[44px] font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Practical Guides</span>
          </Link>

          {/* Article Header */}
          <header className="border-b border-rule pb-8 mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-accent/10 border border-accent/25 text-accent">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
              <span className="text-xs text-muted">•</span>
              <span className="text-xs text-muted font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={isoDate}>{article.publishedDate}</time>
              </span>
            </div>

            <h1 className="text-[length:var(--text-section)] sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight font-display mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-ink-2 font-medium leading-relaxed mb-6 font-display">
              {article.subtitle}
            </p>

            {/* E-E-A-T Author & Reviewer Metadata Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-rule text-xs text-muted">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-ink text-accent-mint font-bold flex items-center justify-center font-mono shrink-0 text-sm shadow-2xs">
                  PR
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-ink block text-sm">
                      {article.author.name}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                      LEAD ARCHITECT
                    </span>
                  </div>
                  <span className="text-[11px] text-muted block">
                    B.Tech Computer Engineering &bull; Industrial ERP Architect
                  </span>
                  <div className="flex items-center gap-3 pt-0.5 text-[11px]">
                    <Link
                      href="/about"
                      className="text-accent hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>About Studio</span>
                    </Link>
                    <span>&bull;</span>
                    <a
                      href={siteConfig.social.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      <LinkedinIcon className="w-3 h-3 text-sky-600 inline" />
                      <span>Verified LinkedIn</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/919328437392?text=${encodeURIComponent(
                  `Hi Parth, I was reading your article on '${article.title}' and had a question about our business setup.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-xs font-bold hover:bg-[#20ba59] transition-all min-h-[40px] w-full sm:w-auto shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </header>

          {/* Key Takeaways Callout Box */}
          <div className="scroll-popup bg-accent/10 border-2 border-accent/25 rounded-2xl p-4 sm:p-6 sm:p-8 mb-8 sm:mb-12 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <Terminal className="w-5 h-5 text-accent" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-accent font-mono">
                Key Takeaways for Business Owners
              </h2>
            </div>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Main Body Content */}
          <div className="text-ink text-[1.0625rem] leading-[1.75] space-y-10 sm:space-y-12">
            {article.content.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-ink font-display pt-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-[1.0625rem] leading-[1.75] text-ink-2">
                    {para}
                  </p>
                ))}

                {section.checklist && (
                  <div className="bg-paper-2 border border-rule rounded-xl p-5 sm:p-6 my-4 shadow-2xs space-y-3">
                    <span className="text-xs font-bold text-ink uppercase tracking-wider font-mono block">
                      Operational Realities Checklist:
                    </span>
                    <ul className="space-y-2">
                      {section.checklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-3 text-sm text-ink-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* E-E-A-T Linkable Asset: Cite This Page Hook */}
          <CitationBox
            title={article.title}
            slug={article.slug}
            authorName={article.author.name}
            publishedDate={article.publishedDate}
          />

          {/* E-E-A-T Full Author Bio Card */}
          <div className="scroll-popup my-8 p-5 sm:p-7 bg-paper-2 border border-rule rounded-2xl shadow-xs space-y-3.5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-ink text-accent-mint font-bold flex items-center justify-center font-mono text-base shrink-0">
                  PR
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink font-display">
                    Written by {article.author.name}
                  </h3>
                  <p className="text-xs text-accent font-semibold font-mono">
                    Founder &amp; Lead Engineer, Gayatri Technology
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-muted bg-paper px-2.5 py-1 rounded-md border border-rule hidden sm:inline-block">
                Updated: <time dateTime={isoDate}>{article.publishedDate}</time>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              Parth Raval is a software engineer based in Rajkot, Gujarat. He designs and deploys custom manufacturing ERPs, shape-aware metallurgy weight calculation engines, and shop-floor mobile tools for Indian industrial companies.
            </p>
            <div className="pt-2 border-t border-rule flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3 text-muted">
                <Link href="/about" className="hover:text-accent font-medium transition-colors">
                  Engineering Principles &rarr;
                </Link>
                <span>&bull;</span>
                <Link href="/portfolio" className="hover:text-accent font-medium transition-colors">
                  Delivered Case Studies &rarr;
                </Link>
              </div>
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent font-bold hover:underline"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-600" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Founder Quote & Reflection */}
          <div className="scroll-popup mt-8 sm:mt-12 p-4 sm:p-6 sm:p-8 bg-paper-2 border border-rule rounded-2xl shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-ink font-display">
              A Personal Note from Parth Raval
            </h3>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed italic">
              &quot;We see many business owners in Rajkot and Gujarat get burned by massive software promises that end up gathering dust because they don&apos;t fit the daily routine of the people on the floor. Start small, solve the real operational bottleneck first, and let your software grow with your workflow.&quot;
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-rule">
              <span className="text-xs text-muted">
                Have a unique operational process? We can audit your current workflow.
              </span>
              <a
                href={`https://wa.me/919328437392?text=${encodeURIComponent(
                  `Hi Parth, I read your guide '${article.title}' and want to talk about custom software for our business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-xs font-bold hover:bg-[#20ba59] transition-all min-h-[44px]"
              >
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Related Articles Strip with Contextual Internal Links */}
          <div className="scroll-popup delay-100 mt-12 sm:mt-16 pt-8 border-t border-rule space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-ink font-display">
                More Practical Guides for Business Owners
              </h3>
              <Link
                href="/knowledge"
                className="text-xs font-bold text-accent hover:text-ink transition-colors"
              >
                View all operations playbooks &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/knowledge/${rel.slug}`}
                  className="p-5 rounded-2xl bg-paper-2 border border-rule hover:border-accent-light/70 transition-all group flex flex-col justify-between"
                  title={`Read complete guide: ${rel.title}`}
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-accent block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-ink group-hover:text-accent transition-colors leading-snug font-display">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-muted mt-2 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-rule flex items-center justify-between text-xs font-bold text-accent">
                    <span>Read complete guide &rarr;</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Global CTA Banner */}
        <div className="mt-16">
          <CtaBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}
