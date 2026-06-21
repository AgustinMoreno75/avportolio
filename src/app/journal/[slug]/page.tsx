import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { AnimatedSection } from "@/components/animated-section";
import { JournalCard } from "@/components/journal-card";
import { mdxComponents } from "@/components/mdx-components";
import { siteConfig } from "@/content/site";
import { getAllJournalArticles, getJournalArticleBySlug } from "@/lib/journal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const journalArticles = await getAllJournalArticles();
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getJournalArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `${siteConfig.url}/journal/${article.slug}`,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["/twitter-image"],
    },
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getJournalArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const journalArticles = await getAllJournalArticles();
  const relatedArticles = journalArticles
    .filter((entry) => entry.slug !== article.slug)
    .slice(0, 3);

  const { content } = await compileMDX({
    source: article.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    datePublished: article.date,
    mainEntityOfPage: `${siteConfig.url}/journal/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="page-frame pb-24 pt-32 sm:pb-32 sm:pt-40">
        <AnimatedSection className="mx-auto max-w-4xl">
          <Link
            href="/journal"
            className="text-sm uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Volver al journal
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>
              {new Date(article.date).toLocaleDateString("es-AR", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{article.readTime}</span>
          </div>
          <h1 className="mt-8 text-[3rem] leading-[0.96] sm:text-[4.5rem] lg:text-[5.4rem]">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
            {article.excerpt}
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {article.quote ? (
            <AnimatedSection className="border-l border-black pl-6 text-2xl leading-tight text-foreground sm:text-3xl">
              {article.quote}
            </AnimatedSection>
          ) : null}
          <AnimatedSection>{content}</AnimatedSection>
        </div>

        <AnimatedSection className="mt-20 border-t border-border pt-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">Seguir leyendo</p>
              <h2 className="mt-4 text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
                Más ideas para fortalecer criterio y estructura.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <JournalCard key={relatedArticle.slug} article={relatedArticle} />
            ))}
          </div>
        </AnimatedSection>
      </article>
    </>
  );
}