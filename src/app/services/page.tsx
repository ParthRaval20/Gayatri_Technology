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
  Clock,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { getBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services & Capabilities | Custom Business Software & ERP Systems",
  description:
    "We build custom business software, ERP systems, web applications, mobile tools, and B2B portals for growing businesses in Rajkot, Gujarat and beyond.",
  path: "/services",
  openGraphTitle: "Services & Capabilities | Gayatri Technology",
  openGraphDescription:
    "Custom business software, ERP systems, web applications, and mobile tools built around your actual workflow.",
});

interface ServiceVertical {
  id: string;
  icon: React.ElementType;
  title: string;
  tag: string;
  badge: string;
  whoNeedsIt: string;
  problem: string;
  whatWeBuild: string;
  useCase: string;
  deliverables: string[];
  deliverySpec: string;
  platform: string;
}

const detailedServices: ServiceVertical[] = [
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
    deliverySpec: "Typical Delivery: 4–6 Weeks",
    platform: "Platform: Responsive Web & Cloud Console",
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
    deliverySpec: "Typical Delivery: 6–8 Weeks",
    platform: "Platform: Android Mobile + Web ERP",
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
    deliverySpec: "Typical Delivery: 2–4 Weeks",
    platform: "Platform: Next.js SSG / SSR Web",
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
    deliverySpec: "Typical Delivery: 4–8 Weeks",
    platform: "Platform: Android & iOS Mobile",
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
    deliverySpec: "Typical Delivery: 4–6 Weeks",
    platform: "Platform: Responsive Web & Dealer Portal",
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
    deliverySpec: "Typical Delivery: 2–3 Weeks",
    platform: "Platform: Background Engines & WhatsApp Cloud API",
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
        {/* Compact Architectural Header (No pill badge, no duplicated buttons, left-aligned) */}
        <section className="pt-8 pb-10 sm:pt-14 sm:pb-16 bg-white border-b border-[#E2E8F0]">
          <div className="screen-container">
            <div className="max-w-4xl space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00875A]">
                ENGINEERING CAPABILITIES &amp; DELIVERY LIFECYCLE
              </span>
              <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display leading-[1.14]">
                Custom software systems engineered for factory floors, godowns, and growing teams.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#475569] max-w-2xl leading-relaxed pt-1">
                We build custom applications, industrial ERP systems, and web platforms designed to
                replace scattered spreadsheets and save hours of manual work every day.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid (With Buyer-Relevant Delivery Specs) */}
        <section className="py-10 sm:py-14 lg:py-18 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
          <div className="screen-container">
            {/* Mobile swipe helper */}
            <div className="mb-4 flex items-center justify-between text-xs font-semibold text-[#00875A] md:hidden px-1">
              <span>← Swipe to inspect all 6 solutions →</span>
              <span className="font-mono text-slate-400 text-[11px]">6 Services</span>
            </div>

            <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-4 md:pb-0 items-stretch">
              {detailedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="w-[88vw] max-w-[360px] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none bg-white rounded-2xl p-5 sm:p-7 sm:p-8 border border-[#E2E8F0] hover:border-[#47C56E]/70 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#091C0F] text-[#86EFAC] flex items-center justify-center transition-colors duration-200">
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

                      <div className="border-t border-[#E2E8F0] pt-4 mb-5">
                        <p className="text-xs font-bold text-[#091C0F] uppercase tracking-wider mb-2.5 font-mono">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-2 text-xs text-[#475569]">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0] space-y-3">
                      {/* Buyer-Relevant Delivery Specs on single compact 2-column row */}
                      <div className="grid grid-cols-2 gap-2 text-xs p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-mono text-[#334155]">
                        <div className="font-semibold text-[#091C0F] flex items-center gap-1.5 min-w-0">
                          <Clock className="w-3.5 h-3.5 text-[#00875A] shrink-0" />
                          <span className="truncate">{service.deliverySpec.replace("Typical Delivery: ", "")}</span>
                        </div>
                        <div className="text-slate-500 flex items-center gap-1.5 min-w-0 justify-end">
                          <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{service.platform.replace("Platform: ", "")}</span>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#091C0F] hover:bg-[#163820] text-white text-xs font-bold transition-all shadow-xs min-h-[44px]"
                      >
                        <span>Discuss This Solution</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#47C56E]" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Verticals */}
        <div id="industries">
          <IndustriesSection />
        </div>

        {/* Predictable Turnaround Sprints & Delivery Methodology (Promoted above Stack) */}
        <ProcessSection />

        {/* Tech Stack */}
        <TechStackSection />

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-[#E2E8F0]">
          <div className="screen-container max-w-4xl mx-auto">
            <div className="mb-10">
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