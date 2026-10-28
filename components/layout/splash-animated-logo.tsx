"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/lib/site-config";

type SplashAnimatedLogoProps = {
  progress?: number;
};

/** Premium glass logo reveal — horizontal ILUMNA mark, loading-linked glow. */
export function SplashAnimatedLogo({ progress = 0 }: SplashAnimatedLogoProps) {
  const reduceMotion = useReducedMotion();
  const loadGlow = 0.4 + progress / 180;

  return (
    <header className="relative flex w-full flex-col items-center">
      <motion.div
        className="splash-logo-stage relative"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        {!reduceMotion && (
          <>
            <span className="splash-logo-aura" aria-hidden style={{ opacity: loadGlow }} />
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="splash-logo-ripple absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/45"
                style={{ width: "100%", height: "100%" }}
                initial={{ scale: 0.94, opacity: 0.45 }}
                animate={{ scale: [1, 1.42], opacity: [0.4, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  delay: i * 1.15,
                  ease: "easeOut",
                }}
                aria-hidden
              />
            ))}
          </>
        )}

        <motion.div
          className="splash-logo-box-outer"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="splash-logo-box-border" aria-hidden />
          <motion.div
            className="splash-logo-box-inner splash-logo-box-inner--wide"
            initial={{ scale: reduceMotion ? 1 : 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 190,
              damping: 22,
              delay: 0.14,
            }}
            style={
              reduceMotion
                ? undefined
                : {
                    boxShadow: `0 28px 70px -24px rgba(4, 67, 127, ${0.28 + progress / 350})`,
                  }
            }
          >
            {!reduceMotion && (
              <>
                <span className="splash-logo-corner splash-logo-corner--tl" aria-hidden />
                <span className="splash-logo-corner splash-logo-corner--tr" aria-hidden />
                <span className="splash-logo-corner splash-logo-corner--bl" aria-hidden />
                <span className="splash-logo-corner splash-logo-corner--br" aria-hidden />
                <motion.span
                  className="splash-logo-shine"
                  aria-hidden
                  animate={{ x: ["-140%", "140%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}

            <div className="relative w-[min(88vw,20rem)] sm:w-[22rem]">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                priority
                sizes="(max-width: 640px) 320px, 352px"
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
