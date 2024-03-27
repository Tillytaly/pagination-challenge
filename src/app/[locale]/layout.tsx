import React from "react";
import { notFound } from "next/navigation";
import { StyledEngineProvider } from "@mui/material/styles";
import { i18nConfig } from "@/../../i18nConfig";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function Layout({ children, params: { locale } }: any) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </NextIntlClientProvider>
  );
}
