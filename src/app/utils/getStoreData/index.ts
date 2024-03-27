import { getProduct, getPaginatedProducts } from "../getProducts";
import { baseProductsState, basePaginationState } from "./utils";
import { IProductsData, IStoreData } from "./types";

import { IDynamicKeys } from "@/app/types";
import { transformParams } from "../params";
import { staticData } from "@/app/staticData";
import { getModalData } from "./utils";
import { isNumber } from "../../lib/validation";

export const getProductBasedData = async (
  perPage: number,
  currentPage: number = 1,
  id?: string,
): Promise<IProductsData> => {
  try {
    const shouldSearchForSingleProduct = id && isNumber(id);

    if (shouldSearchForSingleProduct) {
      const getProductResult = await getProduct(Number(id));

      if (!getProductResult) {
        console.error("No product found");
        return baseProductsState;
      }

      const isAnyDataFound =
        getProductResult?.data &&
        Object.keys(getProductResult?.data).length > 0;

      if (!isAnyDataFound) return baseProductsState;

      const product = getProductResult?.data;

      const products = Array(product);

      const totalProductsCount = products.length;

      return {
        products,
        pagination: {
          ...basePaginationState,
          totalProductsCount,
        },
        staticData,
      };
    } else {
      const paginatedProducts = await getPaginatedProducts(
        perPage,
        currentPage,
      );

      if (!paginatedProducts) {
        console.error("No products found");
        return baseProductsState;
      }

      const products = paginatedProducts?.data;
      const totalProductsCount = paginatedProducts?.total;
      const totalPages = paginatedProducts?.total_pages;

      return {
        products,
        pagination: {
          totalProductsCount,
          totalPages,
          currentPage,
        },
        staticData,
      };
    }
  } catch (e) {
    console.error(e);
    return baseProductsState;
  }
};

export const initStoreData = async (
  entriesPerPage: number,
  searchParams?: IDynamicKeys,
): Promise<IStoreData> => {
  const { id, page, modal } = transformParams(searchParams);

  const data = await getProductBasedData(entriesPerPage, page, id);

  const modalData = getModalData(data.products, modal);

  const storeData = {
    initialSearchValue: id,
    products: data.products,
    staticData: data.staticData,
    modal: modalData,
    totalPagesCount: data.pagination.totalPages,
    title: data.staticData.title,
  };

  return storeData;
};
