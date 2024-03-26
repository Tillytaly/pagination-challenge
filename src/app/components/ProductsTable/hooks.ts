import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setParam } from "@/app/utils";

export function useProductsTable(isTableWithModal: boolean) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRowClick = useCallback(
    (id: number) => {
      if (!isTableWithModal) return;

      const stringifiedID = id.toString();
      setParam(
        { key: "modal", value: stringifiedID, searchParams },
        router.push
      );
    },
    [isTableWithModal, searchParams, router.push]
  );

  return { handleRowClick };
}
