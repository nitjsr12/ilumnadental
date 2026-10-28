"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import { cn } from "@/lib/utils";

type TreatmentServiceCardProps = {
  treatment: Treatment;
  className?: string;
};

export function TreatmentServiceCard({ treatment, className }: TreatmentServiceCardProps) {
  const shortName = treatment.title.replace(/\s+/g, " ").trim();
  const ctaLabel =
    shortName.length > 28 ? "View service details" : `View ${shortName} details`;

  return (
    <article
      className={cn(
        "treatment-service-card group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white",
        className,
      )}
    >
      <div className="treatment-service-card-media relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        <div className="treatment-service-card-icon-panel absolute inset-0 z-[1] flex items-center justify-center p-6">
          <Image
            src={treatment.iconImage}
            alt=""
            width={280}
            height={280}
            className="treatment-service-card-icon-art h-auto max-h-[7.5rem] w-auto max-w-[min(100%,11rem)] object-contain sm:max-h-[8.25rem] sm:max-w-[12rem]"
            aria-hidden
          />
        </div>
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="treatment-service-card-photo object-cover"
        />
      </div>

      <div className="treatment-service-card-body flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="treatment-service-card-title font-heading text-base font-bold leading-snug sm:text-lg">
          {treatment.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b] line-clamp-3">
          {treatment.shortDescription}
        </p>
        <Link
          href={`/treatments/${treatment.slug}`}
          className="treatment-service-card-cta mt-4 inline-flex items-center gap-1.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1781be]"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
