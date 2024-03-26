import { cx } from "@/app/lib/utils";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CrossButtonProps } from "./types";

import styles from "./rwd.module.scss";
const { crossBtn } = styles;

const CrossButton = ({ onClick, className }: CrossButtonProps) => {
  return (
    <button
      className={cx(crossBtn, className && className)}
      aria-label="Close"
      onClick={onClick}
    >
      <CloseRoundedIcon />
    </button>
  );
};

export default CrossButton;
