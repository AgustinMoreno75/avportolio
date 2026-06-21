import { siteConfig } from "@/content/site";
import { intlLocaleMap, type Locale } from "@/lib/locales";

type StructuredDataProps = {
  locale: Locale;
  description: string;
  keywords: string[];
};

export function StructuredData({ locale, description, keywords }: StructuredDataProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    jobTitle: "Entrepreneur, Engineer, Founder",
    knowsAbout: keywords,
    sameAs: siteConfig.socialLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("http")),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    inLanguage: intlLocaleMap[locale],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}