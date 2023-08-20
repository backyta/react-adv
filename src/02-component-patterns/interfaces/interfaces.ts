import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/PorductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product{
id:string;
title: string;
img?: string;
}

  
export interface ProductContextProps{
counter:number;
increseBy: (value: number) => void,
product: Product
}

export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps):JSX.Element,
    Title: ( Props: ProductTitleProps ) => JSX.Element, 
    Image: ( Props: ProductImageProps ) => JSX.Element,
    Buttons: ( Props : ProductButtonsProps ) => JSX.Element
}

//? Haciendo este cambio aplicamos a las 2 interface el cambios de us props. tanto para el
//? .Componente en Shoppping como para el llamado del componente normal.
