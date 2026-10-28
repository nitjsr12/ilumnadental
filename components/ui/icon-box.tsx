import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const sizes = {
  sm: { box: "h-9 w-9", icon: "h-4 w-4" },
  md: { box: "h-11 w-11", icon: "h-5 w-5" },
  lg: { box: "h-14 w-14", icon: "h-6 w-6" },
};

export function IconBox({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg bg-accent text-secondary",
        s.box,
        className,
      )}
      aria-hidden
    >
      <Icon className={s.icon} strokeWidth={1.75} />
    </span>
  );
}
