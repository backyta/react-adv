import { FormEvent } from 'react';

import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

interface FormData{
    name: string,
    email: string,
    password: string,
    password2: string
}

export const RegisterPage = () => {

   const { formData, onChange, resetForm, isValidEmail, 
           email, name, password, password2
    } = useForm<FormData>({
        name: '',
        email: '',
        password: '',
        password2: ''
   });

   const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
       event.preventDefault();
       console.log(formData);
   }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Name"
                value={ name }
                name='name'
                onChange={ onChange }
                className={`${ name.trim().length <= 0 && 'has-error' }`}
            />

            { name.trim().length <= 0 && <span> Este campo es necesario</span> }

            <input 
                type="email" 
                placeholder="email"
                value={ email }
                name='email'
                onChange={ onChange }
                className={`${ !isValidEmail(email) && 'has-error' }`}
            />

            { !isValidEmail(email) && <span> El email no es valido </span> }  

            <input 
                type="password" 
                placeholder="password"
                value={ password }
                name='password'
                onChange={ onChange }
            />
            
            { password.trim().length <= 0 && <span> Este campo es necesario</span> }
            { password.trim().length < 6 && password.trim().length > 0 && <span> La password debe se de mas de 6 caracteres</span> }

            <input 
                type="password" 
                placeholder="Repet Password"
                value={ password2 }
                name='password2'
                onChange={ onChange }
            />
            
            { password2.trim().length <= 0 && <span> Este campo es necesario</span> }
            { password2.trim().length > 0 && password !== password2 && <span>Las constrasenias deben de ser iguales</span> }
            


            <button type="submit">Create</button>
            <button onClick={ resetForm }>Reset</button>
        </form>
    </div>
  )
}
