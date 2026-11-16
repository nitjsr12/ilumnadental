"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { viewportReveal } from "@/lib/motion-config";
import {
  fadeUp,
  fadeUpLite,
  fadeIn,
  scaleIn,
  popCute,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/components/animations/variants";

const presetMap = {
  fadeUp,
  fadeUpLite,
  fadeIn,
  scaleIn,
  popCute,
  slideInLeft,
  slideInRight,
} as const;

type RevealPreset = keyof typeof presetMap;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  preset?: RevealPreset;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({
  children,
  className,
  preset = "fadeUp",
  variants,
  delay,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Comp = motion[as];
  const resolved = variants ?? presetMap[preset];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      variants={resolved}
      transition={delay !== undefined ? { delay } : undefined}
      className={className}
    >
      {children}
    </Comp>
  );
}

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  childClassName?: string;
  as?: "div" | "ul" | "ol";
  fast?: boolean;
};

export function StaggerReveal({
  children,
  className,
  as = "div",
  fast = false,
}: StaggerRevealProps) {
  const reduceMotion = useReducedMotion();
  const Comp = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      variants={
        fast
          ? { hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } } }
          : staggerContainer
      }
      className={className}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  preset = "fadeUpLite",
}: {
  children: React.ReactNode;
  className?: string;
  preset?: RevealPreset;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div variants={presetMap[preset]} className={className}>
      {children}
    </motion.div>
  );
}

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Soft scroll-in for blocks (legacy name — use `Reveal` for new code). */
export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <Reveal className={className} preset="fadeUpLite" delay={delay}>
      {children}
    </Reveal>
  );
}