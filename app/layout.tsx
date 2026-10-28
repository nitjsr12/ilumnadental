import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/layout/page-shell";
import { MotionProvider } from "@/components/animations/motion-provider";
import { MedicalBusinessJsonLd } from "@/components/layout/json-ld";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MedicalBusinessJsonLd />
        <MotionProvider>
          <PageShell>{children}</PageShell>
        </MotionProvider>
      </body>
    </html>
  );
}
