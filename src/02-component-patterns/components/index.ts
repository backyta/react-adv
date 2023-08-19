import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductTitle } from './ProductTitle';
import  { ProductImage } from './PorductImage';
import  { ProductButtons } from './ProductButtons';

export { ProductImage } from './PorductImage';
export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} ) 

