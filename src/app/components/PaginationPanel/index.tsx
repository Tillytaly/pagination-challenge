"use client";

import { usePanelButtons } from "./hooks";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import styles from "./base.module.scss";
const { nav } = styles;

import { IPaginationPanel } from "./types";
const PaginationPanel = ({ paramToSet, totalPagesCount }: IPaginationPanel) => {
  const { handleButtonClick } = usePanelButtons(paramToSet);
  return (
    <Stack spacing={2}>
      <Pagination
        className={nav}
        count={3}
        variant="outlined"
        onChange={(_e, value) => handleButtonClick(value)}
      />
    </Stack>
  );
};

export default PaginationPanel;
