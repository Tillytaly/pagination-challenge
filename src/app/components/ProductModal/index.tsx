"use client";

import useProductModal from "./hooks";

import Modal from "@mui/material/Modal";
import Portal from "../Portal";
import CrossButton from "../CrossButton";
import ProductCard from "../ProductCard";

import { IProductModal } from "./types";

import styles from "./rwd.module.scss";
const { modal, modalBox, container, containerButton } = styles;

const ProductModal = ({ isOpen, product }: IProductModal) => {
  const { handleCloseModal, modalRef } = useProductModal(isOpen);

  if (product.length === 0) return <></>;

  const modalProduct = product[0];

  return (
    <Portal>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        className={modal}
      >
        <div
          ref={modalRef}
          className={modalBox}
          style={{ boxShadow: `8px 8px 21px -5px ${modalProduct.color}` }}
        >
          <div className={container}>
            <CrossButton
              onClick={handleCloseModal}
              className={containerButton}
            />
            <ProductCard {...modalProduct} />
          </div>
        </div>
      </Modal>
    </Portal>
  );
};

export default ProductModal;
