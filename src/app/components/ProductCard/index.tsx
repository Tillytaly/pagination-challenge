"use client";

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
  return (
    <>
      <div className={heading}>
        <p className={headingLabel}>Name</p>
        <p className={headingTitle} aria-label="modal-modal-title">
          {name}
        </p>
      </div>
      <div style={{ backgroundColor: color }} className={colorContainer} />
      <div className={details}>
        <Detail label="ID" value={id} />
        <Detail label="Year" value={year} />
        <Detail label="Pantone" value={pantone_value} />
      </div>
    </>
  );
};

export default ProductCard;
