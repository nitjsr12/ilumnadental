"use client";

import { InteractiveIcon } from "@/components/ui/interactive-icon";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "sm" as const,
  md: "md" as const,
  lg: "lg" as const,
};

export function IconBox({
  icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: keyof typeof sizeMap;
  className?: string;
}) {
  return (
    <InteractiveIcon
      icon={icon}
      size={sizeMap[size]}
      className={cn(className)}
      tone={className?.includes("text-white") ? "dark" : "light"}
    />
  );
}
