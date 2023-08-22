/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField, ErrorMessage } from 'formik';


interface Props{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any //Comodin que permite aniadir cualquier cantidad de propiedades adicionales.
}

export const MyTextInput = ( {label, ...props}: Props) => {

    const [ field ] = useField(props);
    // console.log(field);

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <input className='text-input' { ...field } { ...props }  />
        <ErrorMessage name={ props.name } component='span' className='custom-span-error-class' />
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{ meta.error }</span>
            )
        } */}
    </>
  )
}

//* con el meta, podemos saber ese error ya plicar estilos al input, csiempre revisar con clg
//* const [ field, meta ] = useField(props);