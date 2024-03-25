import { getProduct, getPaginatedProducts } from "../getProducts";
import { baseDataState, basePaginationState } from "./utils";
import { IStoreData } from "./types";

import { IDynamicKeys } from "@/app/types";
import { transformParams } from "../params";
import { staticData } from "@/app/staticData";

export const getAppData = async (
  perPage: number,
  currentPage: number = 1,
  id?: number,
): Promise<IStoreData> => {
  try {
    if (id) {
      const getProductResult = await getProduct(id);

      if (!getProductResult) {
        console.error("No product found");
        return baseDataState;
      }

      const isAnyProductFound = Object.entries(getProductResult).length > 0;

      if (isAnyProductFound) return baseDataState;

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
        return baseDataState;
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
    return baseDataState;
  }
};

export const initAppData = async (
  entriesPerPage: number,
  searchParams?: IDynamicKeys,
) => {
  const { id, page } = transformParams(searchParams);

  const data = await getAppData(entriesPerPage, page, id);

  const pageData = {
    products: data.products,
    staticData: data.staticData,
  };

  return pageData;
};
