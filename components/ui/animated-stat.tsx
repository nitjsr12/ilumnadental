"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

export function AnimatedStat({
  value,
  suffix = "",
  decimals = 0,
  animateOnView = true,
  className,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  /** When true (default), count-up runs once the stat enters the viewport. */
  animateOnView?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px 35% 0px",
  });
  const readyToAnimate = !animateOnView || inView;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!readyToAnimate) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [readyToAnimate, value]);

  const current = animateOnView && !inView ? value : display;
  const formatted =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();

  return (
    <span
      ref={ref}
      className={cn("font-heading text-2xl font-bold tabular-nums text-primary", className)}
    >
      {formatted}
      {suffix}
    </span>
  );
}
