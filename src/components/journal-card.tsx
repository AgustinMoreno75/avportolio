import Link from "next/link";

import type { JournalArticle } from "@/content/journal-types";
import { intlLocaleMap, type Locale } from "@/lib/locales";

type JournalCardProps = {
  article: JournalArticle;
  featured?: boolean;
  locale: Locale;
  readLabel: string;
};

export function JournalCard({ article, featured = false, locale, readLabel }: JournalCardProps) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block rounded-[2rem] border border-border bg-white p-7 transition-colors hover:bg-zinc-50 sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
        <span>{article.category}</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>
          {new Date(article.date).toLocaleDateString(intlLocaleMap[locale], {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{article.readTime}</span>
      </div>
      <h3
        className={featured ? "mt-6 text-[2.5rem] leading-[1.02]" : "mt-6 text-[2rem] leading-[1.05]"}
      >
        {article.title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        {article.excerpt}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8 text-sm uppercase tracking-[0.24em] text-foreground">{readLabel}</div>
    </Link>
  );
}