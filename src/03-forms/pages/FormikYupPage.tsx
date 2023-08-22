import { useFormik } from 'formik';
import  * as Yup  from 'yup';

import '../styles/styles.css'


export const FormikYupPage = () => {

    
    const {
        handleSubmit, 
        errors, touched, getFieldProps 
    } = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },
        onSubmit: (values) => { // se dispara cuando tenga todas las reglas de validacion aprobadas
            console.log(values)
        },
        validationSchema: Yup.object({ // internamente usa validationError el schema
            firstName: Yup.string()
                          .max(15, 'debe de tener mas de 15 characters or less')
                          .required('Requerido'),
            lastName: Yup.string()
                          .max(10, 'debe de tener mas de 10 characters or less')
                          .required('Requerido'),
            email: Yup.string()
                          .email('Invalid email address')
                          .required('Requerido'),
            
        })
        
    });


  return (
    <div>
        <h1>Formik Yup Page</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">FirstName</label>
            <input 
                type="text" 
                {...getFieldProps('firstName')}
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}


            <label htmlFor="lastName">LastName</label>
            <input 
                type="text" 
                {...getFieldProps('lastName')}
            />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}


            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                {...getFieldProps('email')}
            />
            { touched.email && errors.email && <span>{ errors.email }</span>}
            

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

//? Use Formik

//* manda el on submit y initialVlues dentro del objeto de useForkik, y este hook expone de regreso
//* los metodos que tiene la respuesta ya trbajada.

//? GetFieldProps

//* Regresa un objeto en el cual esta colocado el onchange, value, onBlur inclusive el name
    // name='firstName'
    // onBlur={ handleBlur }
    // onChange={ handleChange }
    // value={ values.firstName }
//* tampoc se necesita la interface porque todo esta definidido dentro del schema.
