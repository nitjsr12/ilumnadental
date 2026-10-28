"use client";

import { motion } from "motion/react";
import type { HeroSlide } from "@/data/hero-slides";
import { cn } from "@/lib/utils";

type Props = {
  slides: HeroSlide[];
  active: number;
  onSelect: (index: number) => void;
};

export function HeroSlideNav({ slides, active, onSelect }: Props) {
  return (
    <nav
      aria-label="Hero stories"
      className="flex flex-row flex-wrap gap-2 sm:gap-3"
    >
      {slides.map((s, i) => {
        const isActive = active === i;
        const indexLabel = String(i + 1).padStart(2, "0");
        const shortLabel = s.tab.replace(/^\d+\s·\s*/, "");

        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(i)}
            className={cn(
              "group relative flex min-w-[8.5rem] flex-1 items-center gap-2.5 rounded-xl py-2.5 pl-3 pr-3 text-left transition-colors duration-300 sm:min-w-[9.5rem] sm:gap-3 sm:py-3 sm:pl-3.5 sm:pr-4",
              isActive ? "text-primary" : "text-muted hover:text-primary",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="hero-slide-rail"
                className="absolute inset-0 rounded-xl bg-surface/90 shadow-[0_8px_32px_-12px_rgba(18,36,47,0.12)] ring-1 ring-gold/25 backdrop-blur-sm"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 shrink-0 font-heading text-xs font-bold tabular-nums tracking-wider",
                isActive ? "text-secondary" : "text-muted group-hover:text-secondary",
              )}
            >
              {indexLabel}
            </span>
            <span className="relative z-10 flex min-w-0 flex-1 flex-col">
              <span
                className={cn(
                  "font-heading text-sm font-bold tracking-tight",
                  isActive && "text-primary",
                )}
              >
                {shortLabel}
              </span>
              <span className="text-[0.65rem] leading-tight text-muted">
                {isActive ? "Now showing" : "View story"}
              </span>
            </span>
            <span
              className={cn(
                "relative z-10 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300",
                isActive ? "scale-100 bg-secondary" : "scale-75 bg-primary/20 group-hover:bg-secondary/50",
              )}
              aria-hidden
            />
          </button>
        );
      })}
    </nav>
  );
}
