"use client";
import { IError } from "./types/page";

import styles from "./styles/error/base.module.scss";
const {
  container,
  containerTitle,
  containerText,
  containerTextBig,
  containerBtn,
} = styles;

const Error = ({ error, reset }: IError) => {
  return (
    <div className={container}>
      <p className={containerTextBig}>Oops! </p>
      <p className={containerTitle}>Something went wrong.</p>
      {error.message && (
        <p className={containerText}>{`Error: ${error.message}`}</p>
      )}
      <button
        onClick={reset}
        className={containerBtn}
        aria-label="Something went wrong."
      >
        Try again
      </button>
    </div>
  );
};
export default Error;
