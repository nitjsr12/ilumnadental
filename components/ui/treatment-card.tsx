"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  Layers,
  Shield,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Treatment } from "@/data/treatments";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  implant: Layers,
  align: Smile,
  sparkles: Sparkles,
  shield: Shield,
  layers: Layers,
  "heart-pulse": HeartPulse,
};

export function TreatmentCard({
  treatment,
  className,
  index = 0,
}: {
  treatment: Treatment;
  className?: string;
  index?: number;
}) {
  const Icon = iconMap[treatment.icon] ?? Activity;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "treatment-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-surface shadow-[0_20px_50px_-28px_rgba(18,36,47,0.25)] transition-[box-shadow,border-color] duration-500 hover:border-secondary/35 hover:shadow-[0_28px_60px_-24px_rgba(18,36,47,0.28)]",
        className,
      )}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/15 to-transparent"
        />
        <div className="absolute inset-0 bg-secondary/0 transition-colors duration-500 group-hover:bg-secondary/10" />

        <span className="absolute left-4 top-4 font-heading text-xs font-bold tabular-nums tracking-widest text-white/90">
          {indexLabel}
        </span>

        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </span>

        <p className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {treatment.category}
        </p>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div
          aria-hidden
          className="treatment-card-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <h3 className="font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-secondary sm:text-xl">
          {treatment.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {treatment.shortDescription}
        </p>

        <Link
          href={`/treatments/${treatment.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-accent/50 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:border-secondary/30 group-hover:bg-secondary/10 group-hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Learn more
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-secondary">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden />
          </span>
        </Link>
      </div>
    </article>
  );
}
