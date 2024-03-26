"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { setParam } from "@/app/utils";

import { useRef, useCallback, useEffect, useReducer } from "react";

import { Actions } from "./types";
import { inputInitialState, reducer } from "./utils";

const { DEBOUNCE_SUCCESS, VALUE_CHANGED } = Actions;

const defaultDebounceDuration = 200;
export function useNumberInput(
  initialInputValue: string,
  debounceDuration = defaultDebounceDuration
) {
  const initialLoadRef = useRef(true);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [{ debouncedValue, hasError, searchedValue }, dispatch] = useReducer(
    reducer,
    {
      ...inputInitialState,
      debouncedValue: initialInputValue,
      searchedValue: initialInputValue,
    }
  );

  const handleIconClick = useCallback(() => {
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch({
        payload: { value },
        type: VALUE_CHANGED,
      });
    },
    []
  );

  useEffect(() => {
    if (typeof searchedValue === "undefined") return;
    if (initialLoadRef.current) {
      initialLoadRef.current = false;
      return;
    }

    const timeoutID = setTimeout(() => {
      dispatch({ type: DEBOUNCE_SUCCESS });
    }, debounceDuration);

    return () => clearTimeout(timeoutID);
  }, [searchedValue, debounceDuration]);

  useEffect(() => {
    setParam({ key: "id", value: debouncedValue, searchParams }, router.push);
  }, [searchParams, router.push, debouncedValue]);

  return {
    handleIconClick,
    handleInputChange,
    searchInputRef,
    hasError,
    value: debouncedValue,
  };
}
