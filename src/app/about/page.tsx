import type { Metadata } from "next";

import { getSiteContent } from "@/content/site";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { getCurrentLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);

  return {
    title: content.about.metadataTitle,
    description: content.about.metadataDescription,
  };
}

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);

  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            description={content.about.description}
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <div className="space-y-16 border-t border-border pt-14 sm:space-y-20 sm:pt-16">
          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14">
            <p className="kicker pt-1">{content.about.sections[0].label}</p>
            <div className="max-w-4xl space-y-6">
              {content.about.sections[0].paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.04}>
            <p className="kicker pt-1">{content.about.sections[1].label}</p>
            <div className="max-w-4xl space-y-6">
              {content.about.sections[1].paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.08}>
            <p className="kicker pt-1">{content.about.sections[2].label}</p>
            <div className="max-w-4xl space-y-6">
              {content.about.sections[2].paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.12}>
            <p className="kicker pt-1">{content.about.sections[3].label}</p>
            <div className="max-w-4xl space-y-6">
              {content.about.sections[3].paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 rounded-[1.75rem] border border-border bg-white p-8 sm:p-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.16}>
            <p className="kicker pt-1">{content.about.visionLabel}</p>
            <div className="max-w-4xl space-y-6">
              {content.home.vision.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}