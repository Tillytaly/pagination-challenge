"use client";

import { useTranslations } from "next-intl";
import { useNumberInput } from "./hooks";

import SearchIcon from "@mui/icons-material/Search";

import { INumberInputProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperInput, wrapperButton } = styles;

const SearchInput = ({
  id,
  label,
  name,
  searchInfo,
  initialValue,
}: INumberInputProps) => {
  const { handleInputChange, value, handleIconClick, searchInputRef } =
    useNumberInput(initialValue);
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
          ref={searchInputRef}
          aria-label={t(label)}
          className={wrapperInput}
          id={id}
          name={name}
          placeholder={t(searchInfo)}
          value={value}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </>
  );
};

export default SearchInput;
