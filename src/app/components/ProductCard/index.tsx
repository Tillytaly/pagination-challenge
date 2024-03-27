"use client";

import { useTranslations } from "next-intl";

import Detail from "./Detail";
import { IProductCard } from "./types";

import styles from "./rwd.module.scss";
const { heading, headingTitle, headingLabel, colorContainer, details } = styles;

const ProductCard = ({
  color,
  id,
  name,
  pantone_value,
  year,
}: IProductCard) => {
  const t = useTranslations("home");

  return (
    <>
      <div className={heading}>
        <p className={headingLabel}>{t("name")}</p>
        <p className={headingTitle} aria-label="modal-modal-title">
          {name}
        </p>
      </div>
      <div style={{ backgroundColor: color }} className={colorContainer} />
      <div className={details}>
        <Detail label="ID" value={id} />
        <Detail label={t("year")} value={year} />
        <Detail label="Pantone" value={pantone_value} />
      </div>
    </>
  );
};

export default ProductCard;
