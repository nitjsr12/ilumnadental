"use client";

import { MotionConfig } from "motion/react";
import { easeSoft, motionDuration } from "@/lib/motion-config";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: motionDuration.base,
        ease: easeSoft,
      }}
    >
      {children}
    </MotionConfig>
  );
}
