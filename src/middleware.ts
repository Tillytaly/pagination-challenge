import { i18nRouter } from "next-i18n-router";
import { NextResponse } from "next/server";

import { i18nConfig } from "../i18nConfig";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return i18nRouter(req, i18nConfig);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
