export const cx: Cx = (...args) => {
  return args
    .flat()
    .filter(
      (x: string | boolean | null | undefined) =>
        x !== null && x !== undefined && typeof x !== "boolean",
    )
    .join(" ");
};

export const getScrollbarWidth = (): number => {
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  return windowWidth - documentWidth;
};
