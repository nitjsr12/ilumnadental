"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SplashAnimatedLogo } from "@/components/layout/splash-animated-logo";
import { useSplashProgress } from "@/lib/use-splash-progress";
import { siteConfig } from "@/lib/site-config";

type SplashScreenProps = {
  onComplete: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { progress, isComplete } = useSplashProgress();
  const [visible, setVisible] = useState(true);

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
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="splash-loader fixed inset-0 z-[200] flex items-center justify-center overflow-hidden overscroll-none"
        >
          <span className="sr-only">Loading progress {progress} percent</span>
          <SplashAnimatedLogo progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}