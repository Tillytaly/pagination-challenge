import { ITransformedProductProps } from '@/app/types';

export interface IProductRowProps extends ITransformedProductProps {
  onClick: (productDetails: ITransformedProductProps) => void;
  align: 'left' | 'right' | 'center';
}
