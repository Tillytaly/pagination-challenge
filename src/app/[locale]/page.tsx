import styles from "./page.module.css";
import { PageProps } from "@/app/types/page";
import { PRODUCTS_PER_PAGE } from "@/app/constants";
import { initAppData } from "@/app/utils";

export default async function Home({ searchParams }: PageProps) {
  const pageData = await initAppData(PRODUCTS_PER_PAGE, searchParams);

  console.log(pageData);
  return <main className={styles.main}></main>;
}
