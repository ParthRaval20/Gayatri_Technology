"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface NavLinkItem {
  name: string;
  href: string;
  id: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Solutions", href: "#solutions", id: "solutions" },
  { name: "Industries", href: "#industries", id: "industries" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Process", href: "#process", id: "process" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const initialId = window.location.hash.replace("#", "");
      if (navLinks.some((l) => l.id === initialId)) {
        return initialId;
      }
    }
    return "hero";
  });
  const pathname = usePathname();
  const isManualScrolling = useRef(false);
  const manualScrollTimer = useRef<NodeJS.Timeout | null>(null);

  // Scroll spy effect to highlight the current section dynamically on scroll
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      // If user recently clicked a tab, ignore scroll events until smooth scroll completes
      if (isManualScrolling.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // When near bottom of page, highlight Contact
      if (scrollY + windowHeight >= documentHeight - 120) {
        setActiveSection("contact");
        return;
      }

      // When near top of page, highlight Home/Hero
      if (scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // Section detection with sticky navbar offset (h-20 is 80px)
      const navbarOffset = 90;
      let currentSection = "hero";

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const sectionTop = el.offsetTop - navbarOffset - 40;
          if (scrollY >= sectionTop) {
            currentSection = link.id;
          }
        }
      }

      setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const rafId = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
      if (manualScrollTimer.current) {
        clearTimeout(manualScrollTimer.current);
      }
    };
  }, [pathname]);

  // Handle manual tab click smoothly with offset
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      if (pathname === "/") {
        e.preventDefault();
        setActiveSection(targetId);

        // Lock auto-scroll detection during smooth scroll animation
        isManualScrolling.current = true;
        if (manualScrollTimer.current) {
          clearTimeout(manualScrollTimer.current);
        }
        manualScrollTimer.current = setTimeout(() => {
          isManualScrolling.current = false;
        }, 900);

        const el = document.getElementById(targetId);
        if (el) {
          const navbarHeight = 80;
          const targetPosition =
            el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Update hash in URL cleanly
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    },
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs transition-all duration-200 pt-safe">
      <div className="screen-container h-16 sm:h-20 flex justify-between items-center w-full">
        {/* Brand */}
        <Link
          href={pathname === "/" ? "#hero" : "/#hero"}
          onClick={(e) => scrollToSection(e, "hero")}
          className="flex items-center gap-2 sm:gap-3.5 group cursor-pointer shrink-0"
        >
          <BrandLogo className="h-9 w-[62px] sm:h-11 sm:w-[76px] transition-transform group-hover:scale-105 duration-200 shrink-0" />
          <div className="flex flex-col shrink-0">
            <span className="text-base sm:text-xl font-extrabold uppercase tracking-tight text-[#091C0F] font-[family-name:var(--font-montserrat)] leading-none">
              GAYATRI
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#00875A] mt-0.5 sm:mt-1 font-[family-name:var(--font-montserrat)] leading-none">
              TECHNOLOGY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {navLinks.map((link) => {
            const isActive = pathname === "/" && activeSection === link.id;

            return (
              <Link
                key={link.name}
                href={pathname === "/" ? link.href : `/${link.href}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 cursor-pointer min-h-[44px] flex items-center ${
                  isActive ? "text-[#091C0F]" : "text-[#475569] hover:text-[#091C0F]"
                }`}
              >
                <span>{link.name}</span>
                {/* Dynamic & Manual Active Underline */}
                {isActive && (
                  <span
                    className="absolute bottom-1 left-0 right-0 h-[2.5px] bg-[#47C56E] rounded-full shadow-[0_1px_4px_rgba(71,197,110,0.5)] transition-all duration-300 animate-in fade-in zoom-in-95"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Trailing Action (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={pathname === "/" ? "#contact" : "/#contact"}
            onClick={(e) => scrollToSection(e, "contact")}
            className="inline-flex items-center gap-2 bg-[#47C56E] text-[#091C0F] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#3db863] shadow-md shadow-[#47C56E]/20 hover:shadow-lg hover:shadow-[#47C56E]/30 transition-all duration-200 active:scale-95 cursor-pointer min-h-[44px]"
          >
            <Calendar className="w-4 h-4 text-[#091C0F]" />
            <span>Let&apos;s Talk</span>
          </Link>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <div className="lg:hidden flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#091C0F] hover:bg-[#F0FDF4] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Safe Area Inset Support */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 sm:px-6 pt-4 pb-6 pb-safe shadow-lg animate-in slide-in-from-top duration-200 max-h-[85vh] max-h-[85dvh] overflow-y-auto momentum-scroll">
          <nav className="flex flex-col space-y-1.5 sm:space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === "/" && activeSection === link.id;

              return (
                <Link
                  key={link.name}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, link.id);
                  }}
                  className={`flex items-center justify-between text-base font-semibold py-3 px-3.5 rounded-xl border border-transparent transition-colors min-h-[48px] ${
                    isActive
                      ? "text-[#00875A] bg-[#F0FDF4] border-[#86EFAC]/50"
                      : "text-[#475569] hover:text-[#091C0F] hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#47C56E]" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-transparent" />
                    )}
                    <span>{link.name}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 ${isActive ? "text-[#00875A]" : "text-gray-400"}`}
                  />
                </Link>
              );
            })}
            <div className="pt-3 pb-3">
              <Link
                href={pathname === "/" ? "#contact" : "/#contact"}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection(e, "contact");
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#47C56E] text-[#091C0F] py-3.5 rounded-full text-sm font-bold shadow-md shadow-[#47C56E]/20 min-h-[48px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Let&apos;s Talk — Schedule Project Review</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
