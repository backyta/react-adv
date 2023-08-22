import { ChangeEvent, useState } from "react";


export const useForm =<T> ( initialData:T ) => {
    
    const [formData, setFormData] = useState<T>( initialData );

    const onChange =(event: ChangeEvent<HTMLInputElement> ) =>{
        const { name, value } = event.target;
        setFormData( prev =>({
            ...prev,
            [name]: value
        }));
    }

    const resetForm = () =>{
        setFormData({ ...initialData })
    }

    const isValidEmail = ( email: string ) => {
        const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(email);
    }


    return{
        ...formData,
        formData,
        resetForm,
        onChange,
        isValidEmail
    }
}

