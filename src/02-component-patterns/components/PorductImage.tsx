import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props{
  img?: string;
  className?: string;
  style?: React.CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) =>{ // opcional

    const { product } = useContext(ProductContext);
    let imgToShow: string;
  
    if ( img ) {
      imgToShow = img;
    }else if( product.img ){
      imgToShow = product.img;
    }else{
      imgToShow = noImage;
    }
    
    return(
      <img 
        className={ `${styles.productImg} ${className}` }
        style={ style }
        src={ imgToShow } 
        alt="Product Image" 
        />
    )
  } 
  //* un string vacio para un ternario es algo que no se considera que no tiene valor, y dispara el no-image