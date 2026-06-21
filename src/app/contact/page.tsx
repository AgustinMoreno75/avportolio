import type { Metadata } from "next";
import Link from "next/link";

import { getSiteContent, siteConfig } from "@/content/site";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { getCurrentLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);

  return {
    title: content.contact.metadataTitle,
    description: content.contact.metadataDescription,
  };
}

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);
  const socialLinks = siteConfig.socialLinks.map((item) => ({
    href: item.href,
    label: content.socialLabels[item.id],
  }));

  return (
    <>
      <section className="page-frame section-space-lg pt-32 sm:pt-40">
        <AnimatedSection className="max-w-5xl">
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            title={content.contact.title}
            description={content.contact.intro}
          />
        </AnimatedSection>
      </section>

      <section className="page-frame pb-24 sm:pb-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
          <AnimatedSection className="paper-panel p-8 sm:p-10">
            <p className="kicker">{content.contact.detailsLabel}</p>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{content.contact.emailLabel}</p>
                <Link href={`mailto:${siteConfig.contactEmail}`} className="mt-2 block text-lg font-medium text-foreground">
                  {siteConfig.contactEmail}
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{content.contact.socialLinksLabel}</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <p className="text-base leading-7 text-muted-foreground">{content.contact.availability}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="paper-panel p-8 sm:p-10" delay={0.06}>
            <p className="kicker">{content.contact.formLabel}</p>
            <form
              action={`mailto:${siteConfig.contactEmail}`}
              method="post"
              encType="text/plain"
              className="mt-6 space-y-5"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  {content.contact.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="h-12 w-full rounded-2xl border border-border bg-secondary/60 px-4 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder={content.contact.namePlaceholder}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  {content.contact.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-12 w-full rounded-2xl border border-border bg-secondary/60 px-4 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder={content.contact.emailPlaceholder}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {content.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder={content.contact.messagePlaceholder}
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#1f1f1f]"
              >
                {content.contact.submitLabel}
              </button>
              <p className="text-sm leading-6 text-muted-foreground">
                {content.contact.helperText}
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}