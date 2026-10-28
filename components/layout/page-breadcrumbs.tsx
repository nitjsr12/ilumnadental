import { Breadcrumbs } from "@/components/ui/breadcrumbs";

type Crumb = { label: string; href?: string };

export function PageBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="section-container pt-4 lg:pt-5">
      <Breadcrumbs items={items} />
    </div>
  );
}
