import type { Metadata } from "next";

import { getSiteContent } from "@/content/site";
import { AnimatedSection } from "@/components/animated-section";
import { JournalBrowser } from "@/components/journal-browser";
import { SectionHeading } from "@/components/section-heading";
import { getCurrentLocale } from "@/lib/i18n";
import { getAllJournalArticles } from "@/lib/journal";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);

  return {
    title: content.journal.metadataTitle,
    description: content.journal.metadataDescription,
  };
}

export default async function JournalPage() {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);
  const journalArticles = await getAllJournalArticles();

  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow={content.journal.eyebrow}
            title={content.journal.title}
            description={content.journal.description}
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <JournalBrowser
          articles={journalArticles}
          locale={locale}
          labels={content.journal.browser}
        />
      </section>
    </>
  );
}