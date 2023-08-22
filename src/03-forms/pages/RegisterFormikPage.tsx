import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';


export const RegisterFormikPage = () => {

    
 

  return (
    <div>
        <h1>Register Page</h1>
        <Formik 
            initialValues={{
                name: '',
                email: '',
                password: '',
                password2: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                             .min(2, 'El nombre debe de ser de caracteres o mas')
                             .max(15, 'El nombre debe de ser menor de 15 characters')
                             .required('Requerido'),
                    email: Yup.string()
                               .email('Revide el formato del correo')
                               .required('Requerido'),
                    password: Yup.string()
                                 .min(6, 'Minimo de 6 caracteres')
                                 .required('Requerido'),
                    password2: Yup.string()
                                    .oneOf([ Yup.ref('password1')], 'Las contrasenias no son iguales')
                                   .required('Requerido')
                })
            }
        >
          {
            ({ handleReset }) => (
                <Form >
                    <MyTextInput 
                        label='Nombre'
                        name='name' 
                        placeholder='Tu nombre...'
                    />
                    <MyTextInput 
                        label='Email'
                        name='email' 
                        type='email'
                        placeholder='ejemplo@ejemplo.com'
                    />
                    <MyTextInput 
                        label='Password'
                        name='password' 
                        type='password'
                        placeholder='*******'
                    />
                    <MyTextInput 
                        label='Repeat Password'
                        name='password2' 
                        type='password'
                        placeholder='*******'
                    />


                    <button type="submit">Create</button>
                    <button onClick={ handleReset }>Reset</button>
                </Form>
            )
          }

        </Formik>
       

         
   
    </div>
  )
}
