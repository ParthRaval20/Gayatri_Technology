import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  Terminal,
  ShoppingBag,
  LayoutTemplate,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Cloud,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import CtaBanner from "@/components/CtaBanner";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services & Capabilities | Custom Web & ERP Solutions",
  description:
    "Explore Gayatri Technology's core engineering services: Custom Web Applications, Enterprise ERP Platforms, High-Performance E-Commerce, UI/UX Systems, and Cloud Architectures.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering Services & Capabilities | Gayatri Technology",
    description:
      "Bespoke web platforms, industrial software, multi-tenant ERPs, and cloud architectures built with zero generic templates.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Services | Gayatri Technology",
    description:
      "Bespoke web applications, ERP architectures, and high-performance digital platforms tailored to your business goals.",
  },
};

const detailedServices = [
  {
    id: "web-apps",
    icon: Terminal,
    title: "Custom Web Application Development",
    tag: "Core Specialty",
    badge: "Enterprise Grade",
    desc: "Powerful, scalable web applications built around your unique internal business workflows, role-based access permissions, and complex operational logic.",
    deliverables: [
      "Role-Based Access Control (RBAC) & Multi-Tenant architecture",
      "Interactive data grids, search indexing, and real-time syncing",
      "Automated formula engines (e.g. industrial metallurgical calculators)",
      "Zero-dependency custom APIs and secure database pipelines",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "business-websites",
    icon: Globe,
    title: "High-Performance Business Websites",
    tag: "Authority & Lead Gen",
    badge: "Sub-Second Load",
    desc: "Bespoke company websites engineered with zero generic templates. Designed to establish authoritative industry standing, generate qualified inbound inquiries, and rank at the top of search engines.",
    deliverables: [
      "Custom responsive design system tailored to your corporate identity",
      "100/100 Core Web Vitals performance benchmarks",
      "Comprehensive SEO architecture with structured JSON-LD Schema",
      "Cross-platform responsiveness and frictionless user journeys",
    ],
    tech: ["Next.js", "Tailwind CSS", "Semantic HTML5", "Edge Caching"],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-Commerce & B2B Wholesale Portals",
    tag: "Commerce Architecture",
    badge: "High Conversion",
    desc: "Scalable digital storefronts and B2B ordering portals designed to manage high-SKU catalogs, wholesale volume pricing tiers, GST invoicing, and real-time warehouse inventory.",
    deliverables: [
      "Wholesale tier pricing & customer-specific credit limits",
      "Integrated payment gateways (Razorpay, Stripe, UPI)",
      "Automated dispatch challan generation and invoice PDFs",
      "Inventory synchronization with low-stock reorder alerts",
    ],
    tech: ["Next.js", "PostgreSQL / Prisma", "Redis", "Cloud Webhooks"],
  },
  {
    id: "ui-ux",
    icon: LayoutTemplate,
    title: "UI/UX & Product Design Systems",
    tag: "User Experience",
    badge: "Human-Centric",
    desc: "User-focused interface design that makes complex business operations intuitive, delightful, and error-proof. We eliminate cognitive clutter through disciplined visual hierarchy.",
    deliverables: [
      "Interactive Figma design systems and component libraries",
      "Usability testing, user journey mapping, and wireframing",
      "Dark / Light theme adaptability and mobile-first ergonomics",
      "Full compliance with WCAG accessibility guidelines",
    ],
    tech: ["Figma", "Design Tokens", "Micro-Interactions", "WCAG AA"],
  },
  {
    id: "cloud-api",
    icon: Cloud,
    title: "Cloud Infrastructure & API Integrations",
    tag: "Systems & DevOps",
    badge: "99.98% SLA",
    desc: "Resilient microservices, RESTful and GraphQL APIs, third-party ERP connectors, and secure serverless deployments built for continuous business availability.",
    deliverables: [
      "High-availability cloud setup with automated backups and failover",
      "Secure webhooks, RESTful endpoints, and enterprise integrations",
      "Database indexing, query optimization, and memory caching",
      "Security hardening, SSL/TLS enforcement, and DDoS protection",
    ],
    tech: ["AWS", "Vercel", "PostgreSQL", "Redis", "Cloudflare"],
  },
  {
    id: "maintenance",
    icon: ShieldCheck,
    title: "SLA Maintenance & Ongoing Operations",
    tag: "Long-Term Partnership",
    badge: "Continuous Security",
    desc: "Proactive engineering maintenance, monthly security audits, dependency updates, and rapid incident response to keep your core systems operating at peak performance.",
    deliverables: [
      "24/7 uptime monitoring and error telemetry reporting",
      "Scheduled monthly database backups and security vulnerability patches",
      "Performance tuning and asset compression as data grows",
      "Dedicated developer support SLA with guaranteed response windows",
    ],
    tech: ["Automated Backups", "Health Checks", "Security Scans", "Telemetry"],
  },
];

const faqs = [
  {
    q: "Do you build with WordPress or generic off-the-shelf templates?",
    a: "No. At Gayatri Technology, we maintain a strict Zero-Template Guarantee. Every platform is custom engineered from scratch using modern frameworks like Next.js and TypeScript. This ensures clean code, unmatched loading speeds, total security, and zero bloat.",
  },
  {
    q: "Who owns the intellectual property and code when the project is finished?",
    a: "You do. You retain 100% full ownership of the intellectual property, source code, repositories, database schemas, and digital assets upon project completion.",
  },
  {
    q: "How do you handle project scoping, milestones, and timelines?",
    a: "We start with a thorough requirement audit and provide a clear Technical Architecture & Milestone Schedule before any coding begins. Projects are delivered in iterative phases with continuous client demonstrations.",
  },
  {
    q: "Can you modernize an existing legacy software system without losing data?",
    a: "Yes. We frequently migrate legacy desktop applications, spreadsheets, and obsolete systems into modern, responsive cloud applications with safe, automated database migrations.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
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
              <span>Full-Lifecycle Engineering Capabilities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Bespoke Software Architectures Built for Business Impact
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              We design and construct custom web applications, industrial ERP systems, and high-performance digital platforms engineered around your specific operational workflows.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#47C56E] text-[#091C0F] px-7 py-3 rounded-full text-sm font-bold shadow-md shadow-[#47C56E]/25 hover:bg-[#3db863] transition-all active:scale-95"
              >
                <span>Request Architectural Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white text-[#091C0F] border border-[#E2E8F0] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#F0FDF4] transition-colors"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
              <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
                ENGINEERING VERTICALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#091C0F] tracking-tight font-display">
                Tailored Services, Zero Compromises
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#00875A] md:hidden">
                <span>Swipe horizontally to view all verticals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-4 md:pb-0 items-stretch">
              {detailedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="w-[88vw] max-w-[360px] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none bg-[#FAFCFF] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#47C56E]/70 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#47C56E]/12 flex items-center justify-center text-[#00875A] group-hover:bg-[#47C56E] group-hover:text-[#091C0F] transition-colors duration-200">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold text-[#00875A] bg-[#47C56E]/10 border border-[#47C56E]/20 px-2.5 py-1 rounded-full">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#091C0F] mb-3 font-display">
                        {service.title}
                      </h3>

                      <p className="text-[#475569] text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      <div className="border-t border-[#E2E8F0] pt-4 mb-6">
                        <p className="text-xs font-bold text-[#091C0F] uppercase tracking-wider mb-3 font-mono">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#47C56E] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium bg-white text-[#334155] border border-[#E2E8F0] px-2 py-0.5 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-[#E2E8F0] group-hover:border-[#47C56E] text-[#091C0F] group-hover:text-[#00875A] text-xs font-bold transition-all"
                      >
                        <span>Discuss This Solution</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Custom Solutions Breakdown */}
        <div id="custom-solutions">
          <CustomSolutionsSection />
        </div>

        {/* Industry Verticals */}
        <div id="industries">
          <IndustriesSection />
        </div>

        {/* Tech Stack */}
        <TechStackSection />

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-[#E2E8F0]">
          <div className="screen-container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
                CLARITY &amp; STANDARDS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#091C0F] tracking-tight font-display">
                Frequently Asked Technical Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFCFF] border border-[#E2E8F0] space-y-2"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#091C0F] font-display">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
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
