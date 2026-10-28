import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "muted" | "surface";
};

const variants = {
  default: "bg-background",
  muted: "premium-section-muted",
  surface: "premium-section-surface",
};

/** Inner page section wrapper — matches homepage gutters and backgrounds */
export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  variant = "default",
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-pad relative overflow-x-clip", variants[variant], className)}>
      <div className={cn("hero-page-gutter relative z-10", innerClassName)}>{children}</div>
    </section>
  );
}
