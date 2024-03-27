import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { SUPPORTED_LOCALES } from "@/app/constants";

export const locales = SUPPORTED_LOCALES;
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
