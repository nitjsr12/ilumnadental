import { AppContent } from "@/components/layout/app-content";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActions } from "@/components/layout/floating-actions";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <AppContent>
      <SiteHeader />
      <main className="flex-1 scroll-pt-20">{children}</main>
      <SiteFooter />
      <FloatingActions />
    </AppContent>
  );
}
