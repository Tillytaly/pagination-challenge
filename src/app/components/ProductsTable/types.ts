import { IProduct } from "@/app/types/";
import { IColumn } from "@/app/staticData/types";
export interface IProductTableProps {
  columns: IColumn[];
  products: IProduct[];
}
