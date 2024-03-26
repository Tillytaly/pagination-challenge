import { ITransformedProductProps } from "@/app/types";

export interface IProductRowProps extends ITransformedProductProps {
  onClick: (productID: number) => void;
  align: "left" | "right" | "center";
}
