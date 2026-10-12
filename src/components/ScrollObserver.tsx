"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Mark HTML document as ready for scroll animations
    document.documentElement.classList.add("has-scroll-reveal");

    // 2. Set up IntersectionObserver with threshold & bottom margin
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-revealed", "true");
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    });

    // 3. Observe elements with .scroll-reveal, .scroll-reveal-slow, .scroll-reveal-scale, or [data-reveal]
    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-slow, .scroll-reveal-scale, [data-reveal]"
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If element is already in the viewport upon mount or page reload, reveal immediately
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        el.setAttribute("data-revealed", "true");
        el.classList.add("revealed");
      } else {
        observer.observe(el);
      }
    });

    // 4. MutationObserver to restore revealed state if React reconciliation rewrites className
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const target = mutation.target as HTMLElement;
          if (
            target.getAttribute("data-revealed") === "true" &&
            !target.classList.contains("revealed")
          ) {
            target.classList.add("revealed");
          }
        }
      });
    });

    mutationObserver.observe(document.body, {
      attributes: true,
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
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "slow" | "scale";
}) {
  const variantClass =
    variant === "slow"
      ? "scroll-reveal-slow"
      : variant === "scale"
      ? "scroll-reveal-scale"
      : "scroll-reveal";

  const delayClass =
    delay === 100
      ? "delay-100"
      : delay === 150
      ? "delay-150"
      : delay === 200
      ? "delay-200"
      : delay === 300
      ? "delay-300"
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
