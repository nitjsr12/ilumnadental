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
  muted: "bg-[#f1f5f8]",
  surface: "bg-surface border-y border-primary/[0.06]",
};

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  variant = "default",
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-pad", variants[variant], className)}>
      <div className={cn("section-container", innerClassName)}>{children}</div>
    </section>
  );
}
