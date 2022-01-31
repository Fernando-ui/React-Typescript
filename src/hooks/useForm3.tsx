import React, { ChangeEvent, useState } from "react";

export const useForm3 = <T extends object>( initialState:T ) => {

    const [formulario4, setFormulario4] = useState( initialState );
    
    const handleChange3 = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const {name, value } = target;
      setFormulario4({
        ...formulario4,
        [name]:value,
      });
      
    };
    return{
      formulario4,
      handleChange3,

    }
    
 
};
