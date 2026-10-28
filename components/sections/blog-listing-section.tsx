"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

function postHref(post: (typeof blogPosts)[number]) {
  return post.externalUrl ?? `/blog#${post.slug}`;
}

export function BlogListingSection() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <SectionShell variant="muted" className="relative overflow-hidden !pt-6">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Blog & resources"
          title="Health insights for informed decisions"
          description="Articles and guides from iLUMNA Dental to help you make confident choices about your oral health."
        />
        <Button
          href="https://ilumnadental.in/blog/"
          variant="secondary"
          className="self-start"
          showArrow
        >
          View all on ilumnadental.in
        </Button>
      </div>

      <div className="relative mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href={postHref(featured)}
            target={featured.externalUrl ? "_blank" : undefined}
            rel={featured.externalUrl ? "noopener noreferrer" : undefined}
            className="group block overflow-hidden rounded-2xl border border-primary/[0.08] bg-surface shadow-sm transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium text-muted">
                {featured.category} · {featured.publishedLabel}
              </p>
              <h2 className="mt-2 text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-secondary">
                {featured.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
            </div>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              id={post.slug}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="scroll-mt-28"
            >
              <Link
                href={postHref(post)}
                target={post.externalUrl ? "_blank" : undefined}
                rel={post.externalUrl ? "noopener noreferrer" : undefined}
                className="group flex gap-4 rounded-2xl border border-primary/[0.08] bg-surface p-4 transition-all hover:border-gold/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  {post.isPlaceholder && (
                    <span className="text-xs font-medium text-secondary">Preview article</span>
                  )}
                  <p className="text-xs text-muted">
                    {post.category} · {post.publishedLabel}
                  </p>
                  <h3 className="mt-1 font-semibold leading-snug text-foreground group-hover:text-secondary">
                    {post.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
