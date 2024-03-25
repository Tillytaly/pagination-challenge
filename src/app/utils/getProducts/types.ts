import { IProduct } from "../../types";

export interface IGetProductsPerPageResponse {
  data: IProduct[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface IGetProduct {
  data: IProduct;
}
