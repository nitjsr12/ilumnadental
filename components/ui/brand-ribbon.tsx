"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";

export function BrandRibbon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-b border-gold/30 bg-gradient-to-r from-primary via-[#163544] to-primary"
    >
      <div className="section-container flex flex-wrap items-center justify-between gap-2 py-2 text-xs font-medium text-white/85 sm:text-sm">
        <span className="text-gold">{siteConfig.name}</span>
        <span className="hidden text-white/60 sm:inline">Jayanagar · Bengaluru</span>
        <span className="text-secondary">Digital dentistry & smile design</span>
      </div>
    </motion.div>
  );
}
