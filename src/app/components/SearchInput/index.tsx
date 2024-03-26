"use client";
import { useNumberInput } from "./hooks";

import SearchIcon from "@mui/icons-material/Search";

import { INumberInputProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperInput, wrapperButton } = styles;

const SearchInput = ({
  id,
  label,
  name,
  placeholder,
  initialValue,
}: INumberInputProps) => {
  const { handleInputChange, value, handleIconClick, searchInputRef } =
    useNumberInput(initialValue);

  return (
    <>
      <div className={wrapper}>
        <button
          onClick={handleIconClick}
          className={wrapperButton}
          aria-label={label}
        >
          <SearchIcon />
        </button>
        <input
          ref={searchInputRef}
          aria-label={label}
          className={wrapperInput}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </>
  );
};

export default SearchInput;
