"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { blogPostHref, blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { fadeUpLite, staggerContainer } from "@/components/animations/variants";
import { FlyingDentalDecor } from "@/components/decor/flying-dental-decor";

const HOME_POST_COUNT = 3;

export function BlogSection() {
  const ordered = [...blogPosts].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const [featured, ...others] = ordered;
  const sidePosts = others.slice(0, HOME_POST_COUNT - 1);

  return (
    <section id="blog" className="premium-section-surface relative overflow-x-clip section-pad">
      <FlyingDentalDecor density="medium" />
      <div className="hero-page-gutter relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <PremiumSectionHeader
            badge="Blog & resources"
            align="left"
            className="!mx-0 max-w-2xl !text-left"
            title={
              <>
                <PremiumTitleDark>Health Insights for </PremiumTitleDark>
                <PremiumTitleBlue>Informed </PremiumTitleBlue>
                <PremiumTitleGold>Decisions</PremiumTitleGold>
              </>
            }
            description="Articles on treatments, prevention, and patient guides from iLUMNA Dental, Jayanagar."
          />
          <Button
            href="/blog"
            variant="secondary"
            className="shrink-0 self-start rounded-full border-[#1781be]/25 !px-6"
            showArrow
          >
            View all articles
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8 xl:mt-9"
        >
          <motion.div variants={fadeUpLite} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
            <Link
              href={blogPostHref(featured)}
              className="premium-card-surface group block h-full overflow-hidden transition-shadow hover:shadow-[0_32px_72px_-36px_rgba(4,67,127,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1781be]"
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
                <p className="text-xs font-semibold text-[#1781be]">
                  {featured.category} · {featured.publishedLabel}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-[#0d1b3e] transition-colors group-hover:text-[#1781be]">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{featured.excerpt}</p>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-4">
            {sidePosts.map((post) => (
              <motion.div
                key={post.slug}
                variants={fadeUpLite}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  href={blogPostHref(post)}
                  className="premium-card-surface group flex gap-4 p-4 transition-shadow hover:shadow-[0_20px_48px_-28px_rgba(4,67,127,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1781be]"
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
                    <p className="text-xs font-semibold text-[#1781be]">
                      {post.category} · {post.publishedLabel}
                    </p>
                    <h3 className="mt-1 font-heading font-bold leading-snug text-[#0d1b3e] group-hover:text-[#1781be]">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-[#64748b]">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}