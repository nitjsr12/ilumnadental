"use client";

import { useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function SplitHeading({
  lines,
  className,
  lineClassName,
  accentLineIndex,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  accentLineIndex?: number;
}) {
  const isClient = useIsClient();

  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          {isClient ? (
            <motion.span
              className={cn(
                "block",
                lineClassName,
                accentLineIndex === i && "!text-secondary",
              )}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.08 + i * 0.12, ease }}
            >
              {line}
            </motion.span>
          ) : (
            <span
              className={cn(
                "block",
                lineClassName,
                accentLineIndex === i && "!text-secondary",
              )}
            >
              {line}
            </span>
          )}
        </span>
      ))}
    </span>
  );
}
