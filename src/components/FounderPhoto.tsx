"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FounderPhotoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function FounderPhoto({ className = "", size = "md" }: FounderPhotoProps) {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: "w-11 sm:w-12 h-11 sm:h-12 text-sm sm:text-base rounded-2xl",
    md: "w-16 h-16 text-xl sm:text-2xl rounded-2xl",
    lg: "w-20 sm:w-24 h-20 sm:h-24 text-2xl sm:text-3xl rounded-3xl",
  };

  const dimension = size === "sm" ? 48 : size === "md" ? 64 : 96;

  return (
    <div
      className={`relative overflow-hidden shrink-0 border-2 border-[#47C56E]/40 shadow-sm bg-[#091C0F] ${sizeClasses[size]} ${className}`}
    >
      {!imgError ? (
        <Image
          src="/parth-raval.jpg"
          alt="Parth Raval — Founder & Lead Software Engineer, Gayatri Technology"
          width={dimension}
          height={dimension}
          priority
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-display font-black text-[#86EFAC] bg-[#091C0F]">
          PR
        </div>
      )}
    </div>
  );
}

