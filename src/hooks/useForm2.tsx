import { ChangeEvent, useState } from "react";

// export function useForm2<T>(  initialState:T ){ 
// export const useForm2 = < T extends Object>( initialState:T ) => {

    export const useForm2 = <T extends Object>( initialState:T ) =>{ 
    const [formulario, setFormulario] = useState( initialState );

    // *  Aqui tenemos los elementos desestructurados del evento

    const handleChange = ({ target }:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]:value
        });
    }
    return{
        formulario,
        handleChange
    }
}
 