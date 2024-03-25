export interface IProduct {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

export interface ITransformedProductProps extends Omit<IProduct, "color"> {
  colour: string;
}
