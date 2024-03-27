import { IGetProductsPerPageResponse, IGetProduct } from "./types";
import { PRODUCTS_API_URL } from "@/app/constants";
import "../../lib/validation";

export const getPaginatedProducts = async (
  perPage: number,
  page: number = 1,
): Promise<IGetProductsPerPageResponse | undefined> => {
  try {
    const response = await fetch(
      `${PRODUCTS_API_URL}?per_page=${perPage}&page=${page}`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getProduct = async (
  productID: number,
): Promise<IGetProduct | undefined> => {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}${productID}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
