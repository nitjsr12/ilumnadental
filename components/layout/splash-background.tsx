"use client";

import { motion, useReducedMotion } from "motion/react";
import { SplashFloatingElements } from "@/components/layout/splash-floating-elements";

export function SplashBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="splash-v2-bg pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="splash-v2-bg-base splash-v2-bg-base--aqua" />
      <motion.div
        className="splash-v2-bg-shift"
        animate={
          reduceMotion
            ? undefined
            : {
                backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"],
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="splash-v2-bg-grain" />

      {!reduceMotion && (
        <>
          <motion.div
            className="splash-v2-orb splash-v2-orb--a splash-v2-orb--aqua"
            animate={{ x: ["-6%", "8%", "-6%"], y: ["-4%", "5%", "-4%"], scale: [1, 1.12, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-v2-orb splash-v2-orb--b splash-v2-orb--sky"
            animate={{ x: ["6%", "-7%", "6%"], y: ["5%", "-5%", "5%"], scale: [1.04, 0.92, 1.04] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-v2-orb splash-v2-orb--c splash-v2-orb--navy-soft"
            animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-v2-sweep splash-v2-sweep--soft"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      <SplashFloatingElements />
      <div className="splash-v2-grid splash-v2-grid--light" />
      <div className="splash-v2-vignette splash-v2-vignette--aqua" />
    </div>
  );
}
