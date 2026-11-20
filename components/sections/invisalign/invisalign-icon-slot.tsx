import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Braces,
  Eye,
  LineChart,
  MessageCircle,
  Scan,
  ScanLine,
  Shapes,
  Smile,
  Sparkles,
  Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  invisible: Eye,
  removable: Undo2,
  custom: Sparkles,
  digital: ScanLine,
  "step-01-consult": MessageCircle,
  "step-02-scan": Scan,
  "step-03-plan": LineChart,
  "step-04-aligners": BadgeCheck,
  "step-05-progress": ScanLine,
  "step-06-smile": Smile,
  "compare-braces": Braces,
  "compare-aligners": Smile,
};

export function InvisalignIconSlot({
  className,
  id,
  tone = "light",
  style,
}: {
  className?: string;
  id?: string;
  tone?: "light" | "dark";
  style?: CSSProperties;
}) {
  const isDark = tone === "dark";
  const Icon = (id && ICON_MAP[id]) || Shapes;

  return (
    <div
      data-icon-slot={id}
      className={cn(
        "invisalign-icon-slot flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-105",
        isDark
          ? "border-white/30 bg-white/10 text-[#7ee8c6]"
          : "border-[#0d9488]/25 bg-gradient-to-br from-white to-[#ecfdf5] text-[#0d9488]",
        className,
      )}
      style={style}
      aria-hidden
    >
      <Icon className="h-5 w-5" strokeWidth={2.25} />
    </div>
  );
}