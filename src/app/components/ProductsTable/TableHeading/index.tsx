import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTranslations } from "next-intl";

import styles from "./rwd.module.scss";
const { headingRow } = styles;

import { ITableHeadingProps } from "./types";
const TableHeading = ({ columns }: ITableHeadingProps) => {
  const t = useTranslations("home");

  return (
    <TableHead>
      <TableRow className={headingRow}>
        {columns.map(({ id, title }) => (
          <TableCell key={id} align="center">
            {t(title)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
