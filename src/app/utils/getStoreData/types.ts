import { IProduct } from "@/app/types";
import { IStaticData } from "@/app/staticData/types";

export interface IPagination {
  currentPage: number;
  totalPages: number;
  totalProductsCount: number;
}
export interface IStoreData {
  products: IProduct[];
  pagination: IPagination;
  staticData: IStaticData;
}
