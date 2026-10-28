import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { TreatmentsPageGrid } from "@/components/sections/treatments-page-grid";
import { createPageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Dental Treatments & Services",
  description:
    "Advanced implant dentistry, Invisalign, smile design, root canal care, and more at iLUMNA Dental, Jayanagar.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="iLUMNA Dental · Treatments"
        title="Advanced dental care for healthy, confident smiles."
        imageSrc={images.heroSecondary}
      />
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Treatments" }]} />
      <TreatmentsPageGrid />
      <InnerPageFooter />
    </>
  );
}
