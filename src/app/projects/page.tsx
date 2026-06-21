import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The projects, companies and systems Augusto Valmont is actively building.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow="Projects"
            title="A look at the ventures, systems and ideas I’m currently building."
            description="Each project is part of a larger journey around technology, execution, freedom and long-term value creation."
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.05}>
              <article className="paper-panel h-full p-8 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm font-medium text-muted-foreground">{project.category}</p>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <h2 className="mt-5 text-[2rem] leading-tight text-foreground sm:text-[2.4rem]">
                  {project.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {project.description}
                </p>

                <div className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
                  <div>
                    <p className="kicker">Mission</p>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{project.mission}</p>
                  </div>
                  <div>
                    <p className="kicker">Technology</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technology.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}