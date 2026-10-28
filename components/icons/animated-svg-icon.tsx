"use client";

import { motion, useInView } from "motion/react";
import { useId, useRef } from "react";
import { brandColors } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

export type AnimatedIconName =
  | "tooth"
  | "shield"
  | "sparkle"
  | "scan"
  | "heart"
  | "star"
  | "calendar"
  | "users"
  | "pulse";

const boxSizes = {
  sm: "h-10 w-10 [&_svg]:h-6 [&_svg]:w-6",
  md: "h-12 w-12 [&_svg]:h-7 [&_svg]:w-7",
  lg: "h-14 w-14 [&_svg]:h-8 [&_svg]:w-8",
};

type AnimatedSvgIconProps = {
  name: AnimatedIconName;
  size?: keyof typeof boxSizes;
  className?: string;
  tone?: "light" | "dark" | "accent";
};

function AnimatedStroke({
  d,
  delay = 0,
  gradId,
}: {
  d: string;
  delay?: number;
  gradId: string;
}) {
  const ref = useRef<SVGPathElement>(null);
  const inView = useInView(ref, { once: true, margin: "-24px" });

  return (
    <motion.path
      ref={ref}
      d={d}
      fill="none"
      stroke={`url(#${gradId})`}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0.5 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
      transition={{ duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function IconPaths({ name, gradId }: { name: AnimatedIconName; gradId: string }) {
  switch (name) {
    case "tooth":
      return (
        <>
          <AnimatedStroke
            gradId={gradId}
            d="M24 6c-6 0-10 4-10 10 0 3 1 6 2 9l2 14c.5 3 3 5 6 5s5.5-2 6-5l2-14c1-3 2-6 2-9 0-6-4-10-10-10z"
          />
          <motion.path
            d="M20 18h8"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1.75"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </>
      );
    case "shield":
      return (
        <AnimatedStroke
          gradId={gradId}
          delay={0.05}
          d="M24 4l14 5v11c0 9-6 16-14 19-8-3-14-10-14-19V9l14-5z"
        />
      );
    case "sparkle":
      return (
        <>
          <motion.g
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "24px", originY: "24px" }}
          >
            <AnimatedStroke gradId={gradId} d="M24 8v32M8 24h32M13 13l22 22M35 13L13 35" />
          </motion.g>
          <motion.circle
            cx="24"
            cy="24"
            r="3"
            fill={`url(#${gradId})`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 320 }}
          />
        </>
      );
    case "scan":
      return (
        <>
          <AnimatedStroke gradId={gradId} d="M10 14h28M10 34h28M14 10v28M34 10v28" delay={0.05} />
          <motion.rect
            x="16"
            y="16"
            width="16"
            height="16"
            rx="3"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0.4 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
          />
          <motion.path
            d="M16 24h16"
            stroke={`url(#${gradId})`}
            strokeWidth="1.5"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </>
      );
    case "heart":
      return (
        <AnimatedStroke
          gradId={gradId}
          d="M24 34s-12-7-12-16a7 7 0 0112-5 7 7 0 0112 5c0 9-12 16-12 16z"
        />
      );
    case "star":
      return (
        <motion.path
          d="M24 6l4.5 11.5L40 19l-9.5 8 3.5 12L24 33l-10 6 3.5-12L8 19l11.5-1.5L24 6z"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ pathLength: 0, scale: 0.85 }}
          whileInView={{ pathLength: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      );
    case "calendar":
      return (
        <>
          <AnimatedStroke gradId={gradId} d="M10 14h28v24H10V14zM10 20h28M18 8v8M30 8v8" />
          <motion.circle
            cx="18"
            cy="28"
            r="2"
            fill={`url(#${gradId})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          />
          <motion.circle
            cx="24"
            cy="28"
            r="2"
            fill={`url(#${gradId})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
          />
          <motion.circle
            cx="30"
            cy="28"
            r="2"
            fill={`url(#${gradId})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
          />
        </>
      );
    case "users":
      return (
        <>
          <AnimatedStroke gradId={gradId} d="M18 22a5 5 0 100-10 5 5 0 000 10zM30 22a4 4 0 100-8 4 4 0 000 8z" />
          <AnimatedStroke
            gradId={gradId}
            delay={0.25}
            d="M8 38c0-5 4-9 10-9s10 4 10 9M26 38c0-4 3-7 8-7"
          />
        </>
      );
    case "pulse":
      return (
        <>
          <AnimatedStroke gradId={gradId} d="M8 24h8l4-10 6 20 4-12h10" delay={0.05} />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1.25"
            strokeOpacity="0.35"
            animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.15, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{ originX: "24px", originY: "24px" }}
          />
        </>
      );
    default:
      return null;
  }
}

export function AnimatedSvgIcon({
  name,
  size = "md",
  className,
  tone = "light",
}: AnimatedSvgIconProps) {
  const gradId = useId().replace(/:/g, "");

  return (
    <motion.span
      whileHover={{ scale: 1.08, rotate: name === "sparkle" ? 0 : -5, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className={cn(
        "animated-svg-icon inline-flex shrink-0 items-center justify-center rounded-2xl shadow-md ring-1",
        boxSizes[size],
        tone === "light" &&
          "bg-gradient-to-br from-white to-accent ring-gold/25",
        tone === "dark" &&
          "bg-gradient-to-br from-white/20 to-white/5 ring-white/20 backdrop-blur-md",
        tone === "accent" &&
          "bg-gradient-to-br from-secondary to-primary ring-secondary/30 shadow-secondary/25",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 48 48" className="overflow-visible" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={brandColors.teal} />
            <stop offset="55%" stopColor={brandColors.blue} />
            <stop offset="100%" stopColor={brandColors.primary} />
          </linearGradient>
        </defs>
        <IconPaths name={name} gradId={gradId} />
      </svg>
    </motion.span>
  );
}
