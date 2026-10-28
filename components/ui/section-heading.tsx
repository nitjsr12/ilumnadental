"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-72px" }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow mb-2">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={fadeUp} className="section-title">
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn("text-lead mt-3 max-w-xl", align === "center" && "mx-auto")}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
