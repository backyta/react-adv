import { Formik, Field, Form, ErrorMessage } from 'formik';
import  * as Yup  from 'yup';

import '../styles/styles.css'


export const FormikComponents = () => {


  return (
    <div>
        <h1>Formik Components</h1>
        <Formik 
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                terms: false,
                jobType: ''
            }}
            onSubmit={( values ) => {
                console.log( values )
            }}
            validationSchema={
                Yup.object({ // internamente usa validationError el schema
                    firstName: Yup.string()
                                  .max(15, 'debe de tener mas de 15 characters or less')
                                  .required('Requerido'),
                    lastName: Yup.string()
                                  .max(10, 'debe de tener mas de 10 characters or less')
                                  .required('Requerido'),
                    email: Yup.string()
                                  .email('Invalid email address')
                                  .required('Requerido'),
                    terms: Yup.boolean()
                                  .oneOf([true], 'debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                 .notOneOf(['it-jr'],'Esta opcion no es permitida')
                                 .required('Requerido')
                                 
                })
            }>

            {
                (formik) =>(

                    <Form>
                    <label htmlFor="firstName">FirstName</label>
                    <Field name='firstName' type='text' />
                    <ErrorMessage name='firstName' component='span' />
                    

                    <label htmlFor="lastName">LastName</label>
                    <Field name='lastName' type='text' />
                    <ErrorMessage name='lastName' component='span'/>
 

                    <label htmlFor="email">Email Address</label>
                    <Field name='email' type='email' />
                    <ErrorMessage name='email' component='span'/>

                    <label htmlFor="jobType">Job Type</label>
                    <Field name='jobType' as='select' >
                        <option value=''>Pick something </option>
                        <option value='developer'> Developer </option>
                        <option value='designer'> Designer </option>
                        <option value='it-senior'> IT Senior </option>
                        <option value='it-jr'> IT Jr </option>
                    </Field>
                    <ErrorMessage name='jobType' component='span'/>


                    <label>
                    <Field name='terms' type='checkbox' />
                         Terms and conditions
                    </label>
                    <ErrorMessage name='terms' component='span'/>
                    

                    <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>

        
    </div>
  )
}

//* Para saber como funciona por debajo formik components que usa el useFormik y context 
//* https://formik.org/docs/tutorial#leveraging-react-context , aunque no se utiliza
//* porque aqui usamos el HOC Formik, pero con esto se entiende como trabja por debajo

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

//* este tipo de eschema es como la de la anteiro seccion donde tenemos una funcion que es pasada como
//* el children de uun HOC