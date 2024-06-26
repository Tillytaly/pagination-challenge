"use-client";

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
  return (
    <div className={notFound}>
      <div className={notFoundContainer}>
        <p className={containerTitle}>So sorry!</p>
        <p className={containerMessage}>Something went wrong.</p>
        <Link href="/" className={containerLink}>
          Go to homepage
        </Link>
      </div>
      <AnnouncementIcon />
    </div>
  );
}
