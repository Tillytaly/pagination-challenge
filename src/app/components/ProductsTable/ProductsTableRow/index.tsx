"use client";

import { useTranslations } from "next-intl";

import { IProductRowProps } from "./types";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import styles from "./rwd.module.scss";
const { row } = styles;

const ProductsTableRow = ({
  align,
  onClick,
  ...productDetails
}: IProductRowProps) => {
  const { colour, id, name, year } = productDetails;
  const t = useTranslations("home");
  return (
    <>
      <TableRow
        key={id}
        className={row}
        style={{ backgroundColor: colour }}
        onClick={() => onClick(id)}
      >
        <TableCell align={align}>{id}</TableCell>
        <TableCell align={align}>{name}</TableCell>
        <TableCell align={align}>{year}</TableCell>
      </TableRow>
    </>
  );
};

export default ProductsTableRow;
