import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

import type { JournalArticle } from "@/content/journal-types";
import type { Locale } from "@/lib/locales";

const journalDirectory = path.join(process.cwd(), "src/content/journal");
const defaultJournalLocale: Locale = "es";

function toJournalArticle(fileName: string, source: string): JournalArticle {
  const { data, content } = matter(source);

  return {
    slug: fileName.replace(/\.mdx$/, ""),
    title: String(data.title ?? ""),
    excerpt: String(data.excerpt ?? ""),
    category: String(data.category ?? "General"),
    date: String(data.date ?? ""),
    readTime: String(data.readTime ?? ""),
    featured: Boolean(data.featured),
    tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [],
    quote: typeof data.quote === "string" ? data.quote : undefined,
    content: content.trim(),
  };
}

async function getLocaleDirectory(locale: Locale) {
  const localeDirectory = path.join(journalDirectory, locale);

  try {
    await fs.access(localeDirectory);
    return localeDirectory;
  } catch {
    return journalDirectory;
  }
}

const readJournalArticles = cache(async (locale: Locale = defaultJournalLocale) => {
  const localeDirectory = await getLocaleDirectory(locale);
  const entries = await fs.readdir(localeDirectory, { withFileTypes: true });
  const articleFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name);

  const articles = await Promise.all(
    articleFiles.map(async (fileName) => {
      const source = await fs.readFile(path.join(localeDirectory, fileName), "utf8");
      return toJournalArticle(fileName, source);
    })
  );

  return articles.sort(
    (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
  );
});

export async function getAllJournalArticles(locale: Locale = defaultJournalLocale) {
  return readJournalArticles(locale);
}

export async function getJournalArticleBySlug(
  slug: string,
  locale: Locale = defaultJournalLocale
) {
  const articles = await readJournalArticles(locale);
  return articles.find((article) => article.slug === slug);
}