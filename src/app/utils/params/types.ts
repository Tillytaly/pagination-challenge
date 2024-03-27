import { ReadonlyURLSearchParams } from "next/navigation";
export interface DataToSetSearchParam {
  key: string;
  value: string;
  searchParams: ReadonlyURLSearchParams;
}

export interface DataToRemoveParam {
  key: string;
  searchParams: ReadonlyURLSearchParams;
}
