import { IGetProductsPerPageResponse, IGetProduct } from "./types";

const ENDPOINT_URL = "https://reqres.in/api/products/";

export const getPaginatedProducts = async (
  perPage: number,
  page: number = 1,
): Promise<IGetProductsPerPageResponse | undefined> => {
  try {
    const response = await fetch(
      `${ENDPOINT_URL}?per_page=${perPage}&page=${page}`,
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
    const response = await fetch(`${ENDPOINT_URL}${productID}}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
