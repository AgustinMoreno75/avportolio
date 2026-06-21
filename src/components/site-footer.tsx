import Link from "next/link";

import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="page-frame flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-medium uppercase tracking-[0.24em] text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xl leading-7">
            Una filosofía de autodominio, disciplina estratégica y excelencia deliberada.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}