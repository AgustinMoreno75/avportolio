import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { getSiteContent, siteConfig } from "@/content/site";
import { brandLogo } from "@/lib/brand";
import { getCurrentLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);

  return {
    title: {
      absolute: siteConfig.name,
    },
    description: content.home.metadataDescription,
  };
}

export default async function HomePage() {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);
  const projects = content.projects.items;

  return (
    <>
      <section className="page-frame pt-28 sm:pt-32 lg:pt-36">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 flex w-full -translate-x-1/2 items-center justify-center lg:left-0 lg:w-[48%] lg:translate-x-0 lg:justify-start">
            <Image
              src={brandLogo}
              alt=""
              aria-hidden="true"
              priority
              className="h-auto w-[380px] max-w-none opacity-[0.2] blur-[10px] saturate-0 contrast-125 mix-blend-multiply sm:w-[520px] lg:ml-[-3rem] lg:w-[700px]"
            />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:gap-14">
          <AnimatedSection className="max-w-4xl" y={24}>
            <p className="kicker mb-6">{content.home.kicker}</p>
            <h1 className="max-w-4xl text-[3.4rem] leading-[0.94] sm:text-[4.8rem] lg:text-[6rem]">
              {content.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {content.home.heroDescription}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="/projects">{content.home.primaryCta}</LinkButton>
              <LinkButton href="/about" variant="secondary">
                {content.home.secondaryCta}
              </LinkButton>
            </div>
          </AnimatedSection>

          <AnimatedSection className="paper-panel p-6 sm:p-8" delay={0.1} y={18}>
            <p className="kicker">{content.home.currentlyBuilding}</p>
            <div className="mt-6 space-y-5">
              {projects.slice(0, 3).map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-3xl border border-border bg-secondary/50 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:bg-white hover:shadow-[0_22px_60px_rgba(17,17,17,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {project.title}
                    </h2>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.category}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="page-frame section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow={content.home.whatIDoEyebrow}
            title={content.home.whatIDoTitle}
            description={content.home.whatIDoDescription}
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.home.whatIDo.map((item, index) => (
            <AnimatedSection
              key={item.title}
              className="paper-panel p-7 sm:p-8"
              delay={index * 0.06}
            >
              <p className="kicker">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame section-space border-t border-border">
        <AnimatedSection>
          <SectionHeading
            eyebrow={content.home.currentProjectsEyebrow}
            title={content.home.currentProjectsTitle}
            description={content.home.currentProjectsDescription}
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              className="paper-panel flex h-full flex-col p-7 sm:p-8"
              delay={index * 0.06}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-muted-foreground">{project.category}</p>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {project.status}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{project.description}</p>
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-transform duration-300 hover:translate-x-1"
              >
                {content.home.viewDetails}
                <ArrowRight className="size-4" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame section-space-lg border-t border-border">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="max-w-3xl">
            <p className="kicker">{content.home.aboutEyebrow}</p>
            <h2 className="mt-5 text-[2.4rem] leading-[1.02] sm:text-[3.1rem] lg:text-[4rem]">
              {content.home.aboutTitle}
            </h2>
          </div>
          <div className="space-y-6">
            {content.home.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {paragraph}
              </p>
            ))}
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              {content.home.aboutLink}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="page-frame section-space border-t border-border">
        <AnimatedSection>
          <SectionHeading
            eyebrow={content.home.principlesEyebrow}
            title={content.home.principlesTitle}
          />
        </AnimatedSection>
        <div className="mt-12 flex flex-wrap gap-4">
          {content.home.principles.map((principle, index) => (
            <AnimatedSection key={principle} delay={index * 0.05}>
              <div className="rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-foreground">
                {principle}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame flex min-h-[78svh] items-center border-t border-border py-20">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="kicker mb-6">{content.home.visionEyebrow}</p>
            <h2 className="text-[2.9rem] leading-[0.98] sm:text-[4rem] lg:text-[5rem]">
              {content.home.vision.title}
            </h2>
            <div className="mt-8 max-w-3xl space-y-5">
              {content.home.vision.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-white p-8 lg:max-w-sm">
            <p className="kicker">{content.home.finalCtaEyebrow}</p>
            <h3 className="mt-4 text-2xl leading-tight text-foreground">
              {content.home.finalCtaTitle}
            </h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {content.home.finalCtaDescription}
            </p>
            <div className="mt-8">
              <LinkButton href="/contact">{content.home.finalCtaButton}</LinkButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
