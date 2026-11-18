"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { sectionReveal } from "@/components/animations/variants";
import { FlyingDentalDecor } from "@/components/decor/flying-dental-decor";
import { viewportReveal } from "@/lib/motion-config";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "muted" | "surface";
  /** Scroll-in animation when section enters view */
  animate?: boolean;
  /** Floating teeth / sparkle ambience */
  decor?: boolean;
  decorDensity?: "soft" | "medium" | "rich";
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
  decor = true,
  decorDensity = "medium",
}: SectionShellProps) {
  const reduceMotion = useReducedMotion();
  const shellClass = cn("section-pad relative overflow-x-clip", variants[variant], className);
  const decorLayer = decor ? <FlyingDentalDecor density={decorDensity} /> : null;

  const inner = (
    <div className={cn("hero-page-gutter relative z-10", innerClassName)}>{children}</div>
  );

  if (!animate || reduceMotion) {
    return (
      <section id={id} className={shellClass}>
        {decorLayer}
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
      {decorLayer}
      {inner}
    </motion.section>
  );
}