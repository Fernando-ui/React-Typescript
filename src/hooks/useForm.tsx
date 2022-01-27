import { ChangeEvent, useState } from "react";

export const useForm = ( initState:object) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
  });
  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>): any => {
    const { name, value } = target;
    console.log(name);
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
};
