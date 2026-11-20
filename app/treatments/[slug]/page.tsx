import { notFound } from "next/navigation";
import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { TreatmentDetailSection } from "@/components/sections/treatment-detail-section";
import { InvisalignTreatmentPage } from "@/components/sections/invisalign/invisalign-treatment-page";
import {
  INVISALIGN_TREATMENT_SLUG,
  invisalignPageMeta,
  invisalignWhyChoose,
} from "@/data/invisalign-page";
import { createPageMetadata } from "@/lib/metadata";
import { getTreatmentBySlug, treatments } from "@/data/treatments";

type Props = { params: Promise<{ slug: string }> };

/** Dynamic slug — allow blocking while params resolve (Next.js 16 instant nav) */
export const instant = false;

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  const isInvisalign = slug === INVISALIGN_TREATMENT_SLUG;
  return createPageMetadata({
    title: isInvisalign ? invisalignWhyChoose.h1 : treatment.title,
    description: isInvisalign ? invisalignPageMeta.description : treatment.shortDescription,
    path: `/treatments/${slug}`,
  });
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const related = treatments.filter((t) => t.slug !== slug).slice(0, 2);
  const isInvisalign = slug === INVISALIGN_TREATMENT_SLUG;

  return (
    <>
      <PageHero
        eyebrow={isInvisalign ? invisalignWhyChoose.sectionLabel : treatment.category}
        title={isInvisalign ? invisalignWhyChoose.h1 : treatment.title}
        banner="treatment"
      />
      <PageBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: isInvisalign ? "Invisalign Clear Aligners" : treatment.title },
        ]}
      />
      {isInvisalign ? (
        <InvisalignTreatmentPage />
      ) : (
        <TreatmentDetailSection treatment={treatment} related={related} />
      )}
      <InnerPageFooter />
    </>
  );
}
