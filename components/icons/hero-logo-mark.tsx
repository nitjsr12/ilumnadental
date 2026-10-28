"use client";

import { motion, useInView } from "motion/react";
import { useId, useRef } from "react";
import { brandColors } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

/** Animated tooth mark inspired by the ILUMNA logo — for hero / splash accents. */
export function HeroLogoMark({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const gradId = useId().replace(/:/g, "");

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 64 80"
      className={cn("h-16 w-14 text-secondary sm:h-20 sm:w-16", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={brandColors.teal} />
          <stop offset="100%" stopColor={brandColors.primary} />
        </linearGradient>
      </defs>
      <motion.path
        d="M32 4C20 4 12 14 12 26c0 6 2 12 4 18l3 22c1 4 5 7 9 7h8c4 0 8-3 9-7l3-22c2-6 4-12 4-18C52 14 44 4 32 4z"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M24 30h16"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ delay: 0.55, duration: 0.7 }}
      />
      <motion.circle
        cx="32"
        cy="12"
        r="2"
        fill={brandColors.teal}
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
