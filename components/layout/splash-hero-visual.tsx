"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const SPLASH_BRUSH_HERO = "/splash-brush-hero.jpg";

const FLOAT_SPARKLES = [
  { top: "8%", left: "12%", size: 10, delay: 0 },
  { top: "18%", right: "10%", size: 8, delay: 0.55 },
  { top: "42%", left: "6%", size: 7, delay: 1.1 },
  { top: "28%", right: "22%", size: 9, delay: 0.25 },
  { bottom: "24%", left: "20%", size: 8, delay: 0.85 },
] as const;

export function SplashHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="splash-v2-hero-visual relative mx-auto mt-2 w-full max-w-[min(92vw,26rem)] sm:mt-3"
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.38, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <motion.div
        className="splash-v2-hero-glow splash-v2-hero-glow--wide"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.35, 0.55, 0.35], scale: [0.94, 1.06, 0.94] }
        }
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {!reduceMotion &&
        FLOAT_SPARKLES.map((s, i) => (
          <motion.span
            key={i}
            className="splash-v2-hero-sparkle pointer-events-none absolute z-[2]"
            style={{
              top: "top" in s ? s.top : undefined,
              left: "left" in s ? s.left : undefined,
              right: "right" in s ? s.right : undefined,
              bottom: "bottom" in s ? s.bottom : undefined,
              width: s.size,
              height: s.size,
            }}
            animate={{
              opacity: [0.08, 0.45, 0.1],
              scale: [0.7, 1.15, 0.75],
              rotate: [0, 18, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          />
        ))}

      <motion.div
        className="splash-v2-hero-art-wrap relative z-[1]"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -10, 0, -5, 0],
                rotate: [-0.85, 0.65, -0.85],
                x: [0, 3, 0, -2, 0],
              }
        }
        transition={{
          y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 1.15, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 1.15, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformOrigin: "58% 55%" }}
      >
        <Image
          src={SPLASH_BRUSH_HERO}
          alt=""
          width={1024}
          height={558}
          priority
          sizes="(max-width: 640px) 92vw, 416px"
          className="splash-v2-hero-art relative z-[1] h-auto w-full select-none"
          draggable={false}
        />
        <span className="splash-v2-hero-art-vignette pointer-events-none absolute inset-0 z-[2]" aria-hidden />
        <span className="splash-v2-hero-art-tint pointer-events-none absolute inset-0 z-[3]" aria-hidden />

        {!reduceMotion && (
          <motion.span
            className="splash-v2-hero-shine pointer-events-none absolute inset-0 z-[4] overflow-hidden"
            aria-hidden
          >
            <motion.span
              className="splash-v2-hero-shine-bar block h-full w-1/3"
              animate={{ x: ["-120%", "380%"] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.8,
              }}
            />
          </motion.span>
        )}
      </motion.div>

      {!reduceMotion && (
        <>
          <motion.span
            className="splash-v2-hero-bubble splash-v2-hero-bubble--1"
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="splash-v2-hero-bubble splash-v2-hero-bubble--2"
            animate={{ y: [0, 12, 0], opacity: [0.15, 0.35, 0.15], scale: [1, 1.12, 1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </>
      )}
    </motion.div>
  );
}