"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { SplashScreen } from "@/components/layout/splash-screen";

const STORAGE_KEY = "ilumna-splash-dismissed";

export function AppContent({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const skipped = sessionStorage.getItem(STORAGE_KEY) === "1";
    if (skipped) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time splash gate on mount
      setContentReady(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time splash gate on mount
      setContentReady(true);
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time splash gate on mount
    setShowSplash(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    setContentReady(true);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <motion.div
        initial={false}
        animate={{
          opacity: contentReady ? 1 : 0,
          y: contentReady ? 0 : 16,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={showSplash ? "pointer-events-none select-none" : undefined}
      >
        {children}
      </motion.div>
    </>
  );
}
