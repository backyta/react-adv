import { createContext} from "react";
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';

import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }:ProductCardProps) => {

  const{ counter,increseBy} = useProducts();

  return (
    <Provider value={{
      counter,
      increseBy,
      product

    }}>

      <div className={ styles.productCard }>
        {children}
      </div>
    </Provider>

  )
}
