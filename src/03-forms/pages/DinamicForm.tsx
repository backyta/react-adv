/* eslint-disable @typescript-eslint/no-explicit-any */
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custumForm.json';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

console.log(formJson);

const initialValues: { [x:string]: any } = {};
const requiredFields: { [x:string]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if ( !input.validations ) continue; // continua ala siguiente iteracion pero no ejecuta lo de abjo.
        
    let schema = Yup.string()

    for (const rule of input.validations) {
        if ( rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if ( rule.type === 'minLength') {
            schema = schema.min( (rule as any).value, `El minimo es de ${ (rule as any).value || 2 } characters`)
        }
        if ( rule.type === 'email') {
            schema = schema.email('Email no valido')
        }

        //Otras reglas
    }

    requiredFields[ input.name ] = schema;
}

const validationsSchema = Yup.object({ ...requiredFields })


export const DinamicForm = () => {
  return (
    <div>
        <h1>Dinamic Form</h1>

        <Formik
            initialValues={ initialValues }
            validationSchema={ validationsSchema }
            onSubmit={(values) => (
                console.log(values)
            )}
        >
            { () => // se puede destrucutrar el formik que es el parametro y pasar a los hijos
            (
                <Form noValidate>
                    {
                        formJson.map( ({ label, name, placeholder, type, options}) =>{

                            if(type === 'text' || type === 'password' || type === 'email'){
                                return (
                                    <MyTextInput 
                                        key={ name }
                                        type={ (type as any) } 
                                        label={ label } 
                                        name={ name } 
                                        placeholder={ placeholder } 
                                    />
                                )
                            }else if( type === 'select'){
                                return(
                                    <MySelect 
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                    >
                                    <option value="">Select Option</option>
                                    {
                                        options?.map( ({id, label}) =>(
                                            <option key={ id } value={ id }>{ label }</option>
                                        ))
                                    }
                                    
                                    </MySelect>
                                )
                            }


                           return  <span>Type: { type } no es soportado</span>
                        })
                    }

                    <button type='submit'>Submit</button>
                </Form>

            )}
        </Formik>
    </div>
  )
}





//* Un formulario dinamico puede ser crado en tiempo de ejecucion, como cuando el abckend regresa un
//* formulario o pericion http de un json ( respuesta ) basado en esto se cra el formulario

//* El error de pasar de formacontrolada a no controla es por los initialValues que no estan definidos 
//* en el contexto que proporciona el HOC de Formik en sus props !!!
