"use client";

import React, { useState } from "react";
import { Copy, Check, Quote } from "lucide-react";

interface CitationBoxProps {
  title: string;
  slug: string;
  authorName: string;
  publishedDate: string;
}

export default function CitationBox({
  title,
  slug,
  authorName,
  publishedDate,
}: CitationBoxProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [activeFormat, setActiveFormat] = useState<"apa" | "bibtex" | "markdown" | "html">("apa");

  const fullUrl = `https://gayatritechnology.in/knowledge/${slug}`;
  const yearMatch = publishedDate.match(/\d{4}/);
  const year = yearMatch ? yearMatch[0] : "2026";

  const formats = {
    apa: `${authorName}. (${year}). ${title}. Gayatri Technology Practical Engineering Guides. ${fullUrl}`,
    bibtex: `@article{raval${year}_${slug.replace(/[^a-zA-Z0-9]/g, "_")},\n  author = {${authorName}},\n  title = {${title}},\n  journal = {Gayatri Technology Field Notes},\n  year = {${year}},\n  url = {${fullUrl}}\n}`,
    markdown: `[${authorName}: ${title}](${fullUrl})`,
    html: `<a href="${fullUrl}" title="${title}">${title} — Gayatri Technology</a>`,
  };

  const copyToClipboard = (fmt: "apa" | "bibtex" | "markdown" | "html") => {
    const text = formats[fmt];
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedFormat(fmt);
        setTimeout(() => setCopiedFormat(null), 2200);
      });
    }
  };

  return (
    <div className="scroll-popup my-8 p-5 sm:p-6 bg-paper-2 border border-rule rounded-2xl shadow-2xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-rule pb-3.5">
        <div className="flex items-center gap-2">
          <Quote className="w-4 h-4 text-accent" />
          <span className="text-xs font-mono font-bold text-ink uppercase tracking-wider">
            Cite This Engineering Guide / Linkable Asset Hook
          </span>
        </div>
        <div className="flex items-center gap-1 self-start sm:self-auto" role="tablist" aria-label="Citation formats">
          {(["apa", "bibtex", "markdown", "html"] as const).map((fmt) => (
            <button
              key={fmt}
              type="button"
              role="tab"
              aria-selected={activeFormat === fmt}
              onClick={() => setActiveFormat(fmt)}
              className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-md transition-colors uppercase cursor-pointer ${
                activeFormat === fmt
                  ? "bg-ink text-accent-mint shadow-2xs"
                  : "bg-paper text-muted hover:text-ink hover:bg-paper-3"
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>

      <div className="relative bg-paper rounded-xl p-3.5 sm:p-4 border border-rule font-mono text-xs text-ink leading-relaxed break-all select-all">
        <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-ink-2">
          {formats[activeFormat]}
        </pre>
        <button
          type="button"
          onClick={() => copyToClipboard(activeFormat)}
          className="mt-3 sm:mt-0 sm:absolute sm:top-2.5 sm:right-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink hover:bg-ink-2 text-white text-[11px] font-bold transition-all shadow-xs cursor-pointer min-h-[32px]"
          aria-label={`Copy ${activeFormat.toUpperCase()} citation`}
        >
          {copiedFormat === activeFormat ? (
            <>
              <Check className="w-3.5 h-3.5 text-accent-mint" />
              <span className="text-accent-mint">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy {activeFormat.toUpperCase()}</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-muted leading-relaxed">
        Writing an industry article, case study, or research paper? Feel free to reference our benchmarks and methodology. Attribution back to Gayatri Technology is appreciated.
      </p>
    </div>
  );
}
