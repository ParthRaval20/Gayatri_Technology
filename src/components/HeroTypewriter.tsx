"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";

const PREFIX_TEXT = "Software Built Around The Way Your ";
const DYNAMIC_PHRASES = [
  "Factory And Office",
  "Industrial Plants",
  "Workshops & Teams",
  "Supply Chains",
  "B2B Operations",
];
const SUFFIX_TEXT = " Actually Run.";

// Canonical complete string for SSR & SEO
const CANONICAL_HEADLINE = `${PREFIX_TEXT}${DYNAMIC_PHRASES[0]}${SUFFIX_TEXT}`;
const PREFIX_LEN = PREFIX_TEXT.length; // 35
const INITIAL_PHRASE_LEN = DYNAMIC_PHRASES[0].length; // 18
const CANONICAL_LEN = CANONICAL_HEADLINE.length; // 67

interface HeroTypewriterProps {
  onStepChange?: (step: number) => void;
  className?: string;
}

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function Cursor({ active = true }: { active?: boolean }) {
  return (
    <span
      className={`inline-block w-[3px] sm:w-[4px] h-[0.88em] bg-accent ml-0.5 sm:ml-1 align-baseline rounded-xs transition-opacity ${
        active ? "animate-cursor-blink" : "opacity-0"
      }`}
      aria-hidden="true"
    />
  );
}

export default function HeroTypewriter({
  onStepChange,
  className = "",
}: HeroTypewriterProps) {
  const isMounted = useIsClient();
  const [phase, setPhase] = useState<
    "initial" | "holding" | "deleting" | "typing"
  >("initial");

  // Character counters
  const [initialCharCount, setInitialCharCount] = useState<number>(0);
  const [phraseIdx, setPhraseIdx] = useState<number>(0);
  const [phraseCharCount, setPhraseCharCount] = useState<number>(INITIAL_PHRASE_LEN);

  // Interaction controls
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Handle reduced motion on mount
  useEffect(() => {
    if (!isMounted) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const initTimer = setTimeout(() => {
        setInitialCharCount(CANONICAL_LEN);
        setPhraseIdx(0);
        setPhraseCharCount(INITIAL_PHRASE_LEN);
        setPhase("holding");
        onStepChange?.(3);
      }, 0);
      return () => clearTimeout(initTimer);
    }
  }, [isMounted, onStepChange]);

  // Notify parent component about reveal progression
  useEffect(() => {
    if (!isMounted) return;

    if (phase === "initial") {
      if (initialCharCount >= PREFIX_LEN + INITIAL_PHRASE_LEN + 1) {
        onStepChange?.(2);
      } else if (initialCharCount >= PREFIX_LEN) {
        onStepChange?.(1);
      }
      if (initialCharCount >= CANONICAL_LEN) {
        onStepChange?.(3);
      }
    } else if (phase === "holding" || phase === "deleting" || phase === "typing") {
      onStepChange?.(3);
    }
  }, [isMounted, phase, initialCharCount, onStepChange]);

  // Main Typewriter Animation Engine
  useEffect(() => {
    if (!isMounted) return;

    clearTimer();

    // If hovered or focused, do not progress
    if (isPaused) return;

    if (phase === "initial") {
      if (initialCharCount < CANONICAL_LEN) {
        const nextChar = CANONICAL_HEADLINE[initialCharCount];
        let speed = 25;
        if (nextChar === " ") speed = 14;
        else if (nextChar === "." || nextChar === ",") speed = 110;
        else speed = 24 + Math.floor(Math.random() * 8);

        timerRef.current = setTimeout(() => {
          setInitialCharCount((prev) => {
            const next = prev + 1;
            if (next >= CANONICAL_LEN) {
              setPhase("holding");
              setPhraseIdx(0);
              setPhraseCharCount(INITIAL_PHRASE_LEN);
            }
            return next;
          });
        }, speed);
      } else {
        // Initial reveal completed! Hold for 4.5s
        timerRef.current = setTimeout(() => {
          setPhase("deleting");
        }, 4500);
      }
    } else if (phase === "holding") {
      timerRef.current = setTimeout(() => {
        setPhase("deleting");
      }, 4200);
    } else if (phase === "deleting") {
      if (phraseCharCount > 0) {
        timerRef.current = setTimeout(() => {
          setPhraseCharCount((prev) => prev - 1);
        }, 20);
      } else {
        // Deleted! Move to next phrase and pause briefly
        timerRef.current = setTimeout(() => {
          setPhraseIdx((prev) => (prev + 1) % DYNAMIC_PHRASES.length);
          setPhase("typing");
          setPhraseCharCount(1);
        }, 160);
      }
    } else if (phase === "typing") {
      const currentTarget = DYNAMIC_PHRASES[phraseIdx];
      if (phraseCharCount < currentTarget.length) {
        const nextChar = currentTarget[phraseCharCount];
        let speed = 34;
        if (nextChar === " ") speed = 18;
        else if (nextChar === "&") speed = 55;
        else speed = 30 + Math.floor(Math.random() * 10);

        timerRef.current = setTimeout(() => {
          setPhraseCharCount((prev) => {
            const next = prev + 1;
            if (next >= currentTarget.length) {
              setPhase("holding");
            }
            return next;
          });
        }, speed);
      } else {
        // Finished typing current phrase! Hold for 4.2s
        timerRef.current = setTimeout(() => {
          setPhase("deleting");
        }, 4200);
      }
    }

    return () => clearTimer();
  }, [
    isMounted,
    phase,
    initialCharCount,
    phraseCharCount,
    phraseIdx,
    isPaused,
    clearTimer,
  ]);

  // Click to fast-forward during initial reveal or replay after completion
  const handleClick = () => {
    clearTimer();
    if (phase === "initial" && initialCharCount < CANONICAL_LEN) {
      setInitialCharCount(CANONICAL_LEN);
      setPhraseIdx(0);
      setPhraseCharCount(INITIAL_PHRASE_LEN);
      setPhase("holding");
      onStepChange?.(3);
    } else {
      // Re-trigger typing reveal from scratch
      setPhase("initial");
      setInitialCharCount(0);
      setPhraseIdx(0);
      setPhraseCharCount(INITIAL_PHRASE_LEN);
    }
  };

  // SSR Fallback (Zero hydration mismatch, SEO preserved)
  if (!isMounted) {
    return (
      <h1
        className={`text-[length:var(--text-display)] tracking-[var(--tracking-display)] leading-[1.08] font-display font-extrabold text-ink select-text ${className}`}
        aria-label={CANONICAL_HEADLINE}
      >
        <span>{PREFIX_TEXT}</span>
        <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">
          {DYNAMIC_PHRASES[0]}
        </span>
        <span>{SUFFIX_TEXT}</span>
      </h1>
    );
  }

  // --- RENDERING INITIAL REVEAL PHASE ---
  if (phase === "initial") {
    const isPrefixPhase = initialCharCount <= PREFIX_LEN;
    const isPhrasePhase =
      initialCharCount > PREFIX_LEN &&
      initialCharCount <= PREFIX_LEN + INITIAL_PHRASE_LEN;
    const isSuffixPhase = initialCharCount > PREFIX_LEN + INITIAL_PHRASE_LEN;

    const visiblePrefix = PREFIX_TEXT.slice(0, Math.min(initialCharCount, PREFIX_LEN));
    const ghostPrefix = PREFIX_TEXT.slice(Math.min(initialCharCount, PREFIX_LEN));

    const phraseCharsVisible = Math.max(
      0,
      Math.min(initialCharCount - PREFIX_LEN, INITIAL_PHRASE_LEN)
    );
    const visiblePhrase = DYNAMIC_PHRASES[0].slice(0, phraseCharsVisible);
    const ghostPhrase = DYNAMIC_PHRASES[0].slice(phraseCharsVisible);

    const suffixCharsVisible = Math.max(
      0,
      initialCharCount - (PREFIX_LEN + INITIAL_PHRASE_LEN)
    );
    const visibleSuffix = SUFFIX_TEXT.slice(0, suffixCharsVisible);
    const ghostSuffix = SUFFIX_TEXT.slice(suffixCharsVisible);

    return (
      <h1
        className={`relative text-[length:var(--text-display)] tracking-[var(--tracking-display)] leading-[1.08] font-display font-extrabold text-ink cursor-pointer group transition-colors ${className}`}
        aria-label={CANONICAL_HEADLINE}
        onClick={handleClick}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        tabIndex={0}
        title="Click to fast-forward or replay typing reveal"
      >
        {/* Visible Text Flow */}
        <span>{visiblePrefix}</span>
        {isPrefixPhase && <Cursor />}

        {visiblePhrase.length > 0 && (
          <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">
            {visiblePhrase}
          </span>
        )}
        {isPhrasePhase && <Cursor />}

        {visibleSuffix.length > 0 && <span>{visibleSuffix}</span>}
        {isSuffixPhase && <Cursor />}

        {/* Ghost Remainder (Zero Layout Shift Anchor) */}
        <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
          {ghostPrefix}
          {ghostPhrase}
          {ghostSuffix}
        </span>
      </h1>
    );
  }

  // --- RENDERING HOLDING / DELETING / TYPING PHASES ---
  const currentPhrase = DYNAMIC_PHRASES[phraseIdx];
  const visiblePhrase = currentPhrase.slice(0, phraseCharCount);
  const ghostPhrase = currentPhrase.slice(phraseCharCount);
  const isPhraseActive = phase === "deleting" || phase === "typing";

  return (
    <h1
      className={`relative text-[length:var(--text-display)] tracking-[var(--tracking-display)] leading-[1.08] font-display font-extrabold text-ink cursor-pointer group transition-colors ${className}`}
      aria-label={`${PREFIX_TEXT}${currentPhrase}${SUFFIX_TEXT}`}
      onClick={handleClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      title="Click to replay typing reveal"
    >
      <span>{PREFIX_TEXT}</span>

      <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">
        {visiblePhrase}
      </span>
      {isPhraseActive && <Cursor />}

      {/* Ghost text for current dynamic phrase so line wraps never pop */}
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {ghostPhrase}
      </span>

      <span>{SUFFIX_TEXT}</span>
      {phase === "holding" && <Cursor />}
    </h1>
  );
}
