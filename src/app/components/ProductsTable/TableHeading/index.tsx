import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTranslation } from "react-i18next";

import styles from "./rwd.module.scss";
const { heading, headingRow } = styles;

import { ITableHeadingProps } from "./types";
const TableHeading = ({ columns }: ITableHeadingProps) => {
  return (
    <TableHead>
      <TableRow className={headingRow}>
        {columns.map(({ id, title }) => (
          <TableCell key={id} align="center">
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
