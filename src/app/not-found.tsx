"use-client";
import { useTranslations } from "next-intl";

import Link from "next/link";
import AnnouncementIcon from "@mui/icons-material/Announcement";

import styles from "@/app/styles/not-found/base.module.scss";
const { notFound, notFoundContainer, containerTitle, containerLink } = styles;

export default function NotFound() {
  return (
    <div className={notFound}>
      <div className={notFoundContainer}>
        <p className={containerTitle}>{"So sorry!"}</p>
        <p>{"The page you are looking for can not be found"}</p>
        <Link href="/" className={containerLink}>
          {"Go to homepage"}
        </Link>
      </div>
      <AnnouncementIcon />
    </div>
  );
}
