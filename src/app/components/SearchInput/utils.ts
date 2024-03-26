import { Reducer } from "./types";

import { Action, Actions, INumberInputState } from "./types";

const isNumber = (value: string) => !Number.isNaN(Number(value));

export const inputInitialState: INumberInputState = {
  debouncedValue: "",
  searchedValue: "",
  hasError: false,
};

const { DEBOUNCE_SUCCESS, VALUE_CHANGED } = Actions;

export const reducer: Reducer<INumberInputState, Action> = (state, action) => {
  switch (action.type) {
    case VALUE_CHANGED: {
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
    case DEBOUNCE_SUCCESS:
      return {
        ...state,
        debouncedValue: state.searchedValue,
      };
    default:
      return state;
  }
};
