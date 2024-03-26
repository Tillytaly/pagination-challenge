import { IProduct } from "@/app/types";
import { IStaticData } from "@/app/staticData/types";

export interface IModalData {
  isOpen: boolean;
  product: IProduct[];
}
export interface IPagination {
  currentPage: number;
  totalPages: number;
  totalProductsCount: number;
}
export interface IProductsData {
  products: IProduct[];
  pagination: IPagination;
  staticData: IStaticData;
}

export interface IStoreData {
  products: IProduct[];
  modal: IModalData;
  staticData: IStaticData;
  initialSearchValue: string;
  totalPagesCount: number;
}
