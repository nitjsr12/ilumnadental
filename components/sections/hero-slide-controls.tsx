"use client";

import { motion } from "motion/react";
import { heroSlides } from "@/data/hero-slides";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5500;

type Props = {
  active: number;
  onSelect: (index: number) => void;
};

export function HeroSlideControls({ active, onSelect }: Props) {
  return (
    <div className="space-y-5">
      {/* Mobile + tablet: segmented control */}
      <div className="relative flex rounded-full bg-primary/[0.04] p-1 ring-1 ring-primary/10 backdrop-blur-sm lg:hidden">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(i)}
            className={cn(
              "relative flex-1 rounded-full px-2 py-2.5 text-center text-[0.6rem] font-bold uppercase tracking-wider transition-colors sm:text-[0.65rem]",
              active === i ? "text-white" : "text-muted hover:text-primary",
            )}
          >
            {active === i && (
              <motion.span
                layoutId="hero-segment"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-teal via-brand-aqua to-gold shadow-md shadow-brand-aqua/40"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{s.tab.replace(" · ", " ·\u200b")}</span>
          </button>
        ))}
      </div>

      {/* Desktop: editorial step list */}
      <ol className="hidden space-y-1 lg:block">
        {heroSlides.map((s, i) => {
          const isActive = active === i;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                className={cn(
                  "group flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-colors",
                  isActive ? "bg-surface/80 ring-1 ring-gold/25" : "hover:bg-surface/50",
                )}
              >
                <span
                  className={cn(
                    "font-heading text-2xl font-bold tabular-nums transition-colors",
                    isActive ? "text-gold" : "text-primary/20 group-hover:text-primary/40",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block text-xs font-bold uppercase tracking-[0.2em]",
                      isActive ? "text-secondary" : "text-muted",
                    )}
                  >
                    {s.tab.split("·")[1]?.trim() ?? s.tab}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block truncate font-heading text-sm font-semibold",
                      isActive ? "text-primary" : "text-muted/80",
                    )}
                  >
                    {s.title} {s.highlight}
                  </span>
                </span>
                <span
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full transition-all",
                    isActive ? "scale-100 bg-brand-aqua shadow-[0_0_14px_rgba(0,229,204,0.65)]" : "scale-75 bg-primary/15",
                  )}
                  aria-hidden
                />
              </button>
            </li>
          );
        })}
      </ol>

      <div className="overflow-hidden rounded-full bg-primary/10">
        <motion.div
          key={active}
          className="h-1 origin-left rounded-full bg-gradient-to-r from-brand-teal via-brand-aqua to-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
        />
      </div>
    </div>
  );
}
