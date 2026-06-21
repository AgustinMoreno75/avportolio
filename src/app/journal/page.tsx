import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { JournalBrowser } from "@/components/journal-browser";
import { SectionHeading } from "@/components/section-heading";
import { getAllJournalArticles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Artículos sobre autodominio, sistemas, fortaleza, identidad y excelencia deliberada.",
};

export default async function JournalPage() {
  const journalArticles = await getAllJournalArticles();

  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow="Journal"
            title="Un espacio editorial para ideas que fortalecen criterio, estructura y dirección."
            description="Cada entrada está pensada para quienes valoran profundidad sobre volumen, sistemas sobre entusiasmo y forma sobre ruido."
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <JournalBrowser articles={journalArticles} />
      </section>
    </>
  );
}