"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/components/animations/variants";

const reveal: Variants = {
  hidden: { opacity: 1, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type PremiumSectionHeaderProps = {
  badge?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Light badge on dark sections */
  tone?: "light" | "dark";
  /** Pill badge (default) or plain label row like treatments reference */
  badgeVariant?: "pill" | "plain";
  titleClassName?: string;
  descriptionClassName?: string;
};

export function PremiumSectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
  tone = "light",
  badgeVariant = "pill",
  titleClassName,
  descriptionClassName,
}: PremiumSectionHeaderProps) {
  const badgeClass =
    badgeVariant === "plain"
      ? tone === "dark"
        ? "text-white"
        : "text-[#1781be]"
      : tone === "dark"
        ? "border border-white/25 bg-white/10 text-white backdrop-blur-md"
        : "bg-[#e8f4fc] text-[#1781be]";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <motion.div
          variants={reveal}
          className={cn(
            "inline-flex items-center gap-2 font-semibold",
            badgeVariant === "pill"
              ? "mb-4 rounded-full px-4 py-2 text-sm"
              : "mb-3 text-base sm:text-[1.0625rem]",
            badgeClass,
          )}
        >
          <Sparkles
            className={cn(
              "text-[#d4af37]",
              badgeVariant === "plain" ? "h-[1.125rem] w-[1.125rem]" : "h-4 w-4",
            )}
            strokeWidth={2}
            aria-hidden
          />
          {badge}
        </motion.div>
      )}

      <motion.h2
        variants={reveal}
        className={cn(
          "premium-section-title",
          tone === "dark" && "text-white",
          titleClassName,
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={reveal}
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/85" : "text-[#64748b]",
            align === "center" && "mx-auto max-w-2xl",
            align === "left" && "max-w-xl",
            descriptionClassName,
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

/** Title accent helpers — match testimonials / treatments */
export function PremiumTitleDark({ children }: { children: ReactNode }) {
  return <span className="text-[#0d1b3e]">{children}</span>;
}

export function PremiumTitleBlue({ children }: { children: ReactNode }) {
  return <span className="text-[#1781be]">{children}</span>;
}

export function PremiumTitleGold({ children }: { children: ReactNode }) {
  return <span className="premium-title-gold">{children}</span>;
}
