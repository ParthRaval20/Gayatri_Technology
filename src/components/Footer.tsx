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
            <p className="text-sm text-[#E2E8F0]/70 max-w-sm leading-relaxed">
              Enterprise Web &amp; Software Architecture. We architect, build, and scale custom web
              platforms tailored to client business realities and high-growth objectives.
            </p>
            <address className="not-italic text-xs text-[#E2E8F0]/75 space-y-1 pt-1 font-sans">
              <p>102 Dev Palace, Ankur Nagar, Rajkot 360004, Gujarat, India</p>
              <p className="flex items-center gap-3">
                <a href="tel:+919328437392" className="hover:text-[#47C56E] transition-colors font-medium">
                  +91 93284 37392
                </a>
                <span>•</span>
                <a href="mailto:info@gayatritechnology.in" className="hover:text-[#47C56E] transition-colors font-medium">
                  info@gayatritechnology.in
                </a>
              </p>
            </address>
            <div className="flex items-center gap-2.5 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#47C56E] animate-pulse" />
              <span className="text-xs font-semibold text-[#86EFAC] font-mono">
                Zero-Template Architecture Guarantee
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
                <Link href="/services" className="hover:text-[#47C56E] transition-colors">
                  Business Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#47C56E] transition-colors">
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#47C56E] transition-colors">
                  E-Commerce Platforms
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#47C56E] transition-colors">
                  UI/UX Interface Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#47C56E] transition-colors">
                  Website Maintenance &amp; SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions & Verticals */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Solutions
            </p>
            <ul className="space-y-2 text-sm text-[#E2E8F0]/70">
              <li>
                <Link href="/services#custom-solutions" className="hover:text-[#47C56E] transition-colors">
                  Custom ERP &amp; Operations
                </Link>
              </li>
              <li>
                <Link href="/services#custom-solutions" className="hover:text-[#47C56E] transition-colors">
                  CRM &amp; Client Portals
                </Link>
              </li>
              <li>
                <Link href="/services#custom-solutions" className="hover:text-[#47C56E] transition-colors">
                  Lead Gen Platforms
                </Link>
              </li>
              <li>
                <Link href="/services#custom-solutions" className="hover:text-[#47C56E] transition-colors">
                  Admin Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services#industries" className="hover:text-[#47C56E] transition-colors">
                  Industry Sectors
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
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#47C56E] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about#process" className="hover:text-[#47C56E] transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#47C56E] transition-colors">
                  Contact &amp; Quotes
                </Link>
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
          <p>© {new Date().getFullYear()} Gayatri Technology. All rights reserved. Enterprise Web &amp; Software Architecture.</p>

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
