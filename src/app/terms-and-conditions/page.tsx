import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  AlertTriangle,
  Server,
  Globe,
  CreditCard,
  ShieldAlert,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Official Terms and Conditions of Service for Gayatri Technology. Details on development contracts, domain and hosting policies, payment cycles, and service suspension clauses.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Gayatri Technology",
    description:
      "Official Terms and Conditions of Service for Gayatri Technology. Details on development contracts, domain and hosting policies, payment cycles, and service suspension clauses.",
    url: `${siteConfig.url}/terms-and-conditions`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Gayatri Technology",
    description:
      "Official Terms and Conditions of Service for Gayatri Technology. Details on software contracts, hosting schedules, and service terms.",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 22, 2026";
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
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
              LEGAL & SERVICE CONTRACT
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#091C0F] tracking-tight font-display mb-3">
              Terms &amp; Conditions of Service
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Last Updated: <span className="font-semibold text-[#091C0F]">{lastUpdated}</span> |
              Governing Gayatri Technology Client Engagements
            </p>
          </div>

          {/* CRITICAL CALLOUT: Domain & Hosting Suspension Notice */}
          <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-2xl p-4 sm:p-8 mb-10 sm:mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-amber-950 font-display">
                  Important Notice: Domain &amp; Cloud Hosting Payment Policy
                </h2>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Domain registration, SSL certificates, VPS/cloud servers, and database hosting
                  fees are <strong>strictly separate</strong> from core design and development
                  charges. These infrastructure services operate on recurring payment cycles and
                  <strong> must be renewed prior to or on the cycle due date</strong>.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-950">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    Failure to settle hosting or domain renewals within the payment cycle will result
                    in immediate service suspension, causing your website and applications to go
                    offline.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Content Body */}
          <div className="space-y-12 text-[#334155] leading-relaxed text-sm sm:text-base">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                1. Acceptance of Terms &amp; Scope of Work
              </h2>
              <p>
                By signing a proposal, making an initial deposit, or engaging Gayatri Technology
                (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) for custom
                web development, mobile applications, software architectures, or maintenance
                services, you (&quot;Client&quot;, &quot;you&quot;) agree to be legally bound by
                these Terms and Conditions.
              </p>
              <p>
                All projects are executed strictly according to mutually agreed milestones,
                specifications, and scope of work defined in the official project quotation or
                Service Level Agreement (SLA).
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                2. Domain, Hosting &amp; Cloud Infrastructure Policy
              </h2>
              <p>
                Please read this section with particular care regarding recurring infrastructure
                costs:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-[#00875A] font-bold text-sm">
                    <Globe className="w-4 h-4" />
                    <span>2.1 Separate Billing Structure</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Charges for website design, coding, and software development do not include
                    ongoing third-party cloud hosting, dedicated servers, database instances, or
                    domain registration/renewal fees unless explicitly bundled in writing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-[#00875A] font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>2.2 Mandatory Payment Cycles</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Domain and hosting services follow strict recurring billing schedules (Annual,
                    Semi-Annual, or Monthly). Renewal invoices are sent 15 to 30 days in advance of
                    the expiration date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <Server className="w-4 h-4" />
                    <span>2.3 Automated Offline Suspension</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    If payment is not received by the specified renewal due date, upstream cloud
                    providers automatically suspend servers. <strong>Your website, web app, and
                    connected custom business emails will immediately go offline.</strong>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>2.4 Reactivation &amp; Redemption</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Restoring a suspended domain or server requires payment of outstanding dues plus
                    any upstream registrar late redemption penalties. Gayatri Technology is not
                    liable for business losses incurred while services are suspended for
                    non-payment.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <span className="font-bold block">2.5 Data Retention &amp; Permanent Deletion Warning</span>
                <p>
                  Most cloud hosting registries delete server snapshots and database records after
                  15 to 30 days of continuous non-payment. Clients must maintain local backups or
                  settle accounts promptly to avoid irreversible data loss.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                3. Milestone Payments &amp; Deliverables
              </h2>
              <p>
                Standard software projects are structured around sequential milestones:
              </p>
              <ul className="space-y-2 text-sm text-[#475569] pl-5 list-disc">
                <li>
                  <strong>Advance Deposit:</strong> Required before commencement of architecture,
                  UI/UX design, or codebase development.
                </li>
                <li>
                  <strong>Beta / Development Staging:</strong> Billed upon delivery of functional
                  staging review links.
                </li>
                <li>
                  <strong>Final Deployment &amp; Handover:</strong> Due prior to DNS propagation,
                  live server deployment, or source code repository transfer.
                </li>
              </ul>
              <p className="text-xs text-[#64748B]">
                Delays in client feedback, milestone approvals, or milestone payments exceeding 14
                business days may pause project schedules.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                4. Intellectual Property &amp; Source Code Ownership
              </h2>
              <p>
                Upon 100% full settlement of all project invoices and development fees, the Client
                obtains complete ownership of bespoke frontend code, custom business logic, assets,
                and graphic designs created explicitly for the project.
              </p>
              <p>
                Gayatri Technology reserves the right to showcase non-confidential project
                screenshots, live links, and case studies in our digital portfolio and promotional
                materials unless a formal non-disclosure agreement (NDA) explicitly states
                otherwise.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                5. Post-Launch Warranty &amp; Maintenance SLAs
              </h2>
              <p>
                All custom web projects delivered by Gayatri Technology include a complimentary 30-day
                post-launch bug-fix warranty covering functional discrepancies against the original
                scope of work.
              </p>
              <p>
                Subsequent feature additions, third-party API changes, OS updates, or ongoing
                security patching require an active Monthly Maintenance SLA or an hourly development
                work order.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall Gayatri Technology, its directors, developers, or partners be
                liable for indirect, incidental, punitive, or consequential damages (including loss of
                profits, business interruption, or data corruption) arising from third-party hosting
                outages, cyberattacks, unrenewed domains, or external API deprecations.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                7. Jurisdiction &amp; Dispute Resolution
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the
                laws of the Republic of India. Any legal dispute or arbitration arising hereunder
                shall be subject to the exclusive jurisdiction of the competent courts in{" "}
                <strong>Rajkot, Gujarat, India</strong>.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#091C0F] font-display">
                8. Contact for Billing &amp; Inquiries
              </h2>
              <p className="text-sm text-[#475569]">
                If you have questions regarding payment cycles, upcoming renewals, or legal terms:
              </p>
              <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] space-y-1 text-sm font-medium">
                <p className="text-[#091C0F] font-bold">Gayatri Technology — Legal &amp; Billing Dept.</p>
                <p className="text-[#475569]">102 Dev Palace, Ankur Nagar, Rajkot 360004, Gujarat, India</p>
                <p className="text-[#475569]">
                  Phone: <a href="tel:+919328437392" className="text-[#00875A] hover:underline font-bold">+91 93284 37392</a>
                </p>
                <p className="text-[#475569]">
                  Email: <a href="mailto:info@gayatritechnology.in" className="text-[#00875A] hover:underline font-bold">info@gayatritechnology.in</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
