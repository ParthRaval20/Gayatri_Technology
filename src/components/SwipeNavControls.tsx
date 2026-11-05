"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeNavControlsProps {
  containerId: string;
  itemCount: number;
  label?: string;
  className?: string;
}

export default function SwipeNavControls({
  containerId,
  itemCount,
  label = "item",
  className = "",
}: SwipeNavControlsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const getContainer = useCallback(() => {
    return document.getElementById(containerId) as HTMLDivElement | null;
  }, [containerId]);

  const updateActiveIdx = useCallback(() => {
    const el = getContainer();
    if (!el || el.clientWidth <= 0) return;

    const containerCenter = el.scrollLeft + el.clientWidth / 2;
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;

    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIdx(Math.min(Math.max(closestIdx, 0), itemCount - 1));
  }, [getContainer, itemCount]);

  useEffect(() => {
    const el = getContainer();
    if (!el) return;

    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateActiveIdx, 40);
    };

    el.addEventListener("scroll", debouncedScroll, { passive: true });
    window.addEventListener("resize", updateActiveIdx, { passive: true });
    updateActiveIdx();

    return () => {
      clearTimeout(timeoutId);
      el.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("resize", updateActiveIdx);
    };
  }, [getContainer, updateActiveIdx]);

  const scrollToIdx = (targetIdx: number) => {
    const el = getContainer();
    if (!el) return;

    const clampedIdx = Math.min(Math.max(targetIdx, 0), itemCount - 1);
    const card = el.children[clampedIdx] as HTMLElement | null;

    if (card) {
      const containerWidth = el.clientWidth;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;
      el.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
    } else {
      const cardWidth = el.firstElementChild?.clientWidth || el.clientWidth * 0.85;
      el.scrollTo({ left: clampedIdx * (cardWidth + 16), behavior: "smooth" });
    }
    setActiveIdx(clampedIdx);
  };

  const handlePrev = () => {
    scrollToIdx(activeIdx - 1);
  };

  const handleNext = () => {
    scrollToIdx(activeIdx + 1);
  };

  if (itemCount <= 1) return null;

  return (
    <div
      className={`flex md:hidden items-center justify-between pt-3.5 px-1 select-none ${className}`}
      aria-label={`${label} navigation controls`}
    >
      {/* Live Index Dots Indicator */}
      <div className="flex items-center gap-1.5" role="tablist" aria-label={`${label} pagination`}>
        {Array.from({ length: itemCount }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToIdx(idx)}
            className={`transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              activeIdx === idx
                ? "w-6 h-2 bg-accent rounded-full"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full"
            }`}
            aria-label={`Go to ${label} ${idx + 1}`}
            aria-selected={activeIdx === idx}
          />
        ))}
        <span className="text-[11px] font-mono text-muted ml-2 font-medium">
          {activeIdx + 1} / {itemCount}
        </span>
      </div>

      {/* Prev & Next Touch Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeIdx === 0}
          className="w-10 h-10 rounded-full border border-rule bg-paper flex items-center justify-center text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer active:scale-90 shadow-2xs hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Previous ${label}`}
          title="Previous"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={activeIdx >= itemCount - 1}
          className="w-10 h-10 rounded-full border border-rule bg-paper flex items-center justify-center text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer active:scale-90 shadow-2xs hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Next ${label}`}
          title="Next"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}

