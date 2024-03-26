import { IDetailProps } from "./types";
import styles from "./rwd.module.scss";
const { detailLabel, detailValue } = styles;

const Detail = ({ label, value }: IDetailProps) => {
  return (
    <>
      <p className={detailLabel}>{label}</p>
      <p className={detailValue}>{value}</p>
    </>
  );
};
export default Detail;
