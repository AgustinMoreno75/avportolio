import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { getAllJournalArticles } from "@/lib/journal";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const journalArticles = await getAllJournalArticles("es");

  const staticRoutes = ["", "/about", "/projects", "/contact", "/journal"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const articleRoutes = journalArticles.map((article) => ({
    url: `${siteConfig.url}/journal/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
