import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
// import { useShoppingCart } from "../hooks/useShoppingCard";

import '../styles/custom-style.css'

const product = products[0];


export const ShoppingPage = () => {
  
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <ProductCard 
          product={ product }
          className="bg-dark text-white"
          key={ product.id }
          initialValues={{
            count: 4,
            maxCount: 10
          }}
          >
          {
            ( {reset, count, increseBy, isMaxCountReached, maxCount} ) => (
              <>
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-bold"/>
                <ProductButtons className="custom-buttons"/>

                <button onClick={ reset }>Reset</button>

                <button onClick={() => increseBy( -2)}> - 2</button>
                {
                  ( !isMaxCountReached && <button onClick={ () => increseBy( 2 )}> + 2</button>)
                }
                <span>{ count } - { maxCount }</span>

                {/* { JSON.stringify( args, null, 3 )} */}
              </>
            )  
          }
        </ProductCard>

    </div>
  )
}

