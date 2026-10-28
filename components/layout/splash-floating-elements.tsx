"use client";

import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";

const BUBBLES = [
  { left: "8%", top: "18%", size: 14, dur: 9, delay: 0 },
  { left: "82%", top: "22%", size: 20, dur: 11, delay: 0.6 },
  { left: "15%", top: "72%", size: 12, dur: 10, delay: 1.2 },
  { left: "88%", top: "68%", size: 16, dur: 12, delay: 0.3 },
  { left: "45%", top: "12%", size: 10, dur: 8, delay: 1.8 },
  { left: "62%", top: "85%", size: 18, dur: 13, delay: 0.9 },
  { left: "28%", top: "48%", size: 8, dur: 9, delay: 2.1 },
  { left: "72%", top: "42%", size: 11, dur: 10, delay: 1.4 },
] as const;

const SPARKLES = [
  { left: "22%", top: "28%", delay: 0, scale: 1 },
  { left: "76%", top: "32%", delay: 0.5, scale: 0.85 },
  { left: "12%", top: "55%", delay: 1.1, scale: 0.7 },
  { left: "84%", top: "58%", delay: 0.8, scale: 1.1 },
  { left: "52%", top: "78%", delay: 1.6, scale: 0.9 },
] as const;

export function SplashFloatingElements() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {BUBBLES.map((b, i) => (
        <motion.span
          key={`bubble-${i}`}
          className="splash-v2-bubble absolute rounded-full"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
          }}
          animate={{
            y: [0, -28, -8, -36, 0],
            x: [0, 6, -4, 8, 0],
            opacity: [0.25, 0.55, 0.35, 0.5, 0.25],
            scale: [1, 1.15, 0.95, 1.08, 1],
          }}
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}

      {SPARKLES.map((s, i) => (
        <motion.span
          key={`spark-${i}`}
          className="splash-v2-sparkle absolute text-[#1781be]"
          style={{ left: s.left, top: s.top }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [s.scale * 0.8, s.scale * 1.2, s.scale * 0.8],
            rotate: [0, 18, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        >
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
        </motion.span>
      ))}

      <motion.div
        className="splash-v2-ring splash-v2-ring--1"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="splash-v2-ring splash-v2-ring--2"
        animate={{ scale: [1.05, 0.98, 1.05], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
}
