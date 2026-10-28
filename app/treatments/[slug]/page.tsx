import { notFound } from "next/navigation";
import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { TreatmentDetailSection } from "@/components/sections/treatment-detail-section";
import { createPageMetadata } from "@/lib/metadata";
import { getTreatmentBySlug, treatments } from "@/data/treatments";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return createPageMetadata({
    title: treatment.title,
    description: treatment.shortDescription,
    path: `/treatments/${slug}`,
  });
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const related = treatments.filter((t) => t.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={treatment.category}
        title={treatment.title}
        imageSrc={treatment.image}
        priority
      />
      <PageBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: treatment.title },
        ]}
      />
      <TreatmentDetailSection treatment={treatment} related={related} />
      <InnerPageFooter />
    </>
  );
}
