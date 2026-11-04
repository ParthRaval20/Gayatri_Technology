"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function CtaBanner() {
  return (
    <section className="scroll-section py-12 sm:py-16 bg-paper-2">
      <div className="screen-container">
        <div className="bg-ink text-rule rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 border border-rule-dark scroll-reveal-scale">
          <div className="max-w-2xl space-y-2">
            <span className="text-accent-mint font-bold text-xs uppercase tracking-wider block font-mono">
              LET&apos;S TALK
            </span>
            <h2 className="text-[length:var(--text-section)] tracking-[var(--tracking-display)] leading-[1.12] font-extrabold text-white tracking-tight font-display">
              Have a business problem that software could solve?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-paper-2 leading-relaxed">
              Tell us what you&apos;re trying to build or what isn&apos;t working today. We&apos;ll help
              you figure out what makes sense.
            </p>

            <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-center gap-2 min-[480px]:gap-4 pt-2 text-xs text-paper-2">
              <a
                href={`tel:${siteConfig.contact.telephone.replace(/\s+/g, "")}`}
                className="hover:text-accent-light transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-accent"
              >
                <Phone className="w-3.5 h-3.5 text-accent-light" />
                <span>{siteConfig.contact.telephone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-accent-light transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-accent"
              >
                <Mail className="w-3.5 h-3.5 text-accent-light" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <span>Rajkot, Gujarat</span>
            </div>
          </div>

          <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-accent-light text-ink px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold hover:bg-emerald-400 transition-colors focus-visible:outline-2 focus-visible:outline-accent shadow-md shadow-black/10 group min-h-[48px]"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="w-4 h-4 text-ink group-hover:translate-x-1 motion-safe:transition-transform motion-reduce:transform-none" />
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-900/60 text-accent-mint border border-emerald-700 hover:bg-emerald-800/80 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-accent cursor-pointer min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-accent-mint" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

