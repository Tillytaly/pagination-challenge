"use client";
import Link from "next/link";

import { SUPPORTED_LOCALES } from "@/app/constants";

import styles from "./rwd.module.scss";
const { navigation, navigationLink } = styles;

const Navigation = () => {
  return (
    <nav className={navigation}>
      {SUPPORTED_LOCALES.map((lang, idx) => {
        const isZeroIndex = !idx;
        const label = isZeroIndex ? lang : `/ ${lang}`;

        if (lang === "en") {
          return (
            <Link key={idx} href="/" className={navigationLink}>
              {label}
            </Link>
          );
        }

        return (
          <Link key={idx} href={`/${lang}`} className={navigationLink}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
