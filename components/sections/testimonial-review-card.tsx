"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function initial(name: string) {
  return name.trim().charAt(0).toUpperCase() || "?";
}

export function TestimonialReviewCard({ item }: { item: Testimonial }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="flex h-full min-h-[18rem] flex-col rounded-2xl border border-primary/[0.08] bg-surface p-5 shadow-[0_12px_40px_-24px_rgba(18,36,47,0.15)] sm:min-h-[20rem] sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1a73e8] font-heading text-lg font-bold text-white">
            {initial(item.author)}
          </span>
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-bold text-foreground">
              {item.author}
            </p>
            {item.treatment && (
              <p className="mt-1 inline-block rounded-md bg-secondary/10 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-secondary">
                {item.treatment}
              </p>
            )}
          </div>
        </div>
        <GoogleMark className="h-5 w-5 shrink-0 opacity-90" />
      </div>

      {item.rating && (
        <span className="mt-4 flex gap-0.5 text-gold" aria-label={`${item.rating} out of 5 stars`}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
          ))}
        </span>
      )}

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-5">
        {item.quote}
      </blockquote>
    </motion.article>
  );
}
