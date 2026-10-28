"use client";

import { motion, useReducedMotion } from "motion/react";

const PARTICLES = [
  { top: "7%", left: "10%", size: 12, dur: 11, delay: 0 },
  { top: "14%", left: "78%", size: 18, dur: 13, delay: 0.8 },
  { top: "24%", left: "88%", size: 9, dur: 10, delay: 1.2 },
  { top: "18%", left: "38%", size: 7, dur: 12, delay: 0.3 },
  { top: "42%", left: "6%", size: 14, dur: 14, delay: 1.6 },
  { top: "52%", left: "92%", size: 11, dur: 11, delay: 0.5 },
  { top: "58%", left: "22%", size: 8, dur: 13, delay: 2 },
  { top: "66%", left: "58%", size: 10, dur: 12, delay: 0.9 },
  { top: "72%", left: "14%", size: 16, dur: 15, delay: 1.4 },
  { top: "80%", left: "72%", size: 13, dur: 11, delay: 0.2 },
  { top: "86%", left: "44%", size: 9, dur: 14, delay: 1.8 },
  { top: "32%", left: "68%", size: 6, dur: 10, delay: 2.2 },
  { top: "48%", left: "34%", size: 8, dur: 12, delay: 1.1 },
  { top: "91%", left: "86%", size: 11, dur: 13, delay: 0.6 },
  { top: "12%", left: "55%", size: 10, dur: 12, delay: 1.5 },
  { top: "38%", left: "48%", size: 5, dur: 11, delay: 2.4 },
] as const;

export function SplashBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="splash-bg-gradient splash-bg-gradient--animate" />
      <div className="splash-bg-mesh splash-bg-mesh--animate" />
      <div className="splash-bg-dotgrid" />
      <div className="splash-bg-glass" />

      {!reduceMotion && (
        <>
          <motion.div
            className="splash-aurora splash-aurora--cyan"
            animate={{ x: ["-10%", "8%", "-10%"], y: ["-6%", "6%", "-6%"], scale: [1, 1.12, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-aurora splash-aurora--gold"
            animate={{ x: ["6%", "-8%", "6%"], y: ["4%", "-6%", "4%"], scale: [1.05, 0.92, 1.05] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-aurora splash-aurora--navy"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.92, 1.15, 0.92] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-aurora splash-aurora--teal"
            animate={{ x: ["-5%", "5%", "-5%"], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-bg-shimmer"
            animate={{ opacity: [0.08, 0.38, 0.08], rotate: [0, 12, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-bg-light-beam"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          />
          <div className="splash-bg-orbit splash-bg-orbit--1" />
          <div className="splash-bg-orbit splash-bg-orbit--2" />
          <div className="splash-bg-orbit splash-bg-orbit--3" />
          <div className="splash-bg-wave splash-bg-wave--1" />
          <div className="splash-bg-wave splash-bg-wave--2" />
        </>
      )}

      <div className="splash-bg-center-glow" />

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={reduceMotion ? "splash-particle" : "splash-particle splash-particle--drift"}
          style={
            {
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              "--splash-drift-dur": `${p.dur}s`,
              "--splash-drift-delay": `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="splash-bg-vignette" />
    </div>
  );
}
