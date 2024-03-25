import { i18nRouter } from "next-i18n-router";

import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { i18nConfig } from "../../../i18nConfig";
import { NextRequest } from "next/server";

export function localesMiddleware(req: NextRequest) {
  return i18nRouter(req, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.**\\..*|_next).*)",
};
