export const cx: Cx = (...args) => {
  return args
    .flat()
    .filter(
      (x: string | boolean | null | undefined) =>
        x !== null && x !== undefined && typeof x !== "boolean"
    )
    .join(" ");
};

export const regexForAlphabeticalCharacter = /^[a-zA-Z]/;
