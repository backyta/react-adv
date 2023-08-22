/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField, ErrorMessage } from 'formik';


interface Props{
    label: string;
    name: string;
    [x: string]: any //Comodin que permite aniadir cualquier cantidad de propiedades adicionales.
}

export const MyCheckBox = ( {label, ...props}: Props) => {

    const [ field ] = useField({ ...props, type:'checkbox' });
    // console.log(field);
    
  return (
    <>
        <label>
            <input type="checkbox" { ...field } { ...props } />
            { label }
        </label>
        <ErrorMessage name={ props.name } component='span' className='custom-span-error-class' />
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{ meta.error }</span>
            )
        } */}
    </>
  )
}
