import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { articles, getArticleBySlug } from "@/lib/knowledge";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

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

  return {
    title: `${article.title} | Gayatri Technology`,
    description: article.excerpt,
    alternates: {
      canonical: `/knowledge/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Gayatri Technology`,
      description: article.excerpt,
      url: `${siteConfig.url}/knowledge/${article.slug}`,
      type: "article",
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Knowledge", path: "/knowledge" },
    { name: article.title, path: `/knowledge/${article.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Gayatri Technology",
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/knowledge/${article.slug}`,
    },
  };

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-[#F8FAFC] overflow-x-hidden md:overflow-x-clip w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <article className="screen-container max-w-4xl mx-auto">
          {/* Breadcrumb Back Button */}
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00875A] hover:text-[#47C56E] uppercase tracking-wider mb-6 sm:mb-8 group transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Practical Guides</span>
          </Link>

          {/* Article Header */}
          <header className="border-b border-[#E2E8F0] pb-8 mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-[#47C56E]/12 text-[#00875A]">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#64748B]">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
              <span className="text-xs text-[#64748B]">•</span>
              <span className="text-xs text-[#64748B]">{article.publishedDate}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-xl text-[#00875A] font-medium leading-relaxed mb-6 font-display">
              {article.subtitle}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9] text-xs text-[#64748B]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#091C0F] text-[#47C56E] font-bold flex items-center justify-center font-mono">
                  PR
                </div>
                <div>
                  <span className="font-bold text-[#091C0F] block text-sm">
                    {article.author.name}
                  </span>
                  <span>{article.author.role}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/919328437392?text=${encodeURIComponent(
                  `Hi Parth, I was reading your article on '${article.title}' and had a question about our business setup.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#20ba59] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </header>

          {/* Key Takeaways Callout Box */}
          <div className="bg-[#F0FDF4] border-2 border-[#86EFAC] rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <Sparkles className="w-5 h-5 text-[#00875A]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#00875A] font-mono">
                Key Takeaways for Business Owners
              </h2>
            </div>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#14532D]">
                  <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Main Body Content */}
          <div className="prose prose-slate max-w-none text-[#334155] leading-relaxed space-y-10 sm:space-y-12">
            {article.content.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display pt-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-[#475569]">
                    {para}
                  </p>
                ))}

                {section.checklist && (
                  <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 my-4 shadow-2xs space-y-3">
                    <span className="text-xs font-bold text-[#091C0F] uppercase tracking-wider font-mono block">
                      Operational Realities Checklist:
                    </span>
                    <ul className="space-y-2">
                      {section.checklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-3 text-sm text-[#334155]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00875A] shrink-0 mt-2" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Founder Quote & Reflection */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white border border-[#E2E8F0] rounded-2xl shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-[#091C0F] font-display">
              A Personal Note from Parth Raval
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed italic">
              &quot;We see many business owners in Rajkot and Gujarat get burned by massive software promises that end up gathering dust because they don&apos;t fit the daily routine of the people on the floor. Start small, solve the real operational bottleneck first, and let your software grow with your workflow.&quot;
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#F1F5F9]">
              <span className="text-xs text-[#64748B]">
                Have a unique operational process? We can audit your current workflow.
              </span>
              <a
                href={`https://wa.me/919328437392?text=${encodeURIComponent(
                  `Hi Parth, I read your guide '${article.title}' and want to talk about custom software for our business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#20ba59] transition-all"
              >
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Related Articles Strip */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E2E8F0] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#091C0F] font-display">
                More Practical Guides
              </h3>
              <Link
                href="/knowledge"
                className="text-xs font-bold text-[#00875A] hover:underline"
              >
                View all guides &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/knowledge/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#47C56E] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#00875A] block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-[#091C0F] group-hover:text-[#00875A] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-2 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#00875A]">
                    <span>Read Guide</span>
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
