"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const totalDocHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = totalDocHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        setIsVisible(false);
        return;
      }

      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      // Appears when user has scrolled past the hero area (>= 400px) or >= 35% of scrollable distance
      const isScrolled = currentScroll >= 400 || currentScroll >= scrollableDistance * 0.35;
      setIsVisible(isScrolled);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll back to top"
      className={`flex fixed right-4 sm:right-6 md:right-8 bottom-[calc(4.75rem+var(--sab))] md:bottom-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-ink/90 backdrop-blur-md border border-rule-dark text-accent-light hover:text-ink hover:bg-accent-mint hover:border-accent-mint shadow-lg shadow-black/30 items-center justify-center cursor-pointer transition-all duration-300 group active:scale-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
