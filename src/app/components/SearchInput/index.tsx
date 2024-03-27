"use client";

import { useTranslations } from "next-intl";
import { useNumberInput } from "./hooks";
import { cx } from "@/app/lib/utils";
import SearchIcon from "@mui/icons-material/Search";

import { INumberInputProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperInput, wrapperButton, wrapperInputError } = styles;

const SearchInput = ({
  id,
  label,
  name,
  searchInfo,
  initialValue,
  errorMessage,
}: INumberInputProps) => {
  const {
    handleInputChange,
    value,
    handleIconClick,
    searchInputRef,
    hasError,
  } = useNumberInput(initialValue);
  const t = useTranslations("home");

  return (
    <>
      <div className={wrapper}>
        <button
          onClick={handleIconClick}
          className={wrapperButton}
          aria-label={t(label)}
        >
          <SearchIcon />
        </button>
        <input
          autoComplete="off"
          ref={searchInputRef}
          aria-label={t(label)}
          className={cx(wrapperInput, hasError && wrapperInputError)}
          id={id}
          name={name}
          placeholder={hasError ? t(errorMessage) : t(searchInfo)}
          value={value}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </>
  );
};

export default SearchInput;
