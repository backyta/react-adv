import { createContext} from "react";
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';

import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props{
  children:(args: ProductCardHandlers) => JSX.Element;
  product  : Product;
  // children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues,
}


export const ProductCard = ({ children, product, className,style, onChange, value, initialValues }:Props) => {

  const{ counter, increseBy, maxCount, isMaxCountReached, reset} = useProducts({ onChange, product, value, initialValues});

  return (
    <Provider value={{
      counter,
      increseBy,
      product,
      maxCount
    }}>

      <div 
        className={ `${ styles.productCard } ${ className }` }
        style={ style }
      >
        { 
          children({
            count: counter,
            isMaxCountReached,
            maxCount:initialValues?.maxCount,
            product,

            increseBy,
            reset
          })  
        }
      </div>
    </Provider>

  )
}

//* En el productCard colocamos todo lo que se va exponer como argumentos en el children