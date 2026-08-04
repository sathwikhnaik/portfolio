import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [{ url: base, lastModified: new Date(), priority: 1 }, ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), priority: 0.8 }))];
}
