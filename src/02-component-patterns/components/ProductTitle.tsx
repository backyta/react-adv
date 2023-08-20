import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props{
  title?: string;
  className?: string;
  style?: React.CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) =>{ // obligado que venga el titutlo

    const { product } = useContext(ProductContext);
  
    return(
      <span 
        className={ `${styles.productDescription} ${className}`}
        style={ style }
        >
        { title ? title : product.title }
        </span>
    )
  }