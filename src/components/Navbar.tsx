"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X, ArrowRight, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/lib/seo";

interface NavLinkItem {
  name: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/portfolio" },
  { name: "Knowledge", href: "/knowledge" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Auto-close menu when navigating
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-rule shadow-xs transition-colors duration-200 pt-safe">
      <div className="screen-container h-16 sm:h-20 flex justify-between items-center w-full">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3.5 group cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-accent"
        >
          <BrandLogo className="h-8 w-[56px] min-[360px]:h-9 min-[360px]:w-[62px] sm:h-11 sm:w-[76px] transition-transform group-hover:scale-105 duration-200 shrink-0" />
          <div className="flex flex-col shrink-0">
            <span className="text-sm min-[360px]:text-base sm:text-xl font-extrabold uppercase tracking-tight text-ink font-montserrat leading-none">
              GAYATRI
            </span>
            <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-medium tracking-[0.20em] min-[360px]:tracking-[0.22em] sm:tracking-[0.28em] uppercase text-accent mt-0.5 sm:mt-1 font-montserrat leading-none">
              TECHNOLOGY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 cursor-pointer min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-accent ${
                  isActive ? "text-accent font-bold" : "text-ink-2 hover:text-ink"
                }`}
              >
                <span>{link.name}</span>
                {/* Active Indicator Underline */}
                {isActive && (
                  <span
                    className="absolute bottom-1.5 left-0 right-0 h-[2.5px] bg-accent-light rounded-full transition-transform duration-300"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Trailing Actions (Desktop Only) - One clean phone line + one solid CTA button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+919328437392"
            className="inline-flex items-center gap-2 text-xs font-semibold text-ink-2 hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent"
            title="Call +91 93284 37392"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>+91 93284 37392</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-ink hover:bg-ink-2 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md shadow-black/10 transition-colors duration-200 active:scale-95 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Tell Us What You Need</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent-light" />
          </Link>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <div className="lg:hidden flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-ink hover:bg-emerald-50 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 bg-black/40 z-40 lg:hidden motion-safe:animate-fade-in motion-reduce:animate-none"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer with Safe Area Inset Support */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative z-50 bg-paper border-b border-rule px-4 sm:px-6 pt-4 pb-8 sm:pb-10 pb-safe shadow-lg motion-safe:animate-in motion-safe:slide-in-from-top duration-200 max-h-[85vh] max-h-[85dvh] overflow-y-auto momentum-scroll">
          <nav className="flex flex-col space-y-1.5 sm:space-y-2">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base font-semibold py-3 px-3.5 rounded-xl border transition-colors min-h-[48px] focus-visible:outline-2 focus-visible:outline-accent ${
                    isActive
                      ? "text-accent bg-emerald-50 border-emerald-200"
                      : "text-ink-2 border-transparent hover:text-ink hover:bg-paper-2"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-accent-light" : "bg-transparent"
                      }`}
                    />
                    <span>{link.name}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 ${isActive ? "text-accent" : "text-muted"}`}
                  />
                </Link>
              );
            })}
            <div className="pt-3 pb-1 space-y-2.5">
              <a
                href={`tel:${siteConfig.contact.telephone.replace(/\s+/g, "")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-paper-2 border border-rule text-ink py-3 rounded-full text-sm font-bold min-h-[48px] hover:bg-emerald-50 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call +91 93284 37392</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-full text-sm font-bold shadow-sm min-h-[48px] hover:bg-emerald-700 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>Talk Directly on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-ink text-white py-3 rounded-full text-sm font-bold shadow-md min-h-[48px] hover:bg-ink-2 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
              >
                <Calendar className="w-4 h-4 text-accent-light" />
                <span>Tell Us What You Need</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}