import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
  id?: string;
}

/**
 * Standard SSR-safe JSON-LD structured data injector.
 * Renders in initial HTML payload for AI engines and search engine crawlers.
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

