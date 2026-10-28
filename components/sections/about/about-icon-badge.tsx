"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AboutIconBadgeProps = {
  icon: LucideIcon;
  className?: string;
  size?: "md" | "lg";
  tone?: "light" | "dark";
};

export function AboutIconBadge({
  icon: Icon,
  className,
  size = "md",
  tone = "light",
}: AboutIconBadgeProps) {
  const sizeClass =
    size === "lg" ? "h-14 w-14 rounded-2xl [&_svg]:h-6 [&_svg]:w-6" : "h-12 w-12 rounded-xl [&_svg]:h-5 [&_svg]:w-5";

  return (
    <motion.span
      whileHover={{ scale: 1.06, rotate: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className={cn(
        "inline-flex shrink-0 items-center justify-center shadow-md ring-1 transition-shadow duration-300 group-hover:shadow-lg",
        sizeClass,
        tone === "light" &&
          "bg-gradient-to-br from-secondary/15 via-surface to-gold/15 text-secondary ring-gold/30",
        tone === "dark" &&
          "bg-gradient-to-br from-white/20 to-white/5 text-white ring-white/25 backdrop-blur-sm",
        className,
      )}
    >
      <Icon strokeWidth={1.75} aria-hidden />
    </motion.span>
  );
}
