"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { SplashAnimatedLogo } from "@/components/layout/splash-animated-logo";
import { SplashFloatingElements } from "@/components/layout/splash-floating-elements";
import { useSplashProgress } from "@/lib/use-splash-progress";
import { siteConfig } from "@/lib/site-config";

type SplashScreenProps = {
  onComplete: () => void;
};

const LOADING_LINES = [
  { until: 38, text: "Preparing your experience" },
  { until: 72, text: "Loading precision dental care" },
  { until: 100, text: "Opening iLUMNA Dental" },
] as const;

function loadingMessage(progress: number) {
  return LOADING_LINES.find((line) => progress < line.until)?.text ?? LOADING_LINES.at(-1)!.text;
}

function loadingPhase(progress: number) {
  if (progress < 38) return 0;
  if (progress < 72) return 1;
  return 2;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { progress, isComplete } = useSplashProgress();
  const [visible, setVisible] = useState(true);
  const statusText = useMemo(() => loadingMessage(progress), [progress]);
  const statusPhase = useMemo(() => loadingPhase(progress), [progress]);

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
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="splash-loader fixed inset-0 z-[200] overflow-hidden overscroll-none"
        >
          <div className="splash-loader-bg pointer-events-none absolute inset-0" aria-hidden>
            <div className="splash-v2-bg-base" />
            <motion.div
              className="splash-v2-sweep"
              animate={{ rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            />
            <div className="splash-v2-orb splash-v2-orb--a" />
            <div className="splash-v2-orb splash-v2-orb--b" />
            <div className="splash-v2-orb splash-v2-orb--c" />
            <div className="splash-v2-grid" />
            <div className="splash-v2-vignette" />
            <div className="splash-v2-bg-grain" />
          </div>

          <SplashFloatingElements />

          <div className="splash-loader-floaters pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            {["🦷", "✨", "🦷", "✨"].map((emoji, i) => (
              <motion.span
                key={i}
                className="splash-loader-emoji absolute text-2xl opacity-35 sm:text-3xl"
                style={{
                  left: `${12 + i * 22}%`,
                  top: `${18 + (i % 2) * 58}%`,
                }}
                animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
                transition={{
                  duration: 5 + i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>

          <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 py-12">
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="splash-loader-eyebrow mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#f5d76e]" aria-hidden />
              Advanced Dental Centre
            </motion.p>

            <SplashAnimatedLogo progress={progress} />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55 }}
              className="splash-loader-status mt-14 w-full max-w-[20rem] sm:max-w-[22rem]"
            >
              <div className="splash-loader-status-panel rounded-2xl px-5 py-4 text-left">
                <div className="flex items-center justify-between gap-3">
                  <span className="splash-loader-status-kicker">Loading</span>
                  <span className="splash-loader-status-pct tabular-nums" aria-hidden>
                    {progress}
                    <span className="splash-loader-status-pct-suffix">%</span>
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={statusPhase}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="splash-loader-status-msg mt-2"
                  >
                    {statusText}
                  </motion.p>
                </AnimatePresence>

                <div className="splash-loader-track mt-3.5 overflow-hidden rounded-full">
                  <motion.div
                    className="splash-loader-fill relative h-full rounded-full"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="splash-loader-fill-shimmer" aria-hidden />
                  </motion.div>
                </div>

                <p className="splash-loader-status-foot mt-3">Jayanagar · Bengaluru</p>
              </div>
            </motion.div>
          </div>

          <span className="sr-only">Loading progress {progress} percent</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}