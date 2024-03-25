import styles from "./page.module.css";
import { PageProps } from "@/app/types/page";
import { PRODUCTS_PER_PAGE } from "@/app/constants";
import { initAppData } from "@/app/utils";
import ProductsTable from "@/app/components/ProductsTable";

export default async function Home({ searchParams }: PageProps) {
  const pageData = await initAppData(PRODUCTS_PER_PAGE, searchParams);

  return (
    <main className={styles.main}>
      <ProductsTable
        columns={pageData.staticData.tableColumns}
        products={pageData.products}
      />
    </main>
  );
}
