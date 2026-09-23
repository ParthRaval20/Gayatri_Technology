import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  AlertTriangle,
  Server,
  Globe,
  ShieldCheck,
  Lock,
  Database,
  FileText,
  Trash2,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Gayatri Technology. Learn how we handle client proprietary data, cloud credentials, domain records, and hosting data retention protocols.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Gayatri Technology",
    description:
      "Privacy Policy for Gayatri Technology. Learn how we handle client data, proprietary code, deployment credentials, domain records, and cloud hosting data retention.",
    url: `${siteConfig.url}/privacy-policy`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Gayatri Technology",
    description:
      "Privacy Policy for Gayatri Technology. Learn how we handle client proprietary data, cloud credentials, and domain records.",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 22, 2026";
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
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

      <main className="flex-1 py-12 sm:py-16 lg:py-20 screen-container">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00875A] hover:text-[#47C56E] uppercase tracking-wider mb-6 sm:mb-8 group transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Page Header */}
          <div className="border-b border-[#E2E8F0] pb-6 sm:pb-8 mb-8 sm:mb-10">
            <span className="text-[#00875A] font-bold text-xs uppercase tracking-wider block mb-2 font-mono">
              DATA PRIVACY &amp; SECURITY PROTOCOL
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Last Updated: <span className="font-semibold text-[#091C0F]">{lastUpdated}</span> |
              Gayatri Technology Data Governance &amp; Confidentiality Standard
            </p>
          </div>

          {/* CRITICAL CALLOUT: Domain & Hosting Cycle Data Retention Notice */}
          <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-2xl p-4 sm:p-8 mb-10 sm:mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-amber-950 font-display">
                  Important: Domain, Hosting Cycles &amp; Service Suspension Notice
                </h2>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Third-party infrastructure fees (including domain registry fees, cloud VPS, web hosting,
                  and database instances) operate on separate recurring billing schedules. In accordance
                  with our service agreement, <strong>hosting and domain payments must be fulfilled on schedule</strong>.
                </p>
                <div className="pt-2 flex items-start gap-2 text-xs font-bold text-amber-950">
                  <Server className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    Unpaid infrastructure accounts will be taken offline automatically at cycle expiry.
                    Upstream cloud hosts may purge server instances and backups if accounts remain delinquent,
                    which is outside Gayatri Technology&apos;s direct recovery liability.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Content Body */}
          <div className="space-y-12 text-[#334155] leading-relaxed text-sm sm:text-base">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00875A]" />
                <span>1. Overview &amp; Commitment to Confidentiality</span>
              </h2>
              <p>
                Gayatri Technology (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                is dedicated to safeguarding the privacy and proprietary data of our clients (&quot;Client&quot;,
                &quot;you&quot;) and visitors to our digital platforms.
              </p>
              <p>
                As an enterprise software engineering and bespoke technology firm, we frequently handle
                sensitive proprietary intellectual property, cloud configurations, API credentials, and internal
                business logic. We treat all client assets with stringent cryptographic and procedural safeguards.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#00875A]" />
                <span>2. Types of Information We Collect</span>
              </h2>
              <p>
                In the course of estimating, designing, building, and deploying digital solutions, we collect:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <h3 className="font-bold text-[#091C0F] text-sm">2.1 Client Identity &amp; Contact Details</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Full name, company legal name, corporate email address, telephone number, billing
                    address, and GSTIN registration numbers necessary for invoicing and legal contracts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <h3 className="font-bold text-[#091C0F] text-sm">2.2 Project Specifications &amp; Source Assets</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Product requirement documents (PRDs), wireframes, Figma design files, workflow diagrams,
                    database schemas, brand guidelines, and proprietary business metrics provided to build your product.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <h3 className="font-bold text-[#091C0F] text-sm">2.3 Deployment &amp; Infrastructure Credentials</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Domain registrar tokens, DNS records, Git repository accesses, AWS/Vercel/DigitalOcean
                    API keys, and third-party payment gateway keys required strictly to deploy and configure your solution.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <h3 className="font-bold text-[#091C0F] text-sm">2.4 Technical Telemetry &amp; Logs</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    IP addresses, browser client fingerprints, server response codes, and error tracking
                    telemetry captured during load testing, staging validation, and ongoing production monitoring.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Domain & Hosting Specific Privacy & Retention */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#00875A]" />
                <span>3. Domain Registration &amp; Cloud Hosting Data Handling</span>
              </h2>
              <p>
                Domain registration and cloud server provisioning require direct integration with accredited
                ICANN registrars and cloud compute vendors. Clients should understand how this data flows:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs">
                  <h3 className="font-bold text-[#091C0F] text-sm mb-1">
                    3.1 WHOIS Registrant Privacy Protection
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    When Gayatri Technology registers domains on your behalf, we implement WHOIS privacy shielding
                    where supported by registry TLD policies to conceal your private contact records from spam harvesters.
                    However, the official legal registrant rights remain fully assigned to the Client.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs">
                  <h3 className="font-bold text-[#091C0F] text-sm mb-1">
                    3.2 Dedicated Cloud Server Isolation
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Client applications, databases, and media assets are deployed in isolated environments
                    (Docker containers, independent cloud virtual private networks, or dedicated server instances)
                    ensuring no cross-tenant data contamination or unauthorized data visibility.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs">
                  <h3 className="font-bold text-[#091C0F] text-sm mb-1">
                    3.3 Payment Cycle Expiration &amp; Data Purging Protocol
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Domain and hosting fees are recurring costs separate from one-time software development.
                    If recurring renewal invoices are not settled prior to the due date:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#64748B]">
                    <li>
                      <strong>Immediate Suspension:</strong> Nameserver routing and server ports are halted,
                      taking the website, dashboard, and API endpoints immediately offline.
                    </li>
                    <li>
                      <strong>Domain Redemption Penalties:</strong> Expired domains enter registrar redemption periods
                      which incur steep international restoration penalties imposed by ICANN registrars.
                    </li>
                    <li>
                      <strong>Cloud Provider Deletion:</strong> Cloud infrastructure providers (AWS, DigitalOcean,
                      Hetzner, Vercel) automatically destroy delinquent virtual instances, databases, and attached
                      snapshots within 7 to 30 days of lapse. Gayatri Technology cannot recover destroyed cloud instances
                      resulting from client non-payment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#00875A]" />
                <span>4. Credential Storage &amp; Cryptographic Standards</span>
              </h2>
              <p>
                We do not store passwords or API secrets in plaintext:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
                <li>
                  <strong>Environment Secrets:</strong> Production secrets are stored exclusively in encrypted
                  key-vaults and managed secret managers (e.g., AWS Secrets Manager, Vercel Env Vaults).
                </li>
                <li>
                  <strong>Access Minimization:</strong> Only assigned senior software engineers with verified
                  hardware keys are granted temporary deployment permissions.
                </li>
                <li>
                  <strong>Credential Handover:</strong> Upon final project settlement and delivery, all root credentials,
                  database master passwords, and domain panel accounts are transferred to the client, after which
                  our copies are decommissioned.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display flex items-center gap-2">
                <Database className="w-5 h-5 text-[#00875A]" />
                <span>5. Disclosure to Third Parties</span>
              </h2>
              <p>
                <strong>We never sell, rent, monetize, or trade client personal information or client business data.</strong>
              </p>
              <p>
                Data is shared strictly on a need-to-know basis with audited technology partners directly essential
                for delivery, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#64748B]">
                <li>
                  <strong>Cloud Compute &amp; CDN Providers:</strong> AWS, DigitalOcean, Cloudflare, Vercel, Supabase.
                </li>
                <li>
                  <strong>Payment Gateways:</strong> Razorpay, Stripe, Cashfree (for payment links and recurring subscriptions).
                </li>
                <li>
                  <strong>Communication Channels:</strong> SendGrid, Twilio, WhatsApp Cloud API (for transactional notifications).
                </li>
                <li>
                  <strong>Statutory Regulators:</strong> If required by Indian law enforcement under official court summons or regulatory directives.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-[#00875A]" />
                <span>6. Client Data Rights &amp; Code Ownership</span>
              </h2>
              <p>
                Subject to fulfillment of all invoice obligations:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#64748B]">
                <li>
                  <strong>Right to Complete Export:</strong> Clients have the full right to export database dumps,
                  Git source code commits, media libraries, and environment files.
                </li>
                <li>
                  <strong>Right to Portability:</strong> You may migrate your domain DNS records or hosting instances
                  to any other vendor of your preference at any time.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> You may request the deletion of staging copies and developer
                  sandboxes from Gayatri Technology internal staging environments once production has launched.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                7. Cookies and Website Telemetry
              </h2>
              <p>
                Our official corporate website utilizes minimal necessary cookies and privacy-respecting
                telemetry to analyze traffic patterns, ensure CSRF token validity, and maintain session integrity.
                We do not employ intrusive cross-site tracking cookies.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                8. Contact Our Data Governance Officer
              </h2>
              <p>
                For privacy inquiries, credential revocations, or domain transfer authorizations, please contact:
              </p>
              <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-3 text-sm">
                <p className="font-bold text-[#091C0F]">Gayatri Technology — Compliance &amp; Operations</p>
                <p className="text-[#64748B]">
                  102 Dev Palace, Ankur Nagar, Rajkot 360004, Gujarat, India
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs">
                  <a
                    href="tel:+919328437392"
                    className="inline-flex items-center gap-2 text-[#00875A] font-bold hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 93284 37392</span>
                  </a>
                  <span className="hidden sm:inline text-[#CBD5E1]">|</span>
                  <a
                    href="mailto:info@gayatritechnology.in"
                    className="inline-flex items-center gap-2 text-[#00875A] font-bold hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@gayatritechnology.in</span>
                  </a>
                  <span className="hidden sm:inline text-[#CBD5E1]">|</span>
                  <span className="text-[#64748B]">Support: Mon – Sat, 9 AM – 7 PM IST</span>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Navigation CTA */}
          <div className="mt-16 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/terms-and-conditions"
              className="text-xs font-bold text-[#00875A] hover:text-[#47C56E] transition-colors"
            >
              &larr; View Terms &amp; Conditions of Service
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-[#091C0F] hover:bg-[#00875A] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
