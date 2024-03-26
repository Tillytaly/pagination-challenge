import { IProduct } from "@/app/types";

export const getRainbow = (products: IProduct[]) => {
  const colors = products.map((product) => product?.color).join();

  const isOneColor = colors.length === 1;

  const colorValues = isOneColor ? colors[0] : colors;

  const backgroundImage = `linear-gradient(to left, ${colorValues})`;

  return backgroundImage;
};
