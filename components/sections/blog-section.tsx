import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";

function postHref(post: (typeof blogPosts)[number]) {
  return post.externalUrl ?? `/blog#${post.slug}`;
}

export function BlogSection() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <SectionShell variant="muted">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Blog & resources"
          title="Health insights for informed decisions"
          description="Insights from iLUMNA Dental — visit our blog for the latest articles."
        />
        <Button
          href="https://ilumnadental.in/blog/"
          variant="secondary"
          className="self-start"
          showArrow
        >
          View all articles
        </Button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Link
          href={postHref(featured)}
          target={featured.externalUrl ? "_blank" : undefined}
          rel={featured.externalUrl ? "noopener noreferrer" : undefined}
          className="group overflow-hidden rounded-lg border border-primary/[0.08] bg-surface shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-medium text-muted">
              {featured.category} · {featured.publishedLabel}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-secondary">
              {featured.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
          </div>
        </Link>

        <div className="flex flex-col gap-4">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={postHref(post)}
              target={post.externalUrl ? "_blank" : undefined}
              rel={post.externalUrl ? "noopener noreferrer" : undefined}
              className="group flex gap-4 rounded-lg border border-primary/[0.08] bg-surface p-4 transition-shadow hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted">
                  {post.category} · {post.publishedLabel}
                </p>
                <h3 className="mt-1 font-heading font-bold leading-snug text-foreground group-hover:text-secondary">
                  {post.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
