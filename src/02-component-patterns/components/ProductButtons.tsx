import { useContext, useCallback } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props{
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) =>{

    const { increseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReachead = useCallback(

      () => !!maxCount && counter === maxCount  
    , [counter, maxCount])
    //* compara si el valor maxcount en true y si el counter es igual a max Count si no regresa false y 
    //* no hace la demas condicion, el useCallback regresa true o false ejecutando esa funcion de dentro


    return(
      <div 
          className={ `${styles.buttonsContainer} ${ className }` }
          style={ style }
      > 
          <button 
            className={ styles.buttonMinus }
            onClick={ () => increseBy(-1)}
            > - </button>
  
            <div className={ styles.countLabel }> { counter } </div>
            <button
              className={ `${styles.buttonAdd} ${ isMaxReachead() && styles.disabled }` }
              onClick={ () => increseBy( 1 )}
              > + </button>
      </div>
    )
  }