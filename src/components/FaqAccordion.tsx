"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}

export default function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#47C56E]/60 shadow-sm"
                : "bg-[#FAFCFF] border-[#E2E8F0] hover:border-[#CBD5E1]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
              className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#47C56E]"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#091C0F] font-display pr-2">
                {item.q}
              </h3>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? "bg-[#47C56E]/15 text-[#00875A] rotate-180"
                    : "bg-[#E2E8F0]/60 text-[#64748B]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className="px-4 pb-5 sm:px-6 sm:pb-6 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] pt-3 animate-in fade-in slide-in-from-top-1 duration-200"
              >
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
