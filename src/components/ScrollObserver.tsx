"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Mark HTML document as ready for scroll animations
    document.documentElement.classList.add("has-scroll-reveal");

    // 2. Universal selector for scroll-revealed sections, popups, and content blocks
    const SELECTOR = [
      "main > section:not(#hero)",
      ".scroll-section",
      ".scroll-popup",
      ".scroll-reveal",
      ".scroll-reveal-slow",
      ".scroll-reveal-scale",
      ".scroll-reveal-card",
      "article:not(.no-popup)",
      "[data-reveal]",
    ].join(", ");

    const revealElement = (el: Element) => {
      el.setAttribute("data-revealed", "true");
      el.classList.add("revealed");
    };

    // 3. Auto-enhance grid cards and feature lists across every page
    const enhanceCardsAcrossPage = () => {
      const sections = document.querySelectorAll("main section:not(#hero)");
      sections.forEach((section) => {
        const cardContainers = section.querySelectorAll(
          'div[class*="grid-cols-"], div[class*="snap-x"], .grid'
        );

        cardContainers.forEach((container) => {
          if (container.hasAttribute("data-popup-scanned")) return;
          container.setAttribute("data-popup-scanned", "true");

          const children = Array.from(container.children);
          if (children.length >= 2 && children.length <= 16) {
            children.forEach((child, idx) => {
              if (child instanceof HTMLElement) {
                const alreadyTagged =
                  child.classList.contains("scroll-popup") ||
                  child.classList.contains("scroll-reveal") ||
                  child.classList.contains("scroll-reveal-card") ||
                  child.classList.contains("scroll-reveal-scale");

                if (!alreadyTagged) {
                  child.classList.add("scroll-popup");
                  const staggerStep = idx % 4;
                  if (staggerStep === 1) child.classList.add("delay-100");
                  else if (staggerStep === 2) child.classList.add("delay-200");
                  else if (staggerStep === 3) child.classList.add("delay-300");
                }
              }
            });
          }
        });
      });
    };

    enhanceCardsAcrossPage();

    // 4. Set up IntersectionObserver with responsive bottom offset & low threshold
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -35px 0px",
      threshold: 0.03,
    });

    const elements = document.querySelectorAll(SELECTOR);

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If element is already in the viewport upon mount or page reload, reveal immediately
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        revealElement(el);
      } else {
        observer.observe(el);
      }
    });

    // 5. MutationObserver to observe newly added elements or restore revealed state
    const mutationObserver = new MutationObserver((mutations) => {
      let needsRescan = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const target = mutation.target as HTMLElement;
          if (
            target.getAttribute("data-revealed") === "true" &&
            !target.classList.contains("revealed")
          ) {
            target.classList.add("revealed");
          }
        } else if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          needsRescan = true;
        }
      });

      if (needsRescan) {
        enhanceCardsAcrossPage();
        const freshElements = document.querySelectorAll(SELECTOR);
        freshElements.forEach((el) => {
          if (el.getAttribute("data-revealed") !== "true") {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
              revealElement(el);
            } else {
              observer.observe(el);
            }
          }
        });
      }
    });

    mutationObserver.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "popup",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "popup" | "up" | "slow" | "scale" | "card";
}) {
  const variantClass =
    variant === "popup"
      ? "scroll-popup"
      : variant === "slow"
      ? "scroll-reveal-slow"
      : variant === "scale"
      ? "scroll-reveal-scale"
      : variant === "card"
      ? "scroll-reveal-card"
      : "scroll-reveal";

  const delayClass =
    delay === 75
      ? "delay-75"
      : delay === 100
      ? "delay-100"
      : delay === 150
      ? "delay-150"
      : delay === 200
      ? "delay-200"
      : delay === 250
      ? "delay-250"
      : delay === 300
      ? "delay-300"
      : delay === 350
      ? "delay-350"
      : delay === 400
      ? "delay-400"
      : delay === 500
      ? "delay-500"
      : "";

  return (
    <div className={`${variantClass} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
