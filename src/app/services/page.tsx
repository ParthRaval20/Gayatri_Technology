import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  Terminal,
  ShoppingBag,
  RefreshCw,
  CheckCircle2,
  Check,
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
import SwipeNavControls from "@/components/SwipeNavControls";
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
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-paper overflow-x-hidden md:overflow-x-clip w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Architectural Header - Centered with Engineering Grid Texture */}
        <section className="scroll-section relative pt-12 pb-14 sm:pt-16 sm:pb-20 bg-paper border-b border-rule overflow-hidden">
          {/* Subtle Engineering Grid Background with Radial Edge Fade */}
          <div
            className="absolute inset-0 pointer-events-none select-none"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:32px_32px]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, #000 35%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, #000 35%, transparent 100%)",
              }}
            />
          </div>

          <div className="screen-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-reveal">
              {/* Left Column: Left-Aligned Editorial Architecture (Col 1-7/8) */}
              <div className="lg:col-span-7 xl:col-span-8 text-left space-y-5 sm:space-y-6">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider uppercase text-accent bg-accent/10 border border-accent/25 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>ENGINEERING CAPABILITIES &bull; 6 CORE DISCIPLINES</span>
                </div>

                {/* Main Headline - Left-aligned, 3 lines with color contrast */}
                <h1 className="text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-extrabold tracking-tight font-display leading-[1.12] text-balance">
                  <span className="text-zinc-900">
                    Custom software systems engineered<br className="hidden sm:inline" />{" "}
                    for{" "}
                  </span>
                  <span className="text-emerald-800">
                    factory floors, godowns,<br className="hidden sm:inline" />{" "}
                    and growing teams.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-ink-2 max-w-2xl leading-relaxed">
                  We build custom applications, industrial ERP systems, and web platforms designed to
                  replace scattered spreadsheets and save hours of manual work every day.
                </p>

                {/* Bordered Trust Pills with Checkmark Icons */}
                <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-start gap-2.5 sm:gap-3">
                  <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200/80 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-700 shadow-2xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                    <span>Direct lead engineer access</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200/80 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-700 shadow-2xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                    <span>100% source code ownership</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200/80 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-700 shadow-2xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                    <span>Zero monthly per-seat licensing fees</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Engineering Telemetry / Spec Sheet Card (Col 8/9-12) */}
              <div className="lg:col-span-5 xl:col-span-4 w-full">
                <div className="bg-paper rounded-2xl border border-rule shadow-sm p-5 sm:p-6 relative group overflow-hidden">
                  {/* Subtle Top Accent Hairline */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-emerald-400" />

                  {/* Card Header Rail */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-rule">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider uppercase text-muted">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span>DEPLOYMENT SPEC SHEET</span>
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                      VERIFIED
                    </span>
                  </div>

                  {/* Spec Rows Matrix */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-start justify-between gap-3 pb-2.5 border-b border-rule/60">
                      <div>
                        <p className="font-mono text-[10px] uppercase text-muted tracking-wider">01 // DELIVERY CYCLE</p>
                        <p className="text-sm font-bold text-ink mt-0.5">2 to 8 Weeks</p>
                      </div>
                      <span className="text-[11px] text-muted text-right font-medium">Milestone sprints</span>
                    </div>

                    <div className="flex items-start justify-between gap-3 pb-2.5 border-b border-rule/60">
                      <div>
                        <p className="font-mono text-[10px] uppercase text-muted tracking-wider">02 // CODE &amp; IP ASSETS</p>
                        <p className="text-sm font-bold text-ink mt-0.5">100% Client Owned</p>
                      </div>
                      <span className="text-[11px] text-muted text-right font-medium">Zero vendor lock-in</span>
                    </div>

                    <div className="flex items-start justify-between gap-3 pb-2.5 border-b border-rule/60">
                      <div>
                        <p className="font-mono text-[10px] uppercase text-muted tracking-wider">03 // LICENSING MODEL</p>
                        <p className="text-sm font-bold text-ink mt-0.5">₹0 / User / Month</p>
                      </div>
                      <span className="text-[11px] text-muted text-right font-medium">Unlimited team seats</span>
                    </div>

                    <div className="flex items-start justify-between gap-3 pb-2.5 border-b border-rule/60">
                      <div>
                        <p className="font-mono text-[10px] uppercase text-muted tracking-wider">04 // TARGET HARDWARE</p>
                        <p className="text-sm font-bold text-ink mt-0.5">Web + Mobile Android</p>
                      </div>
                      <span className="text-[11px] text-muted text-right font-medium">Shop-floor &amp; office</span>
                    </div>
                  </div>

                  {/* Bottom Micro Footer */}
                  <div className="mt-3.5 pt-3 flex items-center justify-between text-[11px] font-mono text-muted">
                    <span>WARRANTY: 30-DAY SUPPORT</span>
                    <a
                      href="#custom-software"
                      className="text-accent hover:text-accent-dark font-bold inline-flex items-center gap-1 transition-colors group-hover:translate-x-0.5 duration-150"
                    >
                      <span>6 Disciplines</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid (With Buyer-Relevant Delivery Specs) */}
        <section className="scroll-section py-10 sm:py-14 lg:py-18 bg-paper-2 border-b border-rule overflow-hidden">
          <div className="screen-container">
            {/* Mobile swipe helper */}
            <div className="mb-4 flex items-center justify-between text-xs font-semibold text-accent md:hidden px-1">
              <span>← Swipe to inspect all 6 solutions →</span>
              <span className="font-mono text-muted text-[11px]">6 Services</span>
            </div>

            <div
              id="services-card-slider"
              className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-4 md:pb-0 items-stretch"
            >
              {detailedServices.map((service, idx) => {
                const Icon = service.icon;
                const delayClass = (idx % 3) === 1 ? "delay-100" : (idx % 3) === 2 ? "delay-200" : "";
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`scroll-popup ${delayClass} w-[88vw] max-w-[360px] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none bg-paper rounded-2xl p-5 sm:p-7 sm:p-8 border border-rule hover:border-accent-light/70 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-ink text-accent-mint flex items-center justify-center transition-colors duration-200">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full font-mono">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-ink mb-1 font-display">
                        {service.title}
                      </h3>

                      <p className="text-accent text-xs font-semibold mb-2">
                        {service.whoNeedsIt}
                      </p>

                      <p className="text-muted text-xs leading-relaxed mb-4">
                        <strong className="text-ink font-semibold">Problem:</strong> {service.problem}
                      </p>

                      <div className="border-t border-rule pt-4 mb-5">
                        <p className="text-xs font-bold text-ink uppercase tracking-wider mb-2.5 font-mono">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-2 text-xs text-ink-2">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-rule space-y-3">
                      {/* Buyer-Relevant Delivery Specs on single compact 2-column row */}
                      <div className="grid grid-cols-2 gap-2 text-xs p-2.5 rounded-lg bg-paper-2 border border-rule text-[11px] font-mono text-ink-2">
                        <div className="font-semibold text-ink flex items-center gap-1.5 min-w-0">
                          <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">{service.deliverySpec.replace("Typical Delivery: ", "")}</span>
                        </div>
                        <div className="text-muted flex items-center gap-1.5 min-w-0 justify-end">
                          <Layers className="w-3.5 h-3.5 text-muted shrink-0" />
                          <span className="truncate">{service.platform.replace("Platform: ", "")}</span>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-ink hover:bg-ink-2 text-white text-xs font-bold transition-all shadow-xs min-h-[44px]"
                      >
                        <span>Discuss This Solution</span>
                        <ArrowRight className="w-3.5 h-3.5 text-accent-mint" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Navigation Controls & Indicator at Bottom of Card Swipe */}
            <SwipeNavControls
              containerId="services-card-slider"
              itemCount={detailedServices.length}
              label="solution"
            />
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
        <section className="scroll-section py-12 sm:py-16 lg:py-20 bg-paper border-y border-rule">
          <div className="screen-container max-w-4xl mx-auto">
            <div className="mb-10">
              <span className="text-accent font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
                CLARITY &amp; STANDARDS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight font-display">
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