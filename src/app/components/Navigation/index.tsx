"use client";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/app/constants";

import styles from "./rwd.module.scss";
const { navigation, navigationLink } = styles;

const Navigation = () => {
  const searchParams = useSearchParams();

  return (
    <nav className={navigation}>
      {SUPPORTED_LOCALES.map((lang, idx) => {
        const label = `/ ${lang}`;

        return (
          <Link
            key={idx}
            href={`/${lang}?${searchParams.toString()}`}
            className={navigationLink}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
