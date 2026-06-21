import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";

type SiteFooterProps = {
  name: string;
  description: string;
  navItems: Array<{ href: string; label: string }>;
  socialLinks: Array<{ href: string; label: string }>;
};

export function SiteFooter({ name, description, navItems, socialLinks }: SiteFooterProps) {
  return (
    <footer className="border-t border-border py-10">
      <div className="page-frame flex flex-col gap-8 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <BrandMark className="h-12 w-12 rounded-full border border-border bg-white p-1.5" />
            <p className="font-medium text-foreground">{name}</p>
          </div>
          <p className="mt-2 max-w-xl leading-7">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((item) => (
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