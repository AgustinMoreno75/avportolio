import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { aboutPage } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who I am, what I’m building and the long-term vision behind my work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow="About"
            title="This site exists to explain clearly who I am, what I’m building and why it matters to me."
            description="I want people to understand the person behind the projects, the values behind the work and the long-term direction behind everything I’m building."
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <div className="space-y-16 border-t border-border pt-14 sm:space-y-20 sm:pt-16">
          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14">
            <p className="kicker pt-1">Who I Am</p>
            <div className="max-w-4xl space-y-6">
              {aboutPage.whoIAm.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.04}>
            <p className="kicker pt-1">My Story</p>
            <div className="max-w-4xl space-y-6">
              {aboutPage.myStory.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.08}>
            <p className="kicker pt-1">What I Believe</p>
            <div className="max-w-4xl space-y-6">
              {aboutPage.whatIBelieve.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.12}>
            <p className="kicker pt-1">What I&apos;m Building</p>
            <div className="max-w-4xl space-y-6">
              {aboutPage.whatImBuilding.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid gap-8 rounded-[1.75rem] border border-border bg-white p-8 sm:p-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14" delay={0.16}>
            <p className="kicker pt-1">My Long-Term Vision</p>
            <div className="max-w-4xl space-y-6">
              {aboutPage.longTermVision.map((paragraph) => (
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