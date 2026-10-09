"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "fade";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-y-0 opacity-100";
    if (direction === "up") return "translate-y-4 opacity-0";
    if (direction === "down") return "-translate-y-4 opacity-0";
    return "opacity-0";
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "500ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
