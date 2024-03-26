import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function usePanelButtons(paramToSet = "page") {
  const router = useRouter();

  const handleButtonClick = useCallback(
    (value: number) => {
      return router.push(`?page=${value}`);
    },
    [router.push, paramToSet]
  );

  return {
    handleButtonClick,
  };
}
