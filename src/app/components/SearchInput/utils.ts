import { Reducer } from "./types";
import { isNumber } from "@/app/lib/validation";
import { Action, INumberInputState } from "./types";

export const inputInitialState: INumberInputState = {
  debouncedValue: "",
  searchedValue: "",
  hasError: false,
};

export const reducer: Reducer<INumberInputState, Action> = (state, action) => {
  switch (action.type) {
    case "VALUE_CHANGED": {
      const { value } = action.payload;
      const isInputNumber = isNumber(value);

      if (!isInputNumber) {
        return {
          ...state,
          hasError: true,
        };
      }

      return {
        ...state,
        searchedValue: value,
      };
    }
    case "DEBOUNCE_SUCCESS":
      return {
        ...state,
        debouncedValue: state.searchedValue,
      };
    default:
      return state;
  }
};
