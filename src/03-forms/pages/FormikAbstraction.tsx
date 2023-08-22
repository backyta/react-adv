import { Formik, Form } from 'formik';
import  * as Yup  from 'yup';

import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheckBox } from '../components';


export const FormikAbstractation = () => {


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
                () =>( // tenemos el objeto formik que se puede destructurar

                    <Form>
                        <MyTextInput 
                            label='First Name' 
                            name='firstName'
                            placeholder='Tu nombre...'
                        />

                        <MyTextInput 
                            label='Last Name' 
                            name='lastName'
                            placeholder='Tu apellido...'
                        />

                        <MyTextInput 
                            label='Email Address' 
                            name='email'
                            placeholder='ejemplo@correo.com'
                            type='email'
                        />

                       
                        <MySelect label='Job Type' name='jobType' >
                            <option value=''>Pick something </option>
                            <option value='developer'> Developer </option>
                            <option value='designer'> Designer </option>
                            <option value='it-senior'> IT Senior </option>
                            <option value='it-jr'> IT Jr </option>
                        </MySelect>
            
                        <MyCheckBox label='Terms and conditions' name='terms' />

               
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