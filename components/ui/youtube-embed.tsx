"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { youtubeEmbedUrl, youtubeThumbnailUrl, youtubeWatchUrl } from "@/data/video-testimonials";

type YoutubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  /** When the embed is inside a button list, parent may control playback */
  autoplayOnReveal?: boolean;
  /** When video changes from a playlist, start playback immediately */
  startActive?: boolean;
};

export function YoutubeEmbed({
  videoId,
  title,
  className,
  autoplayOnReveal = true,
  startActive = false,
}: YoutubeEmbedProps) {
  const [active, setActive] = useState(startActive);

  useEffect(() => {
    setActive(startActive);
  }, [videoId, startActive]);

  const reveal = useCallback(() => setActive(true), []);

  const embedSrc = autoplayOnReveal
    ? `${youtubeEmbedUrl(videoId)}&autoplay=1`
    : youtubeEmbedUrl(videoId);

  return (
    <div
      className={cn(
        "video-embed relative overflow-hidden rounded-2xl border border-[#04437f]/10 bg-[#021a33] shadow-[0_24px_56px_-32px_rgba(4,67,127,0.5)]",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={`embed-${videoId}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <iframe
                title={title}
                src={embedSrc}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          ) : (
            <motion.button
              key={`poster-${videoId}`}
              type="button"
              onClick={reveal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="group absolute inset-0 flex w-full items-center justify-center text-left"
              aria-label={`Play video: ${title}`}
            >
              <Image
                src={youtubeThumbnailUrl(videoId)}
                alt=""
                fill
                sizes="(max-width: 1024px) 92vw, 720px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#021a33]/75 via-[#021a33]/25 to-[#021a33]/10" />
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#04437f] shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]">
                <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <a
        href={youtubeWatchUrl(videoId)}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
      >
        Open on YouTube
      </a>
    </div>
  );
}