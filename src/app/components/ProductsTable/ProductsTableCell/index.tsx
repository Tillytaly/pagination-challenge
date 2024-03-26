import TableCell from "@mui/material/TableCell";
import { IProductCell } from "./types";

export const ProductsTableCell = ({ title }: IProductCell) => {
  return <TableCell>{title}</TableCell>;
};
