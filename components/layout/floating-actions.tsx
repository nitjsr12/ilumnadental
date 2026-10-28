"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { formatWhatsAppHref } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
      <a
        href={formatWhatsAppHref(
          siteConfig.contact.whatsapp,
          "Hello, I would like to inquire about an orthopedic appointment.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-[#128C7E] px-4 text-sm font-semibold text-white shadow-lg shadow-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        <span className="hidden min-[400px]:inline">WhatsApp</span>
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-primary/12 bg-surface text-primary shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" strokeWidth={1.75} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
