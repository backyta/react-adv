import { Product, ProductInCart } from '../interfaces/interfaces';
import { useState } from 'react';


export const useShoppingCart = () => {
// el [] dice que vendra x cantidad de llaves en un objeto

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count:number, product: Product } ) => {

    setShoppingCart( oldShoppingCart => {

     const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

     if ( Math.max( productInCart.count + count, 0 ) > 0) {
        productInCart.count += count;
        return { 
            ...oldShoppingCart,
            [product.id]: productInCart //setea el productInCart actualizado con el count nuevo y actualiza el estado ese, pasa al padre para renderizar el cunt
         }
     }

     // Borrar el producto

     const {[ product.id ]: toDelete , ...rest } = oldShoppingCart;
     console.log({toDelete});
     return { ...rest }
    
    // if ( count === 0) {
    // const {[ product.id ]: toDelete , ...rest } = oldShoppingCart;
    // console.log({toDelete});
    // return { ...rest }
    // }

    // return{
    //     ...oldShoppingCart,
    //     [ product.id ]:{ ...product, count }
    //     }
    // })

    })
  
}
    return{
        shoppingCart,
        onProductCountChange
    }
}

//* si se repite el id solo modifca las propiedades, no crea uno nuevo a menos de que el id sea de otr
//* tarjeta, por eso solo crea una tarjeta del cart.