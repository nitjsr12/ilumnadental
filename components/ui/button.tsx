"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-[background,box-shadow,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary active:scale-[0.98]";

const variants = {
  primary:
    "bg-primary text-white shadow-[0_8px_24px_-8px_rgba(18,59,93,0.55)] hover:bg-[#0f3250]",
  secondary:
    "border border-primary/12 bg-surface text-primary shadow-sm hover:border-primary/20 hover:bg-accent/60",
  ghost: "text-primary hover:bg-accent/80",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  showArrow,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className, disabled && "opacity-60 pointer-events-none");

  const content = (
    <>
      {children}
      {showArrow && (
        <motion.span
          className="inline-flex"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
