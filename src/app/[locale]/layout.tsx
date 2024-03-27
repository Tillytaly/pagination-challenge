import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { locales } from "@/navigation";
import { i18nConfig } from "@/../../i18nConfig";

import { StyledEngineProvider } from "@mui/material/styles";

import { LayoutProps } from "@/app/types/page";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function Layout({ children, params: { locale } }: LayoutProps) {
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
