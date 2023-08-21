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
    maxCount?: number,
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

export interface onChangeArgs{
    product: Product, 
    count: number
}


export interface ProductInCart extends Product{ // tiene todas las propiedades del product normal
    count: number
}
  
export interface InitialValues{
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers{
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product:Product;

    increseBy:( value: number) => void;
    reset: () => void;

}// aqui colocamos todo lo que mi componente va exponer al m undo exterior en sus childrens