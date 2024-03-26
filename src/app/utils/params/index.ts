import { IDynamicKeys } from "@/app/types";
import { isNumber } from "../validation";
import { ReadonlyURLSearchParams } from "next/navigation";

const processedParams = {
  id: "",
  modal: 0,
  page: 1,
};
export const transformParams = (searchParams?: IDynamicKeys) => {
  if (!searchParams) return processedParams;

  return Object.keys(processedParams).reduce<typeof processedParams>(
    (acc, processedParamKey) => {
      const paramValue = searchParams[processedParamKey];
      if (!paramValue) return acc;

      const isValueNumber = isNumber(paramValue);

      const isIDParam = processedParamKey === "id";

      if (!isValueNumber) return acc;

      if (isIDParam) {
        return {
          ...acc,
          [processedParamKey]: paramValue,
        };
      }

      return {
        ...acc,
        [processedParamKey]: Number(paramValue),
      };
    },
    processedParams
  );
};

export const setParam = (
  {
    key,
    searchParams,
    value,
  }: {
    key: string;
    value: string;
    searchParams: ReadonlyURLSearchParams;
  },
  callback: (searchParams: string) => void
) => {
  const currentParams = new URLSearchParams(searchParams);

  currentParams.set(key, value);

  const newParams = "?" + encodeURI(currentParams.toString());

  return callback(newParams);
};

export const removeParam = (
  {
    key,
    searchParams,
  }: {
    key: string;
    searchParams: ReadonlyURLSearchParams;
  },
  callback: (searchParams: string) => void
) => {
  const currentParams = new URLSearchParams(searchParams);

  currentParams.delete(key);

  const newParams = "?" + encodeURI(currentParams.toString());

  return callback(newParams);
};
