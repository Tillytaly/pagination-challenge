"use client";

import { createPortal } from "react-dom";

import { IChildrenContainer } from "@/app/types";

const Portal = ({ children }: IChildrenContainer) => {
  if (typeof window === "undefined" || typeof document === undefined)
    return <>{children}</>;
  return createPortal(children, document.body);
};

export default Portal;
