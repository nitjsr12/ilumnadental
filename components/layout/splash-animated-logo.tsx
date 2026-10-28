"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/lib/site-config";

type SplashAnimatedLogoProps = {
  progress?: number;
};

/** Minimal logo reveal — horizontal mark on luminous stage */
export function SplashAnimatedLogo({ progress = 0 }: SplashAnimatedLogoProps) {
  const reduceMotion = useReducedMotion();
  const glow = 0.45 + progress / 220;

  return (
    <motion.div
      className="splash-v2-logo-stage relative"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 22, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="splash-v2-logo-glow"
        aria-hidden
        animate={reduceMotion ? undefined : { opacity: [glow * 0.85, glow, glow * 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: glow }}
      />

      {!reduceMotion && (
        <motion.span
          className="splash-v2-logo-ring"
          aria-hidden
          animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.15, 0.35] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <motion.div
        className="splash-v2-logo-panel"
        initial={{ scale: reduceMotion ? 1 : 0.96 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 24, delay: 0.08 }}
      >
        <Image
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          priority
          sizes="(max-width: 640px) 300px, 340px"
          className="relative z-[1] h-auto w-[min(78vw,15.5rem)] sm:w-[17.5rem]"
        />
      </motion.div>
    </motion.div>
  );
}
