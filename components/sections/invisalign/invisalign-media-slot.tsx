import Image from "next/image";
import { Film, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type InvisalignMediaSlotProps = {
  label: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
  /** Set when you add a real asset later */
  id?: string;
  tone?: "light" | "dark";
  src?: string;
  alt?: string;
  /** Label as GIF / video when no file yet */
  kind?: "image" | "gif";
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
} as const;

/** Image/GIF slot — shows media when `src` is set, otherwise a branded placeholder */
export function InvisalignMediaSlot({
  label,
  aspect = "video",
  className,
  id,
  tone = "light",
  src,
  alt,
  kind = "image",
}: InvisalignMediaSlotProps) {
  const isDark = tone === "dark";
  const hasMedia = Boolean(src);
  const ariaLabel = hasMedia ? alt ?? label : `${label} — media placeholder`;

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "invisalign-media-slot group relative w-full overflow-hidden rounded-2xl",
        hasMedia
          ? "border border-white/10 shadow-[0_28px_60px_-32px_rgba(2,26,51,0.45)]"
          : cn(
              "border-2 border-dashed",
              isDark
                ? "border-white/25 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                : "border-[#1781be]/40 bg-gradient-to-br from-[#f0f8ff] via-white to-[#e8f4fc] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
            ),
        className,
      )}
      data-media-slot={id}
    >
      <div className={cn("relative w-full", aspectClass[aspect])}>
        {hasMedia ? (
          <>
            {kind === "gif" || src!.toLowerCase().endsWith(".gif") ? (
              // eslint-disable-next-line @next/next/no-img-element -- animated GIF
              <img
                src={src!}
                alt={alt ?? label}
                className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            ) : (
              <Image
                src={src!}
                alt={alt ?? label}
                fill
                sizes="(max-width: 1024px) 92vw, 540px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            )}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
                kind === "gif"
                  ? "from-[#021a33]/15"
                  : isDark
                    ? "from-[#021a33]/55"
                    : "from-[#021a33]/25",
              )}
              aria-hidden
            />
          </>
        ) : null}
      </div>

      {!hasMedia && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm",
              isDark ? "border-white/20 bg-white/10" : "border-[#1781be]/20 bg-white/90",
            )}
            aria-hidden
          >
            {kind === "gif" ? (
              <Film className={cn("h-6 w-6", isDark ? "text-white/70" : "text-[#1781be]/70")} />
            ) : (
              <ImageIcon className={cn("h-6 w-6", isDark ? "text-white/70" : "text-[#1781be]/70")} />
            )}
          </div>
          <p
            className={cn(
              "max-w-[14rem] text-sm font-semibold leading-snug",
              isDark ? "text-white" : "text-[#475569]",
            )}
          >
            {label}
          </p>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider",
              isDark ? "bg-white/10 text-[#f5d76e]" : "bg-[#1781be]/10 text-[#1781be]",
            )}
          >
            {kind === "gif" ? "GIF slot" : "Media slot"}
          </span>
        </div>
      )}
    </div>
  );
}