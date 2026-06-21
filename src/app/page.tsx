import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { JournalCard } from "@/components/journal-card";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { getAllJournalArticles } from "@/lib/journal";
import {
  focusAreas,
  homePhilosophy,
  initiatives,
  pillars,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Inicio",
};

export default async function HomePage() {
  const journalArticles = await getAllJournalArticles();
  const previewArticles = journalArticles.slice(0, 4);

  return (
    <>
      <section className="page-frame flex min-h-[100svh] items-end pb-10 pt-28 sm:pb-14 lg:pb-16 lg:pt-32">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
          <AnimatedSection className="max-w-5xl" y={28}>
            <p className="kicker mb-6">La sede digital de una filosofía personal</p>
            <h1 className="max-w-5xl text-[3.7rem] leading-[0.9] sm:text-[5.8rem] lg:text-[8.25rem]">
              AUGUSTO VALMONT
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              Autodominio. <br className="hidden sm:block" />
              Disciplina estratégica. <br className="hidden sm:block" />
              Crecimiento implacable.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="/philosophy">Leer la filosofía</LinkButton>
              <LinkButton href="/journal" variant="secondary">
                Entrar al journal
              </LinkButton>
            </div>
          </AnimatedSection>
          <AnimatedSection
            className="flex flex-col items-start gap-4 lg:items-end"
            delay={0.15}
            y={18}
          >
            <div className="space-y-2 text-sm uppercase tracking-[0.26em] text-muted-foreground lg:text-right">
              <p>Autonomía</p>
              <p>Fortaleza</p>
              <p>Claridad</p>
            </div>
            <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground lg:flex">
              <span>Desplazar</span>
              <ChevronDown className="size-4" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="page-frame section-space border-t border-border text-center">
        <AnimatedSection className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="La misión"
            title="Construir una vida diseñada con intención."
            description="Mi propósito es construir la versión más fuerte de mí mismo y ayudar a otros a hacer lo mismo mediante sistemas, disciplina y pensamiento estratégico."
            align="center"
          />
        </AnimatedSection>
      </section>

      <section className="page-frame section-space border-t border-border">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Los pilares"
            title="Una filosofía operativa para vivir con dominio propio."
            description="Cada decisión importante debe estar alineada con un estándar más alto de carácter, ejecución y dirección."
          />
        </AnimatedSection>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <AnimatedSection
              key={pillar.title}
              className="bg-white p-8 sm:p-10"
              delay={index * 0.08}
            >
              <p className="kicker">0{index + 1}</p>
              <h3 className="mt-6 text-3xl leading-tight">{pillar.title}</h3>
              <p className="mt-4 max-w-xs text-base leading-7 text-muted-foreground">
                {pillar.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame section-space border-t border-border">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Áreas de foco"
            title="Dominios en los que la excelencia debe ser visible."
          />
        </AnimatedSection>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map((area, index) => (
            <AnimatedSection
              key={area.title}
              className="bg-white p-8"
              delay={index * 0.06}
            >
              <p className="kicker">{area.title}</p>
              <ul className="mt-10 space-y-3 text-2xl leading-tight sm:text-[1.85rem]">
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame section-space-lg border-t border-border">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
          <p className="kicker pt-3">La filosofía</p>
          <div className="max-w-5xl">
            <p className="text-[2.4rem] leading-tight sm:text-[3.5rem] lg:text-[4.8rem] lg:leading-[1.02]">
              {homePhilosophy.statement}
            </p>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              {homePhilosophy.body}
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="page-frame section-space border-t border-border">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Iniciativas actuales"
            title="Vehículos para ejecutar la visión sin perder de vista la filosofía."
            description="Las iniciativas existen para amplificar sistemas, infraestructura y autonomía. Nunca para reemplazar el propósito."
          />
        </AnimatedSection>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <AnimatedSection
              key={initiative.title}
              className="bg-white p-8 sm:p-10"
              delay={index * 0.08}
            >
              <h3 className="text-3xl">{initiative.title}</h3>
              <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
                {initiative.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame section-space border-t border-border">
        <AnimatedSection className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Journal"
            title="Ideas para quienes prefieren sistemas antes que ruido."
          />
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver todas las entradas
            <ArrowRight className="size-4" />
          </Link>
        </AnimatedSection>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {previewArticles.map((article, index) => (
            <AnimatedSection key={article.slug} delay={index * 0.08}>
              <JournalCard article={article} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame flex min-h-[78svh] items-center border-t border-border py-20">
        <AnimatedSection className="max-w-4xl">
          <p className="kicker mb-6">Cierre</p>
          <h2 className="text-[3rem] leading-[0.95] sm:text-[4.75rem] lg:text-[6rem]">
            Vuélvete difícil de derrotar.
          </h2>
          <div className="mt-10">
            <LinkButton href="/journal">Leer el journal</LinkButton>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
