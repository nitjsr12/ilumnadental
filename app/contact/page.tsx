import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { ContactSection } from "@/components/sections/contact-section";
import { createPageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Clinic address, hours, map, phone, WhatsApp, and contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Visit our Jayanagar clinic or reach us anytime."
        imageSrc={images.aboutClinic}
      />
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <ContactSection />
      <InnerPageFooter />
    </>
  );
}
