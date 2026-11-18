"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/lib/site-config";

const RING_R = 54;
const RING_C = 2 * Math.PI * RING_R;

type SplashAnimatedLogoProps = {
  progress: number;
};

export function SplashAnimatedLogo({ progress }: SplashAnimatedLogoProps) {
  const reduceMotion = useReducedMotion();
  const pct = Math.min(100, Math.max(0, progress));
  const dashOffset = RING_C - (pct / 100) * RING_C;

  return (
    <motion.div
      className="splash-loader-mark relative flex items-center justify-center"
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, y: reduceMotion ? 0 : 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div aria-hidden className="splash-loader-logo-glow" />

      <svg
        viewBox="0 0 120 120"
        className="splash-loader-ring-svg absolute"
        aria-hidden
      >
        <circle
          cx="60"
          cy="60"
          r={RING_R}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="3"
        />
        <circle
          cx="60"
          cy="60"
          r={RING_R}
          fill="none"
          stroke="url(#splashRingGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={RING_C}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 60 60)"
          className="splash-loader-ring-progress"
        />
        <defs>
          <linearGradient id="splashRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d76e" />
            <stop offset="55%" stopColor="#05a2a4" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      {!reduceMotion && (
        <motion.div
          className="splash-loader-arc absolute"
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 120 120" className="h-full w-full opacity-40">
            <path
              d="M60 10 A50 50 0 0 0 60 110"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="4 16"
            />
            <path
              d="M60 10 A50 50 0 0 1 60 110"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="4 16"
            />
          </svg>
        </motion.div>
      )}

      <motion.div
        className="splash-loader-logo-card relative z-[1]"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          priority
          sizes="(max-width: 640px) 200px, 240px"
          className="splash-loader-logo h-auto w-[min(62vw,10.5rem)] sm:w-[11.5rem]"
        />
      </motion.div>
    </motion.div>
  );
}