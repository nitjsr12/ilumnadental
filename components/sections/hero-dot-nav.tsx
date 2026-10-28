"use client";

type HeroDotNavProps = {
  count: number;
  active: number;
  onSelect: (index: number) => void;
};

/** Minimal carousel indicators (reference-style pills + dots). */
export function HeroDotNav({ count, active, onSelect }: HeroDotNavProps) {
  return (
    <nav aria-label="Hero highlights" className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show highlight ${i + 1}`}
            aria-current={isActive ? "true" : undefined}
            className={
              isActive
                ? "h-2.5 w-8 rounded-full bg-brand-cta shadow-[0_0_12px_rgba(14,63,165,0.35)] transition-all duration-300"
                : "h-2.5 w-2.5 rounded-full bg-primary/15 transition-all duration-300 hover:bg-primary/30"
            }
          />
        );
      })}
    </nav>
  );
}
