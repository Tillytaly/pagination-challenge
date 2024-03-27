import { SearchInput } from "../../staticData/types";
export interface INumberInputProps extends SearchInput {
  initialValue: string;
}
export interface INumberInputState {
  searchedValue: string;
  debouncedValue: string;
  hasError: boolean;
}

export enum Actions {
  VALUE_CHANGED = "CHANGED_PAGE",
  DEBOUNCE_SUCCESS = "DEBOUNCE_SUCCESS",
}

interface IValueStateChangePayload {
  value: string;
}

export type Action =
  | {
      payload: IValueStateChangePayload;
      type: Actions.VALUE_CHANGED;
    }
  | {
      type: Actions.DEBOUNCE_SUCCESS;
    };

export type Reducer<S, A> = (prevState: S, action: A) => S;
