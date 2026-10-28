"use client";

import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

function StarRow({ rating = 5 }: { rating?: number }) {
  const value = Math.min(5, Math.max(0, rating));
  return (
    <div
      className="flex items-center justify-center gap-1"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <Star
            key={i}
            className={
              filled
                ? "h-5 w-5 fill-[#d4af37] text-[#d4af37]"
                : "h-5 w-5 fill-none text-[#cbd5e1]"
            }
            strokeWidth={filled ? 0 : 1.5}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

export function TestimonialReviewCard({ item }: { item: Testimonial }) {
  return (
    <article className="testimonials-premium-slide flex flex-col items-center px-6 pb-2 pt-8 text-center sm:px-10 sm:pt-10">
      <StarRow rating={item.rating} />

      <blockquote className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-[#475569] sm:text-xl sm:leading-relaxed">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <footer className="mt-8">
        <p className="font-heading text-base font-bold text-[#1781be] sm:text-lg">{item.author}</p>
        {item.postedAgo ? (
          <p className="mt-1 text-sm text-[#94a3b8]">{item.postedAgo}</p>
        ) : null}
      </footer>
    </article>
  );
}
