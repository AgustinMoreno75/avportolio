import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { aboutSections } from "@/content/site";

export const metadata: Metadata = {
  title: "Acerca",
  description:
    "Identidad, visión, valores y misión de largo plazo detrás de la filosofía de Augusto Valmont.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow="Acerca"
            title="No es una biografía. Es una dirección.
"
            description="La intención no es explicar un pasado, sino definir con claridad la clase de vida que se está construyendo y el estándar que la sostiene."
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection className="bg-white p-8 sm:p-12">
            <p className="kicker">Identidad</p>
            <p className="mt-6 text-2xl leading-tight sm:text-[2.5rem]">{aboutSections.identity}</p>
          </AnimatedSection>
          <AnimatedSection className="bg-white p-8 sm:p-12" delay={0.08}>
            <p className="kicker">Visión</p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {aboutSections.vision}
            </p>
          </AnimatedSection>
        </div>

        <div className="section-space border-t border-border">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Valores"
              title="Principios que ordenan el criterio y la ejecución."
            />
          </AnimatedSection>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
            {aboutSections.values.map((value, index) => (
              <AnimatedSection key={value.title} className="bg-white p-8" delay={index * 0.06}>
                <h3 className="text-3xl">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="grid gap-8 border-t border-border pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:pt-20">
          <AnimatedSection className="max-w-3xl">
            <p className="kicker">Misión de largo plazo</p>
            <p className="mt-6 text-[2.2rem] leading-[1.06] sm:text-[3rem]">
              {aboutSections.longTermMission}
            </p>
          </AnimatedSection>
          <AnimatedSection className="rounded-[2rem] border border-border p-8 sm:p-10" delay={0.08}>
            <p className="kicker">Foco actual</p>
            <ul className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
              {aboutSections.currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}