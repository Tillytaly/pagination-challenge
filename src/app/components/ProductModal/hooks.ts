import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

import { useOnClickOutside } from "@/app/hooks";
import { removeParam } from "@/app/utils";

function useProductModal(isOpen: boolean) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCloseModal = useCallback(() => {
    removeParam({ key: "modal", searchParams }, router.push);
  }, [router.push, searchParams]);

  const modalRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(modalRef, handleCloseModal, !isOpen);

  return {
    modalRef,
    handleCloseModal,
  };
}

export default useProductModal;
