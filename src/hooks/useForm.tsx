import { ChangeEvent, useState } from "react";

// export const useForm = (initState: any) => {
export function useForm<T>(initState: T) {
  const [formulario, setFormulario] = useState(initState);

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>): any => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return {
    formulario,
    handleInput,
  };
}
