"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { box: "h-10 w-10", icon: "h-4 w-4" },
  md: { box: "h-12 w-12", icon: "h-5 w-5" },
  lg: { box: "h-14 w-14", icon: "h-6 w-6" },
};

type InteractiveIconProps = {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  className?: string;
  tone?: "light" | "dark" | "accent";
};

export function InteractiveIcon({
  icon: Icon,
  size = "md",
  className,
  tone = "light",
}: InteractiveIconProps) {
  const s = sizes[size];

  return (
    <motion.span
      whileHover={{ scale: 1.08, rotate: -6, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className={cn(
        "interactive-icon inline-flex shrink-0 items-center justify-center rounded-2xl shadow-md ring-1",
        s.box,
        tone === "light" &&
          "bg-gradient-to-br from-white to-accent text-secondary ring-gold/25",
        tone === "dark" &&
          "bg-gradient-to-br from-white/20 to-white/5 text-white ring-white/20 backdrop-blur-md",
        tone === "accent" &&
          "bg-gradient-to-br from-secondary to-primary text-white ring-secondary/30 shadow-secondary/25",
        className,
      )}
      aria-hidden
    >
      <Icon className={s.icon} strokeWidth={1.75} />
    </motion.span>
  );
}
