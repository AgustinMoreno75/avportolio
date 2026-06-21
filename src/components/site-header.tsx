"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = pathname !== "/" || scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="page-frame">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-4">
            <span className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-sm font-semibold tracking-[0.16em] text-foreground">
              AV
            </span>
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
              Augusto Valmont
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    active && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#1f1f1f]"
            >
              Get In Touch
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Cerrar navegación" : "Abrir navegación"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-border py-6 lg:hidden">
            <nav className="flex flex-col gap-5">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}