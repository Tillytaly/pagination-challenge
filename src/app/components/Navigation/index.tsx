"use client";
import Link from "next/link";
import { SUPPORTED_LOCALES } from "@/app/constants";

import styles from "./rwd.module.scss";
const { navigation, navigationLink } = styles;

const Navigation = () => {
  const params = useParams();

  return (
    <nav className={navigation}>
      {SUPPORTED_LOCALES.map((lang, idx) => {
        const isZeroIndex = !idx;
        const label = isZeroIndex ? lang : ` ${lang}`;

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
