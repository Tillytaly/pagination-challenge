export const isNumber = (value: unknown) => {
  const valueAsNumber = Number(value);
  return !isNaN(valueAsNumber);
};
