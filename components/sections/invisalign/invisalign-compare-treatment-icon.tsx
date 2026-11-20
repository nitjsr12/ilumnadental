import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  tone: "braces" | "aligners";
  className?: string;
};

export function InvisalignCompareTreatmentIcon({ src, alt, tone, className }: Props) {
  const isAligners = tone === "aligners";

  return (
    <span
      className={cn(
        "invisalign-compare-treatment-icon flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 bg-white p-2.5 shadow-md sm:h-[5rem] sm:w-[5rem] sm:p-3",
        isAligners
          ? "border-[#0d9488]/35 shadow-[0_12px_28px_-14px_rgba(13,148,136,0.45)]"
          : "border-[#1781be]/35 shadow-[0_12px_28px_-14px_rgba(23,129,190,0.4)]",
        className,
      )}
    >
      <span className="relative flex h-full w-full items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={120}
          height={120}
          className="h-full w-full object-contain object-center"
          sizes="80px"
        />
      </span>
    </span>
  );
}