export const supportedLocales = ["es", "en", "it", "fr"] as const;

export type Locale = (typeof supportedLocales)[number];

export const localeCookieName = "av_locale";

export const localeDisplayNames: Record<Locale, string> = {
  es: "Spanish",
  en: "English",
  it: "Italian",
  fr: "French",
};

export const intlLocaleMap: Record<Locale, string> = {
  es: "es-AR",
  en: "en-US",
  it: "it-IT",
  fr: "fr-FR",
};

export const openGraphLocaleMap: Record<Locale, string> = {
  es: "es_AR",
  en: "en_US",
  it: "it_IT",
  fr: "fr_FR",
};

const spanishSpeakingCountries = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PY",
  "PE",
  "PR",
  "ES",
  "UY",
  "VE",
]);

export function isSupportedLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function detectLocaleFromCountry(country: string | null | undefined): Locale | null {
  const normalizedCountry = country?.toUpperCase();

  if (!normalizedCountry) {
    return null;
  }

  if (spanishSpeakingCountries.has(normalizedCountry)) {
    return "es";
  }

  if (["IT", "SM", "VA"].includes(normalizedCountry)) {
    return "it";
  }

  if (["FR", "MC"].includes(normalizedCountry)) {
    return "fr";
  }

  return null;
}

export function detectLocaleFromAcceptLanguage(headerValue: string | null | undefined): Locale {
  const normalizedHeader = headerValue?.toLowerCase() ?? "";

  if (normalizedHeader.includes("es")) {
    return "es";
  }

  if (normalizedHeader.includes("it")) {
    return "it";
  }

  if (normalizedHeader.includes("fr")) {
    return "fr";
  }

  return "en";
}

export function detectPreferredLocale(options: {
  cookieLocale?: string | null;
  requestLocale?: string | null;
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (isSupportedLocale(options.cookieLocale)) {
    return options.cookieLocale;
  }

  if (isSupportedLocale(options.requestLocale)) {
    return options.requestLocale;
  }

  return (
    detectLocaleFromCountry(options.country) ??
    detectLocaleFromAcceptLanguage(options.acceptLanguage)
  );
}