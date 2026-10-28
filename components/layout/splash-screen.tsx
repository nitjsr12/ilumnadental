"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SplashBackground } from "@/components/layout/splash-background";
import { SplashAnimatedLogo } from "@/components/layout/splash-animated-logo";
import { SplashHeroVisual } from "@/components/layout/splash-hero-visual";
import { useSplashProgress } from "@/lib/use-splash-progress";
import { siteConfig } from "@/lib/site-config";

type SplashScreenProps = {
  onComplete: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { progress, isComplete } = useSplashProgress();
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isComplete) return;
    const t = window.setTimeout(() => {
      sessionStorage.setItem("ilumna-splash-dismissed", "1");
      setVisible(false);
    }, 280);
    return () => window.clearTimeout(t);
  }, [isComplete]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="splash"
          role="status"
          aria-label={`Loading ${siteConfig.shortName}`}
          aria-live="polite"
          aria-busy={!isComplete}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="splash-v2 splash-v2--aqua fixed inset-0 z-[200] overflow-hidden overscroll-none"
        >
          <SplashBackground />

          <div className="relative z-10 flex min-h-dvh flex-col">
            <div className="flex flex-1 flex-col items-center justify-center px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
              <SplashAnimatedLogo progress={progress} />
              <SplashHeroVisual />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-md text-center sm:mt-8"
              >
                <p className="splash-v2-eyebrow splash-v2-eyebrow--dark">Preparing your smile journey</p>
                <h1 className="splash-v2-headline splash-v2-headline--dark">Sparkling care awaits</h1>
                <p className="splash-v2-subline splash-v2-subline--dark">
                  Gentle, precise dentistry — loading your experience.
                </p>
              </motion.div>
            </div>

            <motion.footer
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="px-6 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-2 sm:px-10"
            >
              <div
                className="mx-auto flex max-w-md items-center gap-4"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                aria-label="Loading progress"
              >
                <div className="splash-v2-progress-track splash-v2-progress-track--dark relative h-[4px] flex-1 overflow-hidden rounded-full">
                  <div
                    className="splash-v2-progress-fill absolute inset-y-0 left-0 rounded-full transition-[width] duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                  {!reduceMotion && (
                    <motion.span
                      className="splash-v2-progress-shimmer absolute inset-y-0 w-16 rounded-full"
                      animate={{ x: ["-20%", "420%"] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      aria-hidden
                    />
                  )}
                </div>
                <span className="splash-v2-percent splash-v2-percent--dark tabular-nums">{progress}</span>
              </div>
              <p className="splash-v2-footer-note splash-v2-footer-note--dark mx-auto mt-3 max-w-md text-center">
                Jayanagar · Bengaluru
              </p>
            </motion.footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
