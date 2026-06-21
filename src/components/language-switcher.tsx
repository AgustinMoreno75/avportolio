"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  localeCookieName,
  localeDisplayNames,
  supportedLocales,
  type Locale,
} from "@/lib/locales";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  className?: string;
};

export function LanguageSwitcher({ locale, label, className }: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function updateLocale(nextLocale: Locale) {
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    setIsOpen(false);

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <Globe className="size-4 text-muted-foreground" />
        <span>{localeDisplayNames[locale]}</span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute top-[calc(100%+0.6rem)] z-50 min-w-48 rounded-3xl border border-border bg-white p-2 shadow-[0_24px_80px_rgba(17,17,17,0.08)] transition-all duration-200 ease-out motion-reduce:transition-none",
          "right-[-1.15rem] md:right-0 origin-top-right",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
          {supportedLocales.map((option) => {
            const active = option === locale;

            return (
              <button
                key={option}
                type="button"
                onClick={() => updateLocale(option)}
                disabled={isPending}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition-colors",
                  active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <span>{localeDisplayNames[option]}</span>
                {active ? <Check className="size-4" /> : null}
              </button>
            );
          })}
      </div>
    </div>
  );
}