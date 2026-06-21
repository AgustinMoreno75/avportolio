import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Separator } from "@/components/ui/separator";
import { philosophySections } from "@/content/site";

export const metadata: Metadata = {
  title: "Filosofía",
  description:
    "Un manifiesto editorial sobre identidad, disciplina, crecimiento, fortaleza, excelencia y legado.",
};

export default function PhilosophyPage() {
  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow="Filosofía"
            title="Una vida gobernada con intención debe sentirse sobria, fuerte y deliberada."
            description="Este manifiesto existe para ordenar prioridades, elevar estándares y recordar que la libertad real se construye con carácter, no con improvisación."
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          {philosophySections.map((section, index) => (
            <AnimatedSection key={section.title} delay={index * 0.04}>
              <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
                <div className="pt-2">
                  <p className="kicker">{section.kicker}</p>
                </div>
                <div className="max-w-4xl">
                  <h2 className="text-[2.35rem] leading-[1.05] sm:text-[3rem] lg:text-[3.75rem]">
                    {section.title}
                  </h2>
                  <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
              {index < philosophySections.length - 1 ? <Separator /> : null}
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}