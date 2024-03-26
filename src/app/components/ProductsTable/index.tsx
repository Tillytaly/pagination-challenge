"use client";
import { useProductsTable } from "./hooks";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import TableHeading from "./TableHeading";
import ProductsTableRow from "./ProductsTableRow";

import { IProductTableProps } from "./types";

const ProductsTable = ({
  products,
  columns,
  withModal = false,
}: IProductTableProps) => {
  const { handleRowClick } = useProductsTable(withModal);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ borderCollapse: "separate", borderSpacing: "0 1rem" }}>
        <TableHeading columns={columns} />
        <TableBody>
          {products.map(({ color, id, ...productRestProps }) => (
            <ProductsTableRow
              key={id}
              align="center"
              colour={color}
              id={id}
              onClick={handleRowClick}
              {...productRestProps}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
