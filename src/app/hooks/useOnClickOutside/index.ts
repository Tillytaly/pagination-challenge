import { RefObject, useEffect } from "react";

export function useOnClickOutside(
  ref: RefObject<HTMLDivElement | null>,
  handler: (e: any) => void,
  condition?: boolean,
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target) || condition) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, condition]);
}
