"use client";

import { usePanelButtons } from "./hooks";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import styles from "./base.module.scss";
const { nav } = styles;

import { IPaginationPanel } from "./types";

const PaginationPanel = ({ paramToSet, totalPagesCount }: IPaginationPanel) => {
  const { handleButtonClick } = usePanelButtons(paramToSet);

  const isOnlyOnePageAvailable = totalPagesCount === 1;

  return (
    <Stack spacing={2}>
      <Pagination
        size="large"
        className={nav}
        count={totalPagesCount}
        variant="outlined"
        onChange={(_e, value) => handleButtonClick(value)}
        hidePrevButton={isOnlyOnePageAvailable}
        hideNextButton={isOnlyOnePageAvailable}
        disabled={isOnlyOnePageAvailable}
      />
    </Stack>
  );
};

export default PaginationPanel;
