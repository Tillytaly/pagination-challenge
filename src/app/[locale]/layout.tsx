import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { locales } from "@/navigation";

import { StyledEngineProvider } from "@mui/material/styles";

import { LayoutProps } from "@/app/types/page";

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
