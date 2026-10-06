"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#091C0F] text-[#E2E8F0] border-t border-[#163820] pb-28 md:pb-safe">
      <div className="screen-container py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-[#163820]">
          {/* Brand Summary Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <BrandLogo className="h-9 w-[62px] sm:h-11 sm:w-[76px] shrink-0" isDarkBackground />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-white font-[family-name:var(--font-montserrat)] leading-none">
                  GAYATRI
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#86EFAC] mt-0.5 sm:mt-1 font-[family-name:var(--font-montserrat)] leading-none">
                  TECHNOLOGY
                </span>
              </div>
            </div>
            <p className="text-sm text-[#E2E8F0]/80 max-w-sm leading-relaxed">
              Custom software built around the way your business actually works. We engineer custom ERPs, business web applications, and mobile operational systems for growing companies.
            </p>
            <address className="not-italic text-xs text-[#E2E8F0]/75 space-y-1 pt-1 font-sans">
              <p>102 Dev Palace, Ankur Nagar, Rajkot 360004, Gujarat, India</p>
              <p className="flex flex-wrap items-center gap-3 pt-1">
                <a href="tel:+919328437392" className="hover:text-[#47C56E] transition-colors font-medium">
                  +91 93284 37392
                </a>
                <span>•</span>
                <a
                  href="https://wa.me/919328437392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium text-[#86EFAC]"
                >
                  WhatsApp
                </a>
                <span>•</span>
                <a href="mailto:info@gayatritechnology.in" className="hover:text-[#47C56E] transition-colors font-medium">
                  info@gayatritechnology.in
                </a>
              </p>
            </address>
            <div className="flex items-center gap-2.5 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#47C56E]" />
              <span className="text-xs text-[#86EFAC] font-mono">
                Founder-led engineering studio • Rajkot, Gujarat
              </span>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Services
            </p>
            <ul className="space-y-2 text-sm text-[#E2E8F0]/70">
              <li>
                <Link href="/services#custom-software" className="hover:text-[#47C56E] transition-colors">
                  Custom Business Software
                </Link>
              </li>
              <li>
                <Link href="/services#erp-operations" className="hover:text-[#47C56E] transition-colors">
                  ERP &amp; Operations Systems
                </Link>
              </li>
              <li>
                <Link href="/services#websites-web-apps" className="hover:text-[#47C56E] transition-colors">
                  Websites &amp; Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="hover:text-[#47C56E] transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="hover:text-[#47C56E] transition-colors">
                  E-Commerce Platforms
                </Link>
              </li>
              <li>
                <Link href="/services#automation-ai" className="hover:text-[#47C56E] transition-colors">
                  Automation &amp; Internal Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Practical Knowledge */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Knowledge
            </p>
            <ul className="space-y-2 text-sm text-[#E2E8F0]/70">
              <li>
                <Link href="/knowledge/excel-to-erp" className="hover:text-[#47C56E] transition-colors">
                  Excel to ERP Migration
                </Link>
              </li>
              <li>
                <Link href="/knowledge/custom-erp-vs-ready-made" className="hover:text-[#47C56E] transition-colors">
                  Custom vs Ready-Made ERP
                </Link>
              </li>
              <li>
                <Link href="/knowledge/manufacturing-erp-essentials" className="hover:text-[#47C56E] transition-colors">
                  Manufacturing ERP Essentials
                </Link>
              </li>
              <li>
                <Link href="/knowledge/whatsapp-excel-tally-integration" className="hover:text-[#47C56E] transition-colors">
                  WhatsApp + Excel + Tally
                </Link>
              </li>
              <li>
                <Link href="/knowledge/custom-software-cost-india" className="hover:text-[#47C56E] transition-colors">
                  Software Cost in India
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-[#86EFAC] font-semibold transition-colors">
                  All Practical Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Company
            </p>
            <ul className="space-y-2 text-sm text-[#E2E8F0]/70">
              <li>
                <Link href="/about" className="hover:text-[#47C56E] transition-colors">
                  About Us &amp; Founder
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#47C56E] transition-colors">
                  Our Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#47C56E] transition-colors">
                  Tell Us What You Need
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919328437392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-[#86EFAC] font-medium transition-colors"
                >
                  Direct WhatsApp Chat
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#47C56E] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#47C56E] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E2E8F0]/60">
          <p>© {new Date().getFullYear()} Gayatri Technology. Custom software built around the way your business works. Rajkot, Gujarat.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#47C56E] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#47C56E] transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#47C56E] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#47C56E]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
