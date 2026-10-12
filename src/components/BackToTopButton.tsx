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
      // Appears when user has scrolled almost half of the page (>= 45% of scrollable distance)
      const isHalfScrolled = currentScroll >= scrollableDistance * 0.45;
      setIsVisible(isHalfScrolled);
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
      className={`fixed left-4 bottom-20 sm:left-6 sm:bottom-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#091C0F]/90 backdrop-blur-md border border-[#47C56E]/40 text-[#86EFAC] hover:text-[#091C0F] hover:bg-[#47C56E] hover:border-[#47C56E] shadow-lg shadow-black/30 hover:shadow-emerald-950/40 flex items-center justify-center cursor-pointer transition-all duration-300 group active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#47C56E] focus:ring-offset-2 focus:ring-offset-[#091C0F] ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
