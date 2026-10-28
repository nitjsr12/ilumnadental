"use client";

import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 4000;
const FAILSAFE_MS = 9000;
const FINISH_MS = 450;

/**
 * Simulated progress tied to document load + minimum display time.
 * Never sits at 100% until the app is ready to dismiss.
 */
export function useSplashProgress() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let frame = 0;
    let appReady = document.readyState === "complete";
    const start = performance.now();

    const markReady = () => {
      appReady = true;
    };
    window.addEventListener("load", markReady);
    const failSafe = window.setTimeout(markReady, FAILSAFE_MS);

    const tick = (now: number) => {
      const elapsed = now - start;
      const minTimeMet = elapsed >= MIN_VISIBLE_MS;

      const raw = Math.min(1, elapsed / (MIN_VISIBLE_MS * 1.08));
      const eased = 1 - (1 - raw) ** 2.1;

      let visual = eased;
      if (!appReady) {
        visual = Math.min(visual, 0.96);
      }
      if (appReady && minTimeMet) {
        const finishT = Math.min(1, (elapsed - MIN_VISIBLE_MS) / FINISH_MS);
        visual = Math.max(visual, 0.96 + finishT * 0.04);
      }

      const pct = Math.min(100, Math.round(visual * 100));
      setProgress(pct);

      if (pct >= 100 && minTimeMet && appReady) {
        setIsComplete(true);
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", markReady);
      window.clearTimeout(failSafe);
    };
  }, []);

  return { progress, isComplete };
}
