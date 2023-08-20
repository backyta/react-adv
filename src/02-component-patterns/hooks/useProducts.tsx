import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs{
  product: Product,
  onChange?: ( args: onChangeArgs) => void;
  value?: number;
}

export const useProducts = ({ onChange, product, value = 0 }: useProductArgs) => {

  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange ); // trasnformaos a booolean con ! decimos que existo o no existe, no se quiere pasar el onChange como referencia si no un boolena

  const increseBy = ( value: number ) =>{

    // console.log('isControlled', isControlled.current );

    if ( isControlled.current ) {
      return onChange!({ count: value, product })
    }

    const newValue = Math.max( counter + value, 0 )
    setCounter( newValue )

    onChange && onChange({ count:newValue, product });
  }

  useEffect(() => {
    setCounter(value);
  }, [value])
  
  return{
    increseBy,
    counter
  }
}

//? Los gancho custom son independiente para cada componente que construye 
//* es por eso que el counter tiene varios valores cada uno el corresponde a cada componente
//* en el primero no pasamos el value pero en el otro si es po eso que debemos usar el setCounter para pasar
//* su valor de retorno y saber que cambio el stado

//? Nuevo value que viene del padre al hijo cart
//* cuando el value viene del padre la primera vez es 1, ese 1 se setea en el counter por lo que el useEffect
//* nosayuda a setear el nuevo value al counter, esto nos ayuda a mantener el counter actualizado
//* con el value que viene del padre y este conter se usara en el hijo para mostrar el nuevo counter.

//* Dentro del cart hijo caudno se dispara el increaseBy, ya tenemos el counter actualizado con el value
//* que vino del padre y el increseBy sigue su recorrido.

//? Retorno de hijo a padre.

//* Ahora al hacer click en el + o - del hijo en el padre se recibe el value, en sus props 
//* este value hace lo mismo, el usseEfect setea el value en el counter y actualiza y lo expone
//* como el nuevo counter del cual tomara este valor par aactulizar el numero, y asi se crea la 
//* comunicacion entre ambos padre e hijo.
