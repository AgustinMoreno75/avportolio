import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  detectPreferredLocale,
  localeCookieName,
} from "./src/lib/locales";

export function middleware(request: NextRequest) {
  const locale = detectPreferredLocale({
    cookieLocale: request.cookies.get(localeCookieName)?.value,
    country: request.headers.get("x-vercel-ip-country"),
    acceptLanguage: request.headers.get("accept-language"),
  });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (request.cookies.get(localeCookieName)?.value !== locale) {
    response.cookies.set(localeCookieName, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};