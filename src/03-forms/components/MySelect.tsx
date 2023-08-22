/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField, ErrorMessage } from 'formik';


interface Props{
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any //Comodin que permite aniadir cualquier cantidad de propiedades adicionales.
}

export const MySelect = ( {label, ...props}: Props) => {

    const [ field ] = useField(props);
    // console.log(field);

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <select  { ...field } { ...props }  />
        <ErrorMessage name={ props.name } component='span' className='custom-span-error-class' />
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{ meta.error }</span>
            )
        } */}
    </>
  )
}
