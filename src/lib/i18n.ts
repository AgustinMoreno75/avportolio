import { cookies, headers } from "next/headers";

import { detectPreferredLocale, type Locale, localeCookieName } from "@/lib/locales";

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const headerStore = await headers();

  return detectPreferredLocale({
    cookieLocale: cookieStore.get(localeCookieName)?.value,
    requestLocale: headerStore.get("x-user-locale"),
    country: headerStore.get("x-vercel-ip-country"),
    acceptLanguage: headerStore.get("accept-language"),
  });
}