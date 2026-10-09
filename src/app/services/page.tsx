import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  Terminal,
  ShoppingBag,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Smartphone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services & Capabilities | Custom Business Software & ERP Systems",
  description:
    "We build custom business software, ERP systems, web applications, mobile tools, and B2B portals for growing businesses in Rajkot, Gujarat and beyond.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Capabilities | Gayatri Technology",
    description:
      "Custom business software, ERP systems, web applications, and mobile tools built around your actual workflow.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Gayatri Technology",
    description:
      "Custom business software and ERP systems built around how your business works.",
  },
};

const detailedServices = [
  {
    id: "custom-software",
    icon: Terminal,
    title: "Custom Business Software",
    tag: "Internal Operations",
    badge: "Built For Your Workflow",
    whoNeedsIt: "Companies whose operations are too unique for generic off-the-shelf software.",
    problem: "Staff spend hours re-typing the same order details into multiple disconnected spreadsheets.",
    whatWeBuild: "Centralized operational engines, approval chains, customer ledgers, and team dispatch tools.",
    useCase: "Consolidating 5 separate Excel trackers into one clean software dashboard that everyone can access.",
    deliverables: [
      "Role-based access control (Admin, Manager, Operator)",
      "Centralized order, quotation, and payment tracking",
      "Automated operational reporting and export to PDF/Excel",
      "Direct WhatsApp and email notification triggers",
    ],
    tech: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    id: "erp-operations",
    icon: Cpu,
    title: "ERP & Operations Systems",
    tag: "Manufacturing & Yard",
    badge: "Live Inventory & Dispatch",
    whoNeedsIt: "Manufacturers, metal suppliers, fabricators, and multi-branch industrial groups.",
    problem: "Stock counts are constantly out of date, and issuing delivery challans involves manual calculations.",
    whatWeBuild: "Piece-by-piece and batch inventory tracking, shape-aware auto weight engines, and digital challans.",
    useCase: "A steel wholesaler tracking tonnes across Rajkot and Jamnagar facilities with instant challan printing.",
    deliverables: [
      "Multi-facility stock synchronization with low-stock alerts",
      "Shape-aware weight formula engine (Round, Flat, Pipe, Sheet)",
      "Digital delivery challans with customer GSTIN and lorry details",
      "Customer ledger statements and pending payment tracking",
    ],
    tech: ["React Native", "Next.js", "Python", "PostgreSQL"],
  },
  {
    id: "websites-web-apps",
    icon: Globe,
    title: "Websites & Web Applications",
    tag: "Brand & Inquiries",
    badge: "Search & Conversion",
    whoNeedsIt: "Businesses that want an authoritative web presence that brings in real buyer inquiries.",
    problem: "Outdated, slow website templates that fail to explain technical capability or rank on Google.",
    whatWeBuild: "Fast company websites, interactive product catalogs, specification search, and inquiry forms.",
    useCase: "An industrial manufacturer showcasing 30+ technical specifications with 1-click WhatsApp quote buttons.",
    deliverables: [
      "Custom responsive design tailored to your company identity",
      "Fast page load optimized for mobile networks across India",
      "Structured SEO schema and local business search optimization",
      "Direct integration with WhatsApp and inquiry notification emails",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Semantic HTML5"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Applications",
    tag: "Floor & Field Operations",
    badge: "Shop-Floor Ready",
    whoNeedsIt: "Companies with warehouse supervisors, delivery drivers, or field sales agents.",
    problem: "Workers on factory floors or delivery trucks cannot carry laptops to record stock or orders.",
    whatWeBuild: "Fast, rugged mobile applications with large buttons, barcode support, and offline-friendly data.",
    useCase: "Warehouse supervisors recording incoming stock and verifying piece weights directly on mobile.",
    deliverables: [
      "Cross-platform Android and iOS application",
      "Offline-friendly architecture for poor-network warehouse zones",
      "Camera barcode and document scanning support",
      "Instant PDF challan generation and sharing",
    ],
    tech: ["React Native", "TypeScript", "REST APIs"],
  },
  {
    id: "ecommerce-b2b",
    icon: ShoppingBag,
    title: "E-Commerce & B2B Portals",
    tag: "Wholesale & Commerce",
    badge: "Dealers & Orders",
    whoNeedsIt: "Wholesalers, brand distributors, and manufacturers dealing with high repeat orders.",
    problem: "Taking orders through voice calls leads to wrong item dispatches, pricing confusion, and delayed billing.",
    whatWeBuild: "B2B client portals with customer-specific pricing tiers, credit limits, and ledger histories.",
    useCase: "Dealers logging into their account to re-order items at their agreed contract rate.",
    deliverables: [
      "Customer-specific tier pricing and payment credit terms",
      "Live inventory allocation preventing overselling",
      "Automated tax and GST invoice generation",
      "Integrated payment gateways (UPI, Netbanking, Cards)",
    ],
    tech: ["Next.js", "PostgreSQL", "Razorpay", "Cloud Webhooks"],
  },
  {
    id: "automation-ai",
    icon: RefreshCw,
    title: "Automation & Workflow Tools",
    tag: "Time Savers",
    badge: "Connected Tools",
    whoNeedsIt: "Businesses tired of paying staff to perform repetitive, copy-paste tasks every day.",
    problem: "Team members spend half their day manually copying data between WhatsApp, sheets, and invoices.",
    whatWeBuild: "Automatic WhatsApp document dispatch, spreadsheet bridges, and database synchronization.",
    useCase: "Automatically sending a PDF delivery challan to a client's WhatsApp as soon as the dispatch is marked complete.",
    deliverables: [
      "Official WhatsApp Cloud API transactional notifications",
      "Automated data pipelines connecting sheets and databases",
      "Intelligent stock query and purchasing advisor bots",
      "Custom webhook connectors for third-party tools",
    ],
    tech: ["Python", "FastAPI", "WhatsApp Cloud API", "Background Tasks"],
  },
];

const faqs = [
  {
    q: "How do you price custom software projects?",
    a: "We work on transparent, fixed-scope milestone contracts. Once we map out your screens and database needs, you receive a fixed quotation with no surprise billing. We do not charge per-user monthly license taxes.",
  },
  {
    q: "Can our existing Tally or accounting data connect with the system?",
    a: "Yes. Many of our clients continue to use Tally for their chartered accountant and final tax filing, while using our custom software for daily operations, stock allocation, quotations, and lorry dispatch.",
  },
  {
    q: "Do we get 100% ownership of our code and data?",
    a: "Yes, completely. Upon final milestone payment, you own 100% of the custom codebase and database. We deploy directly to your cloud account (e.g. AWS, DigitalOcean, Hetzner), ensuring zero vendor lock-in.",
  },
  {
    q: "Can the software work for factory workers on their phones?",
    a: "Yes. We design mobile and tablet-first screens specifically for warehouse and shop-floor conditions: large buttons, minimal typing, high-contrast layouts, and instant photo or barcode capture.",
  },
  {
    q: "What support is provided after launch?",
    a: "Every project includes a 30-day post-launch warranty covering any functional bugs. Afterwards, we offer flexible monthly maintenance support or work on feature additions as your business grows.",
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
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18 lg:py-20 custom-grid-bg border-b border-[#E2E8F0]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(71,197,110,0.12),transparent_70%)] pointer-events-none -z-10" />

          <div className="screen-container max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47C56E]/12 border border-[#47C56E]/30 text-[#00875A] text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#47C56E] shrink-0" />
              <span>Full-Lifecycle Software Development • Rajkot, Gujarat</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#091C0F] tracking-tight leading-tight font-display">
              Software built around your actual business workflow
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              We build custom applications, industrial ERP systems, and web platforms designed to
              replace scattered spreadsheets and save hours of manual work every day.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#47C56E] text-[#091C0F] px-7 py-3.5 rounded-full text-sm font-bold shadow-md shadow-[#47C56E]/25 hover:bg-[#3db863] transition-all active:scale-95"
              >
                <span>Tell Us What You Need</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white text-[#091C0F] border border-[#E2E8F0] px-6 py-3.5 rounded-full text-sm font-bold hover:bg-[#F0FDF4] transition-colors"
              >
                <span>See Our Real Work</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0] overflow-hidden">
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

                      <h3 className="text-xl font-bold text-[#091C0F] mb-1 font-display">
                        {service.title}
                      </h3>

                      <p className="text-[#00875A] text-xs font-semibold mb-2">
                        {service.whoNeedsIt}
                      </p>

                      <p className="text-[#475569] text-xs leading-relaxed mb-4">
                        <strong className="text-[#091C0F]">Problem:</strong> {service.problem}
                      </p>

                      <div className="border-t border-[#E2E8F0] pt-4 mb-6">
                        <p className="text-xs font-bold text-[#091C0F] uppercase tracking-wider mb-3 font-mono">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-2 text-xs text-[#475569]">
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

        {/* Predictable Turnaround Sprints & Delivery Methodology */}
        <ProcessSection />

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

            <FaqAccordion items={faqs} defaultOpenIndex={0} />
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
