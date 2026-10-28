"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(8% 8% 8% 8% round 12px)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 12px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}
