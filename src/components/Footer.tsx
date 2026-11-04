"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/lib/seo";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-rule border-t border-rule-dark pb-32 sm:pb-12">
      <div className="screen-container pt-8 sm:pt-10 pb-4 sm:pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 pb-6 sm:pb-7 border-b border-rule-dark">
          {/* Brand Summary Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <BrandLogo className="h-9 w-[62px] sm:h-10 sm:w-[70px] shrink-0" isDarkBackground />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-white font-montserrat leading-none">
                  GAYATRI
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.22em] sm:tracking-[0.28em] uppercase text-accent-mint mt-0.5 sm:mt-1 font-montserrat leading-none">
                  TECHNOLOGY
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-paper-2 max-w-sm leading-relaxed">
              Custom software built around the way your business actually works. We engineer custom ERPs, business web applications, and mobile operational systems for growing companies.
            </p>
            <address className="not-italic text-xs text-paper-2 space-y-1 pt-0.5 font-sans">
              <p>102 Dev Palace, Ankur Nagar, Rajkot 360004, Gujarat, India</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                <a href="tel:+919328437392" className="hover:text-accent-light transition-colors font-medium py-1 focus-visible:outline-2 focus-visible:outline-accent">
                  +91 93284 37392
                </a>
                <span className="text-rule-dark">|</span>
                <a
                  href="https://wa.me/919328437392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-medium text-accent-mint py-1 focus-visible:outline-2 focus-visible:outline-accent"
                >
                  WhatsApp
                </a>
                <span className="text-rule-dark">|</span>
                <a href="mailto:info@gayatritechnology.in" className="hover:text-accent-light transition-colors font-medium py-1 focus-visible:outline-2 focus-visible:outline-accent">
                  info@gayatritechnology.in
                </a>
              </div>
            </address>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-accent-light" />
              <span className="text-xs text-accent-mint font-sans">
                Founder-led engineering studio &mdash; Rajkot, Gujarat
              </span>
            </div>

            {/* Official Social Channels */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-paper-dark hover:bg-ink-2 border border-rule-dark text-xs font-semibold text-paper-2 hover:text-white transition-colors shadow-2xs group"
                aria-label="Follow Gayatri Technology on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:scale-105 motion-safe:transition-transform" />
                <span className="text-[11px]">@{siteConfig.social.instagram.handle.trim()}</span>
              </a>

              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-paper-dark hover:bg-ink-2 border border-rule-dark text-xs font-semibold text-paper-2 hover:text-white transition-colors shadow-2xs group"
                aria-label="Connect with Gayatri Technology on LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400 group-hover:scale-105 motion-safe:transition-transform" />
                <span className="text-[11px]">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-white">
              Services
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-paper-2">
              <li>
                <Link href="/services#custom-software" className="hover:text-accent-light transition-colors">
                  Custom Business Software
                </Link>
              </li>
              <li>
                <Link href="/services#erp-operations" className="hover:text-accent-light transition-colors">
                  ERP &amp; Operations Systems
                </Link>
              </li>
              <li>
                <Link href="/services#websites-web-apps" className="hover:text-accent-light transition-colors">
                  Websites &amp; Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="hover:text-accent-light transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="hover:text-accent-light transition-colors">
                  E-Commerce Platforms
                </Link>
              </li>
              <li>
                <Link href="/services#automation-ai" className="hover:text-accent-light transition-colors">
                  Automation &amp; Internal Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Practical Knowledge */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-white">
              Knowledge
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-paper-2">
              <li>
                <Link href="/knowledge/excel-to-erp" className="hover:text-accent-light transition-colors">
                  Excel to ERP Migration
                </Link>
              </li>
              <li>
                <Link href="/knowledge/custom-erp-vs-ready-made" className="hover:text-accent-light transition-colors">
                  Custom vs Ready-Made ERP
                </Link>
              </li>
              <li>
                <Link href="/knowledge/manufacturing-erp-essentials" className="hover:text-accent-light transition-colors">
                  Manufacturing ERP Essentials
                </Link>
              </li>
              <li>
                <Link href="/knowledge/whatsapp-excel-tally-integration" className="hover:text-accent-light transition-colors">
                  WhatsApp + Excel + Tally
                </Link>
              </li>
              <li>
                <Link href="/knowledge/custom-software-cost-india" className="hover:text-accent-light transition-colors">
                  Software Cost in India
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-accent-mint font-semibold transition-colors">
                  All Practical Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-white">
              Company
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-paper-2">
              <li>
                <Link href="/about" className="hover:text-accent-light transition-colors">
                  About Us &amp; Founder
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent-light transition-colors">
                  Our Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-accent-light transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-light transition-colors">
                  Tell Us What You Need
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919328437392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-accent-mint font-medium transition-colors"
                >
                  Direct WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram (@{siteConfig.social.instagram.handle.trim()})</span>
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-accent-light transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-rule">
          <p>© {new Date().getFullYear()} Gayatri Technology. Custom software built around the way your business works. Rajkot, Gujarat.</p>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href={siteConfig.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors flex items-center gap-1"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors flex items-center gap-1"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span className="sr-only">Instagram</span>
            </a>
            <span className="text-rule-dark">|</span>
            <Link href="/privacy-policy" className="hover:text-accent-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-accent-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
