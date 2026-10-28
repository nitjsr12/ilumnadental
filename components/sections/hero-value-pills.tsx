"use client";

import { motion } from "motion/react";
import {
  AnimatedSvgIcon,
  type AnimatedIconName,
} from "@/components/icons/animated-svg-icon";

const pills: { icon: AnimatedIconName; title: string; text: string }[] = [
  { icon: "shield", title: "Painless care", text: "Gentle, modern techniques" },
  { icon: "sparkle", title: "Expert team", text: "Implant & aesthetic focus" },
  { icon: "scan", title: "Digital dentistry", text: "Precision diagnostics" },
  { icon: "heart", title: "Patient first", text: "Comfort at every visit" },
];

export function HeroValuePills() {
  return (
    <div className="border-b border-primary/[0.06] bg-surface/80 backdrop-blur-md">
      <div className="section-container grid gap-3 py-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:py-5">
        {pills.map((pill, i) => (
          <motion.div
            key={pill.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="group flex items-center gap-3 rounded-2xl border border-primary/[0.08] bg-background/90 px-3 py-3 transition-shadow hover:border-secondary/25 hover:shadow-[0_16px_40px_-28px_rgba(18,36,47,0.2)] sm:px-4"
          >
            <AnimatedSvgIcon name={pill.icon} size="sm" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{pill.title}</p>
              <p className="text-xs text-muted">{pill.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
