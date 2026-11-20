import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function InvisalignFeatureIcon({
  icon: Icon,
  tone = "light",
  className,
}: {
  icon: LucideIcon;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm",
        isDark
          ? "border-white/25 bg-white/15 text-[#f5d76e]"
          : "border-[#1781be]/20 bg-[#f0f8ff] text-[#1781be]",
        className,
      )}
      aria-hidden
    >
      <Icon className="h-5 w-5" strokeWidth={2.25} />
    </div>
  );
}