import { IDynamicKeys } from "@/app/types";
import { isNumber } from "../validation";

const processedParams = {
  id: 0,
  page: 1,
};
export const transformParams = (searchParams?: IDynamicKeys) => {
  if (!searchParams) return processedParams;

  return Object.keys(processedParams).reduce<typeof processedParams>(
    (acc, processedParamKey) => {
      const paramValue = searchParams[processedParamKey];
      if (!paramValue) return acc;

      const isValueNumber = isNumber(paramValue);

      if (!isValueNumber) return acc;

      return {
        ...acc,
        [processedParamKey]: Number(paramValue),
      };
    },
    processedParams,
  );
};
