"use client";

import { motion, useReducedMotion } from "motion/react";
import { pageEnter } from "@/components/animations/variants";
export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={pageEnter}>
      {children}
    </motion.div>
  );
}