import { cn } from "@/lib/utils";

type TreatmentIconImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

/** Treatment card cover icon — native img avoids opaque Next/Image layout boxes. */
export function TreatmentIconImage({ src, alt = "", className }: TreatmentIconImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- transparency + auto sizing
    <img
      src={src}
      alt={alt}
      width={220}
      height={180}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={cn("treatment-service-card-icon-art", className)}
    />
  );
}