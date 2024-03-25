import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTranslation } from "react-i18next";

import { ITableHeadingProps } from "./types";
const TableHeading = ({ columns }: ITableHeadingProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(({ id, title }) => (
          <TableCell key={id} align="left">
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
