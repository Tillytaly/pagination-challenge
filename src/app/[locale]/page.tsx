import { getTranslations } from "next-intl/server";
import { PRODUCTS_PER_PAGE } from "@/app/constants";
import { initStoreData } from "@/app/utils";

import ProductsTable from "@/app/components/ProductsTable";
import ProductModal from "@/app/components/ProductModal";
import SearchInput from "../components/SearchInput";
import PaginationPanel from "../components/PaginationPanel";
import { PageProps } from "@/app/types/page";

import styles from "./styles/page/rwd.module.scss";
const { main, mainContainer, containerTitle } = styles;

export default async function Home({ searchParams }: PageProps) {
  const {
    modal,
    products,
    staticData,
    initialSearchValue,
    totalPagesCount,
    title,
  } = await initStoreData(PRODUCTS_PER_PAGE, searchParams);
  const withModal = true;
  const t = await getTranslations("home");

  return (
    <main className={main}>
      <div className={mainContainer}>
        <h1 className={containerTitle}>{t(title)}</h1>
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
      </div>

      <PaginationPanel totalPagesCount={totalPagesCount} />
    </main>
  );
}
