"use-client";
import { useTranslations } from "next-intl";

import Link from "next/link";
import AnnouncementIcon from "@mui/icons-material/Announcement";

import styles from "@/app/styles/not-found/base.module.scss";
const {
  notFound,
  notFoundContainer,
  containerTitle,
  containerLink,
  containerMessage,
} = styles;

export default function NotFound() {
  const t = useTranslations("error");
  return (
    <div className={notFound}>
      <div className={notFoundContainer}>
        <p className={containerTitle}>{t("so_sorry")}</p>
        <p className={containerMessage}>{t("general_message")}</p>
        <Link href="/" className={containerLink}>
          {t("go_back_home")}
        </Link>
      </div>
      <AnnouncementIcon />
    </div>
  );
}
