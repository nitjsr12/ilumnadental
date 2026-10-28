import { AboutFeaturesSection } from "@/components/sections/about/about-features-section";
import { AboutImpactSection } from "@/components/sections/about/about-impact-section";
import { AboutIntroSection } from "@/components/sections/about/about-intro-section";
import { AboutPhilosophySection } from "@/components/sections/about/about-philosophy-section";
import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { aboutCta } from "@/data/about-page";
import { createPageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "About iLUMNA Dental",
  description:
    "About iLUMNA Dental — advanced digital dentistry, personalized care, and implant expertise in Jayanagar, Bengaluru, led by Dr. Inchara Vadegadde.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="iLUMNA Dental · Jayanagar"
        title="Precision, trust, and care behind every smile we restore."
        imageSrc={images.heroPrimary}
        priority
      />
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      <AboutIntroSection />
      <AboutFeaturesSection />
      <AboutPhilosophySection />
      <AboutImpactSection />
      <CtaBannerSection
        eyebrow={aboutCta.eyebrow}
        title={aboutCta.title}
        titleHighlight="Smile"
        description={aboutCta.description}
        showAddress={false}
      />
    </>
  );
}
