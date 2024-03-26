import Link from "next/link";
import { GITHUB_URL } from "@/app/constants";

import styles from "./rwd.module.scss";
const { footer, footerParagraph, footerLink } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <p className={footerParagraph}>Developed by</p>
      <Link href={GITHUB_URL} className={footerLink}>
        Agata Ziemniak
      </Link>
    </footer>
  );
};

export default Footer;
