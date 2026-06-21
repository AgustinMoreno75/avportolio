import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { getSiteContent, siteConfig } from "@/content/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { getCurrentLocale } from "@/lib/i18n";
import { intlLocaleMap, openGraphLocaleMap } from "@/lib/locales";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: content.metadata.description,
    keywords: [...content.metadata.keywords],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "personal brand",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: openGraphLocaleMap[locale],
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: content.metadata.description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${content.metadata.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: content.metadata.description,
      images: ["/twitter-image"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();
  const content = getSiteContent(locale);
  const socialLinks = siteConfig.socialLinks.map((link) => ({
    href: link.href,
    label: content.socialLabels[link.id],
  }));

  return (
    <html lang={intlLocaleMap[locale]} className={geist.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <StructuredData
          locale={locale}
          description={content.metadata.description}
          keywords={content.metadata.keywords}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader
            locale={locale}
            navItems={content.navigation.items}
            ctaLabel={content.navigation.ctaLabel}
            languageLabel={content.navigation.languageLabel}
            openMenuLabel={content.navigation.openMenuLabel}
            closeMenuLabel={content.navigation.closeMenuLabel}
          />
          <main className="flex-1">{children}</main>
          <SiteFooter
            name={siteConfig.name}
            description={content.footer.description}
            navItems={content.navigation.items}
            socialLinks={socialLinks}
          />
        </div>
      </body>
    </html>
  );
}
