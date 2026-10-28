"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
  className?: string;
};

export function CarouselArrowControls({
  onPrev,
  onNext,
  current,
  total,
  className,
}: Props) {
  const indexLabel = String(current + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  return (
    <div
      className={cn(
        "carousel-arrow-bar inline-flex w-full max-w-md items-center gap-1 rounded-2xl border border-gold/25 bg-surface/90 p-1.5 shadow-[0_12px_40px_-20px_rgba(18,36,47,0.2)] backdrop-blur-md sm:max-w-lg",
        className,
      )}
      role="group"
      aria-label="Carousel navigation"
    >
      <motion.button
        type="button"
        onClick={onPrev}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="carousel-arrow-btn group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-inner transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        aria-label="Previous slide"
      >
        <ChevronLeft
          className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5"
          strokeWidth={2.25}
          aria-hidden
        />
      </motion.button>

      <div className="flex min-w-0 flex-1 flex-col items-center gap-1.5 px-2 py-1">
        <div className="flex items-baseline gap-1 font-heading tabular-nums">
          <span className="text-lg font-bold text-secondary">{indexLabel}</span>
          <span className="text-xs font-semibold text-muted">/ {totalLabel}</span>
        </div>
        <div className="flex w-full max-w-[8rem] gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full transition-all duration-300",
                i === current
                  ? "bg-gradient-to-r from-secondary to-gold"
                  : i < current
                    ? "bg-secondary/35"
                    : "bg-primary/10",
              )}
              aria-hidden
            />
          ))}
        </div>
      </div>

      <motion.button
        type="button"
        onClick={onNext}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="carousel-arrow-btn group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-secondary/25 bg-gradient-to-br from-secondary to-[#186b62] text-white shadow-md shadow-secondary/25 transition-shadow hover:shadow-lg hover:shadow-secondary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        aria-label="Next slide"
      >
        <ChevronRight
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2.25}
          aria-hidden
        />
      </motion.button>
    </div>
  );
}
