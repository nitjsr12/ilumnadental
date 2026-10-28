import { Breadcrumbs } from "@/components/ui/breadcrumbs";

type Crumb = { label: string; href?: string };

export function PageBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="border-b border-primary/[0.06] bg-white/80 backdrop-blur-sm">
      <div className="hero-page-gutter py-3 sm:py-3.5">
        <Breadcrumbs items={items} />
      </div>
    </div>
  );
}
