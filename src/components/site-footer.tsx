import Link from "next/link";

import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="page-frame flex flex-col gap-8 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-medium text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xl leading-7">
            A personal headquarters for building companies, systems, technology and a meaningful life through execution.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap gap-5">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {siteConfig.socialLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}