"use client";
import type { PropsWithChildren } from "react";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import initTranslations from "@/app/initTranslations";

interface TranslationProviderProps {
  locale: string;
  namespaces: string[];
  resources: any;
}

// eslint-disable-next-line react/display-name
const TranslationProvider = React.memo<
  PropsWithChildren<TranslationProviderProps>
>(({ children, locale, namespaces, resources }) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
});

export default TranslationProvider;
