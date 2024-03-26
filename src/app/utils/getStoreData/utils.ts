import { IProduct } from "@/app/types";
import { IPagination, IProductsData } from "./types";
import { staticData } from "@/app/staticData";

export const basePaginationState: IPagination = {
  currentPage: 1,
  totalPages: 1,
  totalProductsCount: 0,
};

export const baseProductsState: IProductsData = {
  products: [],
  pagination: basePaginationState,
  staticData,
};

const emptyModalData = {
  isOpen: false,
  product: [],
};
export const getModalData = (products: IProduct[], id: number) => {
  const isNoProductChosen = id === 0;
  if (isNoProductChosen) return emptyModalData;

  const foundProduct = products.filter((product) => product.id === id);

  return {
    isOpen: foundProduct.length > 0,
    product: foundProduct,
  };
};
