"use client";

import { useTranslation } from "react-i18next";

import { IProductRowProps } from "./types";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const ProductsTableRow = ({
  align,
  onClick,
  ...productDetails
}: IProductRowProps) => {
  const { t } = useTranslation();

  const { colour, id, name, year } = productDetails;

  return (
    <>
      <TableRow
        key={id}
        style={{ backgroundColor: colour }}
        onClick={() => onClick(id)}
      >
        <TableCell align={align}>{id}</TableCell>
        <TableCell align={align}>{t(name)}</TableCell>
        <TableCell align={align}>{year}</TableCell>
      </TableRow>
    </>
  );
};

export default ProductsTableRow;
