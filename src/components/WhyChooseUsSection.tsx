"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";
import FounderPhoto from "./FounderPhoto";

const compactPrinciples = [
  {
    num: "01",
    title: "Understand Before Building",
    summary: "Audit physical registers & Excel before writing code.",
  },
  {
    num: "02",
    title: "Build For The Workflow",
    summary: "Software adapts to the factory floor, never vice-versa.",
  },
  {
    num: "03",
    title: "Keep It Practical",
    summary: "Large touch buttons for operators wearing gloves.",
  },
  {
    num: "04",
    title: "Build For The Long Term",
    summary: "Clean TypeScript/Python with 100% code ownership.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="scroll-section py-16 sm:py-20 lg:py-24 bg-paper border-b border-rule">
      <div className="screen-container space-y-12 sm:space-y-16">
        {/* Founder Commitment: Signed Personal Letter on the Left + Direct Access */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Founder Letter */}
          <div className="lg:col-span-7 bg-paper-2 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-rule shadow-xs space-y-6 scroll-reveal">
            <div className="flex items-center justify-between border-b border-rule pb-4">
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                FOUNDER COMMITMENT &bull; DIRECT RESPONSIBILITY
              </span>
              <span className="text-[11px] font-semibold text-muted bg-paper px-2.5 py-0.5 rounded-full border border-rule">
                Rajkot, Gujarat
              </span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-ink-2 leading-relaxed">
              <p>
                &ldquo;Gayatri Technology started with a simple observation in Rajkot: growing
                businesses were spending good money on software that created more work instead of less.
                Generic templates and off-the-shelf software forced people into unnatural workflows.&rdquo;
              </p>
              <p>
                &ldquo;We take personal responsibility for every system we build. You talk directly
                to the people designing and coding your application, and we stick with you until it
                actually runs smoothly in your daily operations.&rdquo;
              </p>
            </div>

            {/* Signed Footer */}
            <div className="pt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <FounderPhoto size="sm" />
                <div>
                  <h4 className="text-base font-bold text-ink font-display">Parth Raval</h4>
                  <p className="text-xs text-accent font-semibold">Founder &amp; Lead Software Engineer</p>
                </div>
              </div>

              {/* Direct access phone & whatsapp */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                <a
                  href="tel:+919328437392"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-paper border border-rule hover:border-ink text-xs font-bold text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>+91 93284 37392</span>
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors focus-visible:outline-2 focus-visible:outline-accent min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Reassurances */}
          <div className="lg:col-span-5 space-y-4 scroll-reveal delay-150">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block">
              DIRECT ACCOUNTABILITY &bull; ZERO AGENCY FLUFF
            </span>
            <h3 className="text-[length:var(--text-title)] sm:text-3xl font-extrabold text-ink font-display leading-tight">
              Engineers who care about your balance sheet, not billable hours.
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Every project is backed by direct lead engineer access, transparent milestone billing,
              a 30-day on-floor warranty, and 100% source code ownership.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="p-3 rounded-xl bg-paper-2 border border-rule flex items-center gap-2.5 text-xs text-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>100% Source code handover upon project completion</span>
              </div>
              <div className="p-3 rounded-xl bg-paper-2 border border-rule flex items-center gap-2.5 text-xs text-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Zero recurring per-user software licensing taxes</span>
              </div>
              <div className="p-3 rounded-xl bg-paper-2 border border-rule flex items-center gap-2.5 text-xs text-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>30-Day post-deployment floor adoption warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Principles Condensed: Compact 4-Column Horizontal Strip */}
        <div className="pt-6 border-t border-rule scroll-reveal delay-100">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                OUR ENGINEERING PRINCIPLES
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-ink font-display mt-0.5">
                Four rules behind every system we ship
              </h3>
            </div>
            <Link
              href="/about"
              className="text-xs font-bold text-accent hover:text-ink inline-flex items-center gap-1 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span>Read Our Full Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {compactPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-paper-2 border border-rule space-y-1.5 hover:border-accent-light/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                    {item.num}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-light" />
                </div>
                <h4 className="text-sm font-bold text-ink font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}