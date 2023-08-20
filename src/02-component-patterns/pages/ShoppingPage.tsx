import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCard";

import '../styles/custom-style.css'



export const ShoppingPage = () => {
  
  const {shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'
        }}>

        {
          products.map( product => (
            <ProductCard 
              product={ product }
              className="bg-dark text-white"
              key={ product.id }
              onChange={ ( event ) => onProductCountChange(event) } // event los args que estan en la interface
              value={ shoppingCart[product.id]?.count || 0 }
              >
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-bold"/>
                <ProductButtons className="custom-buttons"/>

            </ProductCard>
          )) 
          }

        </div>
        
        <div className="shopping-cart">
          {
            Object.entries( shoppingCart ).map(([key, product]) =>(
              <ProductCard 
              key={key}
              product={ product }
              className="bg-dark text-white"
              style={{ width: '100px' }}
              value={ product.count }
              onChange={ ( event ) => onProductCountChange(event) }
              >
                <ProductImage className="custom-image"/>
                <ProductButtons 
                  className="custom-buttons"
                  style={{
                    display:'flex',
                    justifyContent:'center'
                  }}
                  />
              </ProductCard>
            ))
          }
        </div>

        {/* <div>
          <code>
            { JSON.stringify( shoppingCart, null, 5 )}
          </code>
        </div> */}
    </div>
  )
}

//* en las tarjetas del cart cuando se usan los botones, se esta haciendo referencia
//* al valor del shoping/ id.count que es lo que ya se seteo desde la tarjeta padre
//* al cart tarjeta, ese mismo value es el que seteamos en el numero de la tarjeta padre
//* de regreso y ese value remplaza al counter de ese momento, por el useEffect

//? Eliminar o llegar a 0 en el cart hiji

//* Cuando se llega a 0 en el cart hijo se destruye cu instancia proque compara si el count esta en 0
//* y se retorna {} vacio po lo que se actualiza el estado y no se renderiza nada.
//* De igual manera sucede esto en el padre al llegar a 0