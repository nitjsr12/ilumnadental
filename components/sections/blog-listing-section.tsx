"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { blogPostHref, blogPosts } from "@/data/blog";
import { fadeUpLite, staggerContainer } from "@/components/animations/variants";

export function BlogListingSection() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <SectionShell variant="surface" className="!pt-0">
      <PremiumSectionHeader
        badge="All articles"
        className="mx-auto"
        title={
          <>
            <PremiumTitleDark>Dental insights & </PremiumTitleDark>
            <PremiumTitleBlue>patient </PremiumTitleBlue>
            <PremiumTitleGold>guides</PremiumTitleGold>
          </>
        }
        description="Practical articles on treatments, prevention, and what to expect at iLUMNA Dental, Jayanagar."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mt-8 space-y-8 lg:mt-10"
      >
        <motion.article variants={fadeUpLite}>
          <Link
            href={blogPostHref(featured)}
            className="premium-card-surface group grid overflow-hidden transition-shadow hover:shadow-[0_32px_72px_-36px_rgba(4,67,127,0.22)] lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[16rem]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
              <span className="absolute left-4 top-4 rounded-full bg-[#04437f]/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold text-[#1781be]">
                {featured.category} · {featured.publishedLabel}
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold leading-snug text-[#0d1b3e] transition-colors group-hover:text-[#1781be] sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#64748b]">{featured.excerpt}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#04437f]">
                <Clock className="h-4 w-4 text-[#05a2a4]" aria-hidden />
                {featured.readTimeMinutes} min read
                <span className="ml-1 text-[#1781be]">Read article →</span>
              </p>
            </div>
          </Link>
        </motion.article>

        <motion.ul
          variants={staggerContainer}
          className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {rest.map((post) => (
            <motion.li key={post.slug} variants={fadeUpLite} className="list-none">
              <Link
                href={blogPostHref(post)}
                className="premium-card-surface group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[0_24px_56px_-32px_rgba(4,67,127,0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold text-[#1781be]">
                    {post.category} · {post.publishedLabel}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-[#0d1b3e] group-hover:text-[#1781be]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#64748b]">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-[#04437f]/80">
                    {post.readTimeMinutes} min read
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </SectionShell>
  );
}