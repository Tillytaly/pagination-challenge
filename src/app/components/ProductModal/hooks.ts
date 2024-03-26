import { useRouter, useSearchParams } from "next/navigation";
import { removeParam } from "@/app/utils";
import { useCallback } from "react";
function useProductModal() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCloseModal = useCallback(() => {
    removeParam({ key: "modal", searchParams }, router.push);
  }, [router.push, searchParams]);

  return {
    handleCloseModal,
  };
}

export default useProductModal;
