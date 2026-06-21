import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import {
  heroContent,
  homeAbout,
  principles,
  projects,
  vision,
  whatIDo,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <section className="page-frame pt-28 sm:pt-32 lg:pt-36">
        <div className="grid gap-12 rounded-[2rem] border border-border bg-white px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:gap-14 lg:px-12 lg:py-16">
          <AnimatedSection className="max-w-4xl" y={24}>
            <p className="kicker mb-6">Personal brand website</p>
            <h1 className="max-w-4xl text-[3.4rem] leading-[0.94] sm:text-[4.8rem] lg:text-[6rem]">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {heroContent.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="/projects">Explore My Work</LinkButton>
              <LinkButton href="/about" variant="secondary">
                About Me
              </LinkButton>
            </div>
          </AnimatedSection>

          <AnimatedSection className="paper-panel p-6 sm:p-8" delay={0.1} y={18}>
            <p className="kicker">Currently building</p>
            <div className="mt-6 space-y-5">
              {projects.slice(0, 3).map((project) => (
                <div key={project.title} className="rounded-3xl border border-border bg-secondary/50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.category}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="page-frame section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What I Do"
            title="I build across companies, systems and personal growth."
            description="The goal is simple: create useful things, operate them well and keep becoming more capable as the work gets bigger."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {whatIDo.map((item, index) => (
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
            eyebrow="Current Projects"
            title="These are the projects I’m actively building right now."
            description="Each one reflects a different part of how I work: software, operations, AI systems and future company building."
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
                href="/projects"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                View details
                <ArrowRight className="size-4" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="page-frame section-space-lg border-t border-border">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="max-w-3xl">
            <p className="kicker">About Augusto</p>
            <h2 className="mt-5 text-[2.4rem] leading-[1.02] sm:text-[3.1rem] lg:text-[4rem]">
              I build businesses, tools and capabilities around the same idea: long-term focus, clarity and execution.
            </h2>
          </div>
          <div className="space-y-6">
            {homeAbout.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {paragraph}
              </p>
            ))}
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              Learn more about me
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="page-frame section-space border-t border-border">
        <AnimatedSection>
          <SectionHeading
            eyebrow="My Principles"
            title="A few short principles shape how I work, decide and build."
          />
        </AnimatedSection>
        <div className="mt-12 flex flex-wrap gap-4">
          {principles.map((principle, index) => (
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
            <p className="kicker mb-6">Vision</p>
            <h2 className="text-[2.9rem] leading-[0.98] sm:text-[4rem] lg:text-[5rem]">
              {vision.title}
            </h2>
            <div className="mt-8 max-w-3xl space-y-5">
              {vision.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-white p-8 lg:max-w-sm">
            <p className="kicker">Final CTA</p>
            <h3 className="mt-4 text-2xl leading-tight text-foreground">
              The journey is just beginning.
            </h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              If you want to follow the journey, collaborate or talk about building
              something meaningful, let’s connect.
            </p>
            <div className="mt-8">
              <LinkButton href="/contact">Let&apos;s Connect</LinkButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
