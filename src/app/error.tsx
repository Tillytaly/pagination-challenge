"use client";

import { useTranslations } from "next-intl";

import styles from "./styles/error/base.module.scss";
const {
  container,
  containerTitle,
  containerText,
  containerTextBig,
  containerBtn,
} = styles;

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const t = useTranslations("error");

  return (
    <div className={container}>
      <p className={containerTextBig}>{t("oops")} </p>
      <p className={containerTitle}>{t("general_message")}</p>
      {error.message && (
        <p className={containerText}>{`Error: ${error.message}`}</p>
      )}
      <button
        onClick={reset}
        className={containerBtn}
        aria-label={t("general_message")}
      >
        Try again
      </button>
    </div>
  );
};
export default Error;
