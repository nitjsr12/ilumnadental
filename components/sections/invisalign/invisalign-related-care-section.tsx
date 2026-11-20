import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { TreatmentServiceCard } from "@/components/sections/treatment-service-card";

type Props = {
  related: Treatment[];
};

export function InvisalignRelatedCareSection({ related }: Props) {
  return (
    <div>
      <PremiumSectionHeader
        badge="Related care"
        align="left"
        className="!mx-0 max-w-2xl !text-left"
        title={
          <>
            <PremiumTitleDark>You May Also </PremiumTitleDark>
            <PremiumTitleBlue>Be </PremiumTitleBlue>
            <PremiumTitleGold>Interested In</PremiumTitleGold>
          </>
        }
        description="Explore other orthodontic and smile services at our Jayanagar clinic."
      />
      <ul className="mt-8 grid list-none gap-5 p-0 sm:grid-cols-2">
        {related.map((t) => (
          <li key={t.slug}>
            <TreatmentServiceCard treatment={t} />
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-[#64748b]">
        Considering fixed braces?{" "}
        <Link
          href="/treatments/braces-treatment"
          className="inline-flex items-center gap-1 font-semibold text-[#1781be] underline-offset-2 hover:underline"
        >
          Compare with traditional braces
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </p>
    </div>
  );
}