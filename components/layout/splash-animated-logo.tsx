"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/lib/site-config";

type SplashAnimatedLogoProps = {
  progress?: number;
};

/** Centered logo mark with rotating parenthesis-style loader arcs. */
export function SplashAnimatedLogo({ progress: _progress = 0 }: SplashAnimatedLogoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="splash-loader-mark relative flex items-center justify-center"
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="splash-loader-arc absolute"
        aria-hidden
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 1.35, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 120 120"
          className="h-[min(52vw,9.5rem)] w-[min(80vw,14rem)] sm:h-[10.5rem] sm:w-[15.5rem]"
        >
          <path
            d="M60 14 A46 46 0 0 0 60 106"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M60 14 A46 46 0 0 1 60 106"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      <div className="splash-loader-mark-inner relative z-[1]">
        <Image
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          priority
          sizes="(max-width: 640px) 220px, 260px"
          className="splash-loader-logo h-auto w-[min(68vw,11.5rem)] sm:w-[13rem]"
        />
      </div>
    </motion.div>
  );
}