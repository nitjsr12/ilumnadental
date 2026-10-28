"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import { brandColors } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

type SplashBrushingToothProps = {
  className?: string;
  /** When false, brush stays in a resting pose (pre-brush sequence). */
  brushActive?: boolean;
};

const SPARKLES = [
  { cx: 92, cy: 112, delay: 0 },
  { cx: 104, cy: 118, delay: 0.35 },
  { cx: 98, cy: 124, delay: 0.7 },
] as const;

/** Premium inline SVG — stable tooth + realistic brushing motion. */
export function SplashBrushingTooth({ className, brushActive = true }: SplashBrushingToothProps) {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const shadowId = `splash-tooth-shadow-${uid}`;
  const fillId = `splash-tooth-fill-${uid}`;

  const animateBrush = brushActive && !reduceMotion;

  return (
    <div className={cn("relative flex items-center justify-center", className)} aria-hidden>
      <div className="splash-tooth-radial-glow absolute inset-0" />

      <svg
        viewBox="0 0 200 220"
        className="relative h-[9rem] w-[8rem] sm:h-[11.5rem] sm:w-[10.25rem]"
        aria-hidden
      >
        <defs>
          <filter id={shadowId} x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="rgba(4,67,127,0.16)" />
          </filter>
          <linearGradient id={fillId} x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#f4fbff" />
            <stop offset="100%" stopColor="#e3f2fa" />
          </linearGradient>
        </defs>

        {/* Tooth — fixed, no bounce */}
        <g filter={`url(#${shadowId})`}>
          <path
            d="M100 26C71 26 50 47 50 75c0 11 3 23 6 35l4 29c2 9 10 15 19 15h42c9 0 17-6 19-15l4-29c3-12 6-24 6-35 0-28-21-49-50-49z"
            fill={`url(#${fillId})`}
            stroke={brandColors.blue}
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <path
            d="M76 86h48M82 110h36"
            fill="none"
            stroke="rgba(4,67,127,0.11)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <ellipse cx="80" cy="64" rx="11" ry="15" fill="#ffffff" opacity="0.5" />
          <path
            d="M68 52 Q100 44 132 52"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Brush — pivot near lower crown contact */}
        <motion.g
          style={{ transformOrigin: "102px 118px", transformBox: "fill-box" as const }}
          animate={
            animateBrush
              ? { rotate: [-42, -30, -42], x: [-5, 7, -5], y: [1, -2, 1] }
              : { rotate: -36, x: 2, y: 0 }
          }
          transition={
            animateBrush
              ? { duration: 2.4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }
              : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <path
            d="M118 132 L118 178 Q118 186 126 186 L134 186 Q142 186 142 178 L142 132 Z"
            fill={brandColors.primary}
            rx="4"
          />
          <rect x="114" y="178" width="32" height="10" rx="4" fill={brandColors.primaryDark} />
          <path d="M124 132 L136 104 L150 94 L156 104 L140 132 Z" fill={brandColors.cta} />
          <rect x="136" y="78" width="38" height="18" rx="6" fill="#7eb8e8" />
          <g fill="#f8fdff" stroke={brandColors.blue} strokeWidth="0.5">
            {[0, 4.5, 9, 13.5, 18, 22.5, 27].map((dx) => (
              <rect key={dx} x={139 + dx} y="62" width="3.2" height="18" rx="1.2" />
            ))}
          </g>
        </motion.g>

        {animateBrush &&
          SPARKLES.map((s) => (
            <motion.circle
              key={s.delay}
              cx={s.cx}
              cy={s.cy}
              r="3"
              fill="#ffffff"
              animate={{ opacity: [0, 0.85, 0], scale: [0.6, 1.1, 0.6] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: s.delay,
              }}
            />
          ))}
      </svg>
    </div>
  );
}
