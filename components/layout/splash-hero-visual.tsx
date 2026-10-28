"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const SPLASH_HERO_SRC = "/splash-tooth-hero.jpg";

export function SplashHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="splash-v2-hero-visual relative mx-auto mt-6 sm:mt-8"
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.88, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="splash-v2-hero-glow"
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.45, 0.75, 0.45], scale: [0.95, 1.05, 0.95] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {!reduceMotion && (
        <>
          <motion.div
            className="splash-v2-scrub-arc splash-v2-scrub-arc--top"
            aria-hidden
            animate={{ rotate: [-8, 8, -8], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="splash-v2-scrub-arc splash-v2-scrub-arc--bottom"
            aria-hidden
            animate={{ rotate: [10, -10, 10], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
          />
        </>
      )}

      <motion.div
        className="relative z-[1]"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -10, 0, -6, 0],
                rotate: [-1.25, 1.25, -1.25],
              }
        }
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 1.35, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src={SPLASH_HERO_SRC}
          alt=""
          width={800}
          height={800}
          priority
          sizes="(max-width: 640px) 72vw, 320px"
          className="splash-v2-hero-image h-auto w-[min(72vw,18rem)] drop-shadow-[0_24px_48px_rgba(4,67,127,0.22)] sm:w-[20rem]"
          aria-hidden
        />
      </motion.div>
    </motion.div>
  );
}
