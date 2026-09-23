"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  isDarkBackground?: boolean;
}

export default function BrandLogo({
  className = "h-9 w-[62px] sm:h-11 sm:w-[76px]",
  isDarkBackground = false,
}: BrandLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 aspect-[754/439] ${
        isDarkBackground
          ? "p-1 bg-white/10 rounded-lg backdrop-blur-xs border border-[#47C56E]/25 shadow-xs"
          : ""
      } ${className}`}
    >
      {/* Directly renders the official vector SVG from /public/gt-logo.svg */}
      <Image
        src="/gt-logo.svg"
        alt="Gayatri Technology Logo"
        width={754}
        height={439}
        priority
        className="w-full h-full object-contain drop-shadow-xs"
      />
    </div>
  );
}
