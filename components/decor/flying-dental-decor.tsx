"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type FlyingDentalDecorProps = {
  /** Light sections use brand tint; dark/heroes use frosted whites. */
  variant?: "light" | "dark" | "hero";
  density?: "soft" | "medium" | "rich";
  className?: string;
};

type DecorItem = {
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  delay: number;
  duration: number;
  rotate?: number;
  motion?: "a" | "b" | "c";
};

const BASE_ITEMS: DecorItem[] = [
  { emoji: "🦷", top: "6%", left: "3%", size: "1.5rem", delay: 0, duration: 11, rotate: -12, motion: "a" },
  { emoji: "✨", top: "12%", right: "5%", size: "1.1rem", delay: 0.4, duration: 9, motion: "b" },
  { emoji: "🦷", top: "22%", right: "8%", size: "1.75rem", delay: 1.1, duration: 13, rotate: 18, motion: "c" },
  { emoji: "⭐", top: "38%", left: "2%", size: "0.95rem", delay: 0.2, duration: 8, motion: "b" },
  { emoji: "🦷", top: "48%", left: "6%", size: "1.25rem", delay: 0.8, duration: 10, rotate: -8, motion: "a" },
  { emoji: "💫", top: "55%", right: "4%", size: "1.15rem", delay: 1.4, duration: 9.5, motion: "c" },
  { emoji: "🦷", top: "72%", right: "10%", size: "1.4rem", delay: 0.6, duration: 12, rotate: 10, motion: "b" },
  { emoji: "✨", top: "78%", left: "8%", size: "1rem", delay: 1.8, duration: 10.5, motion: "a" },
  { emoji: "😁", top: "88%", right: "18%", size: "1.3rem", delay: 0.3, duration: 11.5, motion: "c" },
];

const EXTRA_ITEMS: DecorItem[] = [
  { emoji: "🦷", top: "18%", left: "12%", size: "1.05rem", delay: 2, duration: 14, rotate: 22, motion: "b" },
  { emoji: "✨", top: "30%", right: "14%", size: "0.9rem", delay: 0.9, duration: 8.5, motion: "a" },
  { emoji: "🦷", top: "64%", left: "14%", size: "1.6rem", delay: 1.2, duration: 15, rotate: -15, motion: "c" },
  { emoji: "⭐", top: "42%", right: "2%", size: "0.85rem", delay: 2.2, duration: 9, motion: "b" },
  { emoji: "🦷", top: "8%", right: "22%", size: "1.2rem", delay: 1.6, duration: 11, rotate: 6, motion: "a" },
  { emoji: "✨", top: "92%", left: "22%", size: "1.05rem", delay: 0.5, duration: 10, motion: "c" },
];

const variantClass = {
  light: "flying-dental-decor--light",
  dark: "flying-dental-decor--dark",
  hero: "flying-dental-decor--hero",
};

const motionClass = {
  a: "flying-dental-emoji--motion-a",
  b: "flying-dental-emoji--motion-b",
  c: "flying-dental-emoji--motion-c",
};

export type FloatingEmojiStyle = Pick<
  DecorItem,
  "emoji" | "delay" | "duration" | "rotate" | "motion"
> & {
  className?: string;
  style?: CSSProperties;
};

/** Single continuously floating emoji — use on portraits/cards too. */
export function FloatingDentalEmoji({
  emoji,
  delay = 0,
  duration = 10,
  rotate = 0,
  motion = "a",
  className,
  style,
}: FloatingEmojiStyle) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      aria-hidden
      className={cn(
        "flying-dental-emoji",
        !reduceMotion && motionClass[motion],
        reduceMotion && "is-static",
        className,
      )}
      style={
        {
          ...style,
          "--fd-delay": `${delay}s`,
          "--fd-dur": `${duration}s`,
          "--fd-rot": `${rotate}deg`,
        } as CSSProperties
      }
    >
      {emoji}
    </span>
  );
}

/** Ambient floating teeth + sparkles for section backgrounds. */
export function FlyingDentalDecor({
  variant = "light",
  density = "medium",
  className,
}: FlyingDentalDecorProps) {
  const reduceMotion = useReducedMotion();
  const items =
    density === "soft"
      ? BASE_ITEMS.slice(0, 5)
      : density === "rich"
        ? [...BASE_ITEMS, ...EXTRA_ITEMS]
        : BASE_ITEMS;

  return (
    <div
      aria-hidden
      className={cn(
        "flying-dental-decor pointer-events-none absolute inset-0 overflow-hidden",
        variantClass[variant],
        className,
      )}
    >
      <span className="flying-dental-orb flying-dental-orb--a" />
      <span className="flying-dental-orb flying-dental-orb--b" />
      <span className="flying-dental-orb flying-dental-orb--c" />

      {items.map((item, i) => (
        <span
          key={`${item.emoji}-${i}`}
          className={cn(
            "flying-dental-emoji",
            !reduceMotion && item.motion && motionClass[item.motion],
            reduceMotion && "is-static",
          )}
          style={
            {
              top: item.top,
              left: item.left,
              right: item.right,
              fontSize: item.size,
              "--fd-delay": `${item.delay}s`,
              "--fd-dur": `${item.duration}s`,
              "--fd-rot": `${item.rotate ?? 0}deg`,
            } as CSSProperties
          }
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}