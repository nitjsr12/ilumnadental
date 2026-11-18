"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  initialPosition?: number;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  className,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
    setPosition(Math.round((x / rect.width) * 1000) / 10);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    trackRef.current?.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging && e.buttons === 0) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    trackRef.current?.releasePointerCapture(e.pointerId);
  };

  const clipAfter = 100 - position;

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("before-after-slider", className)}
    >
      <div
        ref={trackRef}
        className={cn(
          "relative touch-none overflow-hidden rounded-2xl border border-[#04437f]/10 bg-[#f0f8ff] shadow-[0_28px_64px_-32px_rgba(4,67,127,0.35)] select-none",
          dragging && "before-after-slider--dragging",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="slider"
        aria-label="Compare before and after smile"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
        }}
      >
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 92vw, 640px"
            className="object-cover object-center"
            priority={false}
            draggable={false}
          />

          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 92vw, 640px"
            className="object-cover object-center"
            style={{ clipPath: `inset(0 ${clipAfter}% 0 0)` }}
            draggable={false}
          />

          <span className="before-after-label before-after-label--before">Before</span>
          <span className="before-after-label before-after-label--after">After</span>

          <div
            className="before-after-divider absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.65)]"
            style={{ left: `${position}%` }}
            aria-hidden
          >
            <span className="before-after-handle">
              <ChevronLeft className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            </span>
          </div>
        </div>
      </div>

      <p className="sr-only">Drag left or right to compare before and after results</p>
    </motion.div>
  );
}