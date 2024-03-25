import { IPagination, IStoreData } from "./types";
import { staticData } from "@/app/staticData";

export const basePaginationState: IPagination = {
  currentPage: 1,
  totalPages: 1,
  totalProductsCount: 0,
};

export const baseDataState: IStoreData = {
  products: [],
  pagination: basePaginationState,
  staticData,
};
