import Image from "next/image";
import { cn } from "@/lib/utils";

type InvisalignVisualProps = {
  src: string;
  alt: string;
  aspect?: "video" | "square" | "portrait" | "wide" | "auto";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** Subtle ken-burns style hover (replaces GIF until a real GIF is added) */
  motionHover?: boolean;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
  auto: "min-h-[12rem]",
} as const;

export function InvisalignVisual({
  src,
  alt,
  aspect = "video",
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 1024px) 92vw, 480px",
  motionHover = true,
}: InvisalignVisualProps) {
  return (
    <div
      className={cn(
        "invisalign-visual group relative w-full overflow-hidden rounded-2xl border border-[#04437f]/12 bg-[#f0f8ff] shadow-[0_24px_56px_-32px_rgba(4,67,127,0.35)]",
        aspect !== "auto" && aspectClass[aspect],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover object-center transition-transform duration-700 ease-out",
          motionHover && "group-hover:scale-[1.04]",
          imageClassName,
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021a33]/35 via-transparent to-transparent opacity-80"
      />
    </div>
  );
}

/** Braces + Invisalign stack for compare section */
export function InvisalignCompareVisual({
  braces,
  invisalign,
  className,
}: {
  braces: { src: string; alt: string };
  invisalign: { src: string; alt: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "invisalign-compare-visual grid aspect-square w-full max-w-sm grid-rows-2 gap-2 overflow-hidden rounded-2xl border border-[#04437f]/12 bg-white p-2 shadow-[0_24px_56px_-32px_rgba(4,67,127,0.3)]",
        className,
      )}
    >
      <div className="relative min-h-0 overflow-hidden rounded-xl">
        <Image src={braces.src} alt={braces.alt} fill sizes="280px" className="object-cover" />
        <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#475569]">
          Braces
        </span>
      </div>
      <div className="relative min-h-0 overflow-hidden rounded-xl ring-2 ring-[#05a2a4]/40">
        <Image
          src={invisalign.src}
          alt={invisalign.alt}
          fill
          sizes="280px"
          className="object-cover"
        />
        <span className="absolute bottom-2 left-2 rounded-full bg-[#04437f]/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
          Invisalign
        </span>
      </div>
    </div>
  );
}