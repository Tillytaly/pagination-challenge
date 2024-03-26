import { PRODUCTS_PER_PAGE } from "@/app/constants";
import { initStoreData } from "@/app/utils";

import ProductsTable from "@/app/components/ProductsTable";
import ProductModal from "@/app/components/ProductModal";
import SearchInput from "../components/SearchInput";

import { PageProps } from "@/app/types/page";

import styles from "./page.module.css";

export default async function Home({ searchParams }: PageProps) {
  const { modal, products, staticData, initialSearchValue } =
    await initStoreData(PRODUCTS_PER_PAGE, searchParams);
  const withModal = true;

  return (
    <main className={styles.main}>
      <SearchInput
        initialValue={initialSearchValue}
        {...staticData.searchInputData}
      />
      <ProductsTable
        columns={staticData.tableColumns}
        products={products}
        withModal={withModal}
      />
      <ProductModal {...modal} />
    </main>
  );
}
