"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

import { cx } from "@/app/lib/utils";
import { SUPPORTED_LOCALES } from "@/app/constants";

import styles from "./rwd.module.scss";
const { navigation, navigationLink, navigationLinkActive } = styles;

const Navigation = () => {
  const params = useParams();

  return (
    <nav className={navigation}>
      {SUPPORTED_LOCALES.map((lang, idx) => {
        const isZeroIndex = !idx;
        const label = isZeroIndex ? lang : `/ ${lang}`;

        const isActive = params?.locale === lang;

        console.log(isActive, params, lang, "params", "l");

        return (
          <Link
            key={idx}
            href={`/${lang}`}
            className={cx(navigationLink, isActive && navigationLinkActive)}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
