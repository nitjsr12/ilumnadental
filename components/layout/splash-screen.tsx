"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { SplashBackground } from "@/components/layout/splash-background";
import { SplashAnimatedLogo } from "@/components/layout/splash-animated-logo";
import { SplashBrushingTooth } from "@/components/icons/splash-brushing-tooth";
import { useSplashProgress } from "@/lib/use-splash-progress";
import { siteConfig } from "@/lib/site-config";

type SplashScreenProps = {
  onComplete: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { progress, isComplete } = useSplashProgress();
  const [visible, setVisible] = useState(true);
  const [brushActive, setBrushActive] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setBrushActive(true), 1300);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isComplete) return;
    const t = window.setTimeout(() => {
      sessionStorage.setItem("ilumna-splash-dismissed", "1");
      setVisible(false);
    }, 320);
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
          exit={{ opacity: 0, y: -18, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="splash-screen fixed inset-0 z-[200] overflow-hidden overscroll-none"
        >
          <SplashBackground />

          <div className="relative z-10 flex min-h-dvh w-full items-center justify-center px-5 sm:px-8">
            <div className="flex w-full max-w-xl flex-col items-center justify-center gap-5 text-center sm:gap-6">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="splash-clinic-badge inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#f5d76e]" strokeWidth={2} aria-hidden />
                Advanced Dental Centre · Jayanagar
              </motion.p>

              <SplashAnimatedLogo progress={progress} />

              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.85,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
              >
                <SplashBrushingTooth brushActive={brushActive} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <h1 className="splash-tagline-ref">Preparing Your Smile Journey</h1>
                <p className="splash-clinic-sub mt-2 text-sm font-medium text-white/85 sm:text-base">
                  Precision care with a gentle touch
                </p>

                <div
                  className="splash-progress-track-ref mx-auto mt-6 sm:mt-7"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  aria-label="Loading progress"
                >
                  <div
                    className="splash-progress-fill-ref h-full rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="splash-percent-ref mt-3 tabular-nums sm:mt-3.5" aria-hidden>
                  {progress}%
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
