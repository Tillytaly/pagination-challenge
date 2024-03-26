"use client";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import ProductsTableRow from "./ProductsTableRow";
import TableHeading from "./TableHeading";
import { IProductTableProps } from "./types";
import { useProductsTable } from "./hooks";

const ProductsTable = ({
  products,
  columns,
  withModal = false,
}: IProductTableProps) => {
  const { handleRowClick } = useProductsTable(withModal);

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
