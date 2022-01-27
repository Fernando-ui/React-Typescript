import React, { ChangeEvent, useState } from "react";

export const Formulario = () => {

  const [formulario, setFormulario] = useState({
      nombre:'',
      email:'',
  });
  const handleInput = ({target}:ChangeEvent<HTMLInputElement>):any => {
    const  { name, value } = target;
    console.log(name);
    setFormulario({
        ...formulario,
        [name]:value
    })
  }
  
  
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nombre" onChange={(event)=>handleInput(event)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" onChange={(event)=>handleInput(event)}/>
      </div>
      <pre>{ JSON.stringify(formulario) }</pre>
    </form>
  );
};
