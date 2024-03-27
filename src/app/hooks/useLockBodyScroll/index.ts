import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import { getScrollbarWidth } from "@/app/lib/utils";
import { init } from "next/dist/compiled/webpack/webpack";
import { get } from "http";
const fixedBodyClassName = "body--fixed";

export const useLockBodyScroll = (bool: boolean) => {
  const initialTopPosition = useRef<string | null>(null);

  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth();

    if (bool) {
      initialTopPosition.current = document.body.style.top;
      window.document.body.classList.add(fixedBodyClassName);
      window.document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      window.document.body.style.marginRight = "";
      window.document.body.classList.remove(fixedBodyClassName);
    }
  }, [bool]);
};
