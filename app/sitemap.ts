import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { treatments } from "@/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/treatments",
    "/patient-stories",
    "/blog",
    "/contact",
    "/book-appointment",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: "2026-01-01",
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${base}/treatments/${t.slug}`,
    lastModified: "2026-01-01",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
