"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { blogPostHref } from "@/data/blog";
import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";
import { fadeUpLite } from "@/components/animations/variants";

export function BlogArticleSection({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  return (
    <>
      <SectionShell variant="surface" className="!pt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpLite}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1781be] transition-colors hover:text-[#04437f]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to blog
          </Link>

          <p className="mt-5 text-sm font-semibold text-[#1781be]">
            {post.category} · {post.publishedLabel}
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-tight text-[#0d1b3e]">
            {post.title}
          </h1>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#64748b]">
            <Clock className="h-4 w-4 text-[#05a2a4]" aria-hidden />
            {post.readTimeMinutes} min read
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="premium-card-surface relative mt-8 aspect-[16/9] max-h-[28rem] overflow-hidden !p-0 sm:mt-10"
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 72rem"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.55 }}
          className="prose-blog mx-auto mt-8 max-w-3xl sm:mt-10"
        >
          <p className="text-lg font-medium leading-relaxed text-[#0d1b3e]/90">{post.excerpt}</p>
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-5 text-base leading-relaxed text-[#64748b]">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-3">
          <Button href="/book-appointment" showArrow>
            Book a consultation
          </Button>
          <Button href="/contact" variant="secondary">
            Contact clinic
          </Button>
        </div>
      </SectionShell>

      {related.length > 0 && (
        <SectionShell variant="muted" className="!pt-0">
          <h2 className="font-heading text-xl font-bold text-[#0d1b3e] sm:text-2xl">Related articles</h2>
          <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={blogPostHref(item)}
                  className="premium-card-surface group block p-5 transition-shadow hover:shadow-[0_20px_48px_-28px_rgba(4,67,127,0.16)]"
                >
                  <p className="text-xs font-semibold text-[#1781be]">{item.category}</p>
                  <h3 className="mt-1 font-heading font-bold text-[#0d1b3e] group-hover:text-[#1781be]">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[#64748b]">{item.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </SectionShell>
      )}
    </>
  );
}