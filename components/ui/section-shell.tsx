"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { sectionReveal } from "@/components/animations/variants";
import { viewportReveal } from "@/lib/motion-config";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "muted" | "surface";
  /** Scroll-in animation when section enters view */
  animate?: boolean;
};

const variants = {
  default: "bg-background",
  muted: "premium-section-muted",
  surface: "premium-section-surface",
};

/** Inner page section wrapper — matches homepage gutters and backgrounds */
export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  variant = "default",
  animate = true,
}: SectionShellProps) {
  const reduceMotion = useReducedMotion();
  const shellClass = cn("section-pad relative overflow-x-clip", variants[variant], className);

  const inner = (
    <div className={cn("hero-page-gutter relative z-10", innerClassName)}>{children}</div>
  );

  if (!animate || reduceMotion) {
    return (
      <section id={id} className={shellClass}>
        {inner}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={shellClass}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      variants={sectionReveal}
    >
      {inner}
    </motion.section>
  );
}