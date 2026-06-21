"use client";

import Link from "next/link";
import { useDeferredValue, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { JournalArticle } from "@/content/journal-types";
import type { Locale } from "@/lib/locales";

import { JournalCard } from "./journal-card";

const ARTICLES_PER_PAGE = 4;

type JournalBrowserProps = {
  articles: JournalArticle[];
  locale: Locale;
  labels: {
    searchAndFilter: string;
    searchPlaceholder: string;
    allCategoriesLabel: string;
    entrySingular: string;
    entryPlural: string;
    updatingResults: string;
    featuredEntry: string;
    readFull: string;
    noResults: string;
    previous: string;
    next: string;
    page: string;
    of: string;
    readEntry: string;
  };
};

export function JournalBrowser({ articles, locale, labels }: JournalBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(labels.allCategoriesLabel);
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);
  const categories = [labels.allCategoriesLabel, ...new Set(articles.map((article) => article.category))];
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === labels.allCategoriesLabel || article.category === activeCategory;
    const haystack = [
      article.title,
      article.excerpt,
      article.category,
      article.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  const featuredArticle = filteredArticles.find((article) => article.featured) ?? filteredArticles[0];
  const remainingArticles = filteredArticles.filter(
    (article) => article.slug !== featuredArticle?.slug
  );
  const totalPages = Math.max(1, Math.ceil(remainingArticles.length / ARTICLES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = remainingArticles.slice(pageStart, pageStart + ARTICLES_PER_PAGE);

  return (
    <div className="space-y-14">
      <div className="grid gap-6 border-y border-border py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="space-y-4">
          <p className="kicker">{labels.searchAndFilter}</p>
          <Input
            type="search"
            value={query}
            onChange={(event) => {
              const nextValue = event.target.value;
              startTransition(() => {
                setQuery(nextValue);
                setPage(1);
              });
            }}
            placeholder={labels.searchPlaceholder}
            className="h-12 rounded-full border-border px-5 text-base"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = category === activeCategory;

            return (
              <Button
                key={category}
                type="button"
                variant={active ? "default" : "outline"}
                className="h-10 rounded-full px-5 uppercase tracking-[0.18em]"
                onClick={() => {
                  startTransition(() => {
                    setActiveCategory(category);
                    setPage(1);
                  });
                }}
              >
                {category}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          {filteredArticles.length} {filteredArticles.length === 1 ? labels.entrySingular : labels.entryPlural}
        </p>
        <p>{isPending ? labels.updatingResults : ""}</p>
      </div>

      {featuredArticle ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <p className="kicker">{labels.featuredEntry}</p>
            <Link
              href={`/journal/${featuredArticle.slug}`}
              className="text-sm uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {labels.readFull}
            </Link>
          </div>
          <JournalCard article={featuredArticle} featured locale={locale} readLabel={labels.readEntry} />
        </div>
      ) : (
        <div className="rounded-[2rem] border border-border p-8 text-muted-foreground">
          {labels.noResults}
        </div>
      )}

      {paginatedArticles.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {paginatedArticles.map((article) => (
            <JournalCard key={article.slug} article={article} locale={locale} readLabel={labels.readEntry} />
          ))}
        </div>
      ) : null}

      {remainingArticles.length > ARTICLES_PER_PAGE ? (
        <div className="flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <Button
            type="button"
            variant="outline"
            className="rounded-full px-5 uppercase tracking-[0.18em]"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={currentPage === 1}
          >
            {labels.previous}
          </Button>
          <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {labels.page} {currentPage} {labels.of} {totalPages}
          </span>
          <Button
            type="button"
            variant="outline"
            className="rounded-full px-5 uppercase tracking-[0.18em]"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={currentPage === totalPages}
          >
            {labels.next}
          </Button>
        </div>
      ) : null}
    </div>
  );
}