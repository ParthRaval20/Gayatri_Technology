"use client";

import React from "react";
import Image from "next/image";
import BrandTypography from "./BrandTypography";

export { BrandTypography };

interface BrandLogoProps {
  className?: string;
  isDarkBackground?: boolean;
  withTypography?: boolean;
  typographyClassName?: string;
}

export default function BrandLogo({
  className = "h-9 w-[62px] sm:h-11 sm:w-[76px]",
  isDarkBackground = false,
  withTypography = false,
  typographyClassName = "h-6 sm:h-8 w-auto",
}: BrandLogoProps) {
  const logoMark = (
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

  if (withTypography) {
    return (
      <div className="inline-flex items-center gap-2 sm:gap-3.5 shrink-0">
        {logoMark}
        <BrandTypography
          isDarkBackground={isDarkBackground}
          className={typographyClassName}
        />
      </div>
    );
  }

  return logoMark;
}
