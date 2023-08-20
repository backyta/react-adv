import { ReactElement, createContext} from "react";
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';

import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
// import { ProductTitle } from "./ProductTitle";
// import { ProductImage } from "./PorductImage";
// import { ProductButtons } from "./ProductButtons";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props{
  product  : Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number
}


export const ProductCard = ({ children, product, className,style, onChange, value }:Props) => {

  const{ counter, increseBy} = useProducts({ onChange, product, value });
  // console.log(counter)
  return (
    <Provider value={{
      counter,
      increseBy,
      product

    }}>

      <div 
        className={ `${ styles.productCard } ${ className }` }
        style={ style }
      >
        {children}
      </div>
    </Provider>

  )
}

//? Copiar o crear propiedades sin Object Assign

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;