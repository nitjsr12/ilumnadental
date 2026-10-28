import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { BlogListingSection } from "@/components/sections/blog-listing-section";
import { createPageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Blog & Health Resources",
  description: "Dental health articles and patient guides from iLUMNA Dental, Jayanagar.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & resources"
        title="Health insights for informed dental decisions."
        imageSrc={images.consultation}
      />
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <BlogListingSection />
      <InnerPageFooter />
    </>
  );
}
