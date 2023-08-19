import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';


export const ProductTitle = ({ title }: {title?: string}) =>{ // obligado que venga el titutlo

    const { product } = useContext(ProductContext);
  
    return(
      <span className={ styles.productDescription}>
        { title ? title : product.title }
        </span>
    )
  }