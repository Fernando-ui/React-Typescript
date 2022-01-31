import React, { ChangeEvent, useState } from "react";
import { useForm3 } from "../hooks/useForm3";
interface formData {
  nombre3:string,
  apellido3:string,
}
export const Formulario3 = () => {
    const { formulario4, handleChange3:HandleChange3} = useForm3<formData>({
      nombre3:'fernando',
      apellido3:'correo@algo.com',
    });
    console.log(formulario4, 'Tenemos el formulario 4 colcoado dede la app');

  // const [formulario4, setFormulario4] = useState({
  //   nombre3:'fer',
  //   apellido3:'sosa'
  // });
  
  // const HandleChange3 = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const {name, value } = target;
  //   setFormulario4({
  //     ...formulario4,
  //     [name]:value,
  //   });
    
  // };

  return (
    <div>
      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-label">Nombre 3</label>
          <input
            type="text"
            className="form-control"
            name="nombre3"
            onChange={(event) => HandleChange3(event)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido 3</label>
          <input
            type="text"
            className="form-control"
            name="apellido3"
            onChange={(event) => HandleChange3(event)}
          />
        </div>
        <div>{JSON.stringify(formulario4)}</div>
      </form>
    </div>
  );
};
