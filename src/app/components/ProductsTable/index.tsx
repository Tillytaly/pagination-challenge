"use client";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import ProductsTableRow from "./ProductsTableRow";
import TableHeading from "./TableHeading";
import { IProductTableProps } from "./types";

const ProductsTable = ({ products, columns }: IProductTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHeading columns={columns} />
        <TableBody>
          {products.map(({ color, id, ...productRestProps }) => (
            <ProductsTableRow
              key={id}
              align="left"
              colour={color}
              id={id}
              {...productRestProps}
              onClick={() => {}}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
