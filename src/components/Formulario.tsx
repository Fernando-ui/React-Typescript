import React from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { formulario, handleInput } = useForm<FormData>({
    nombre: "Fernando",
    email: "fernando@algo.com",
    edad: 25,
  });
  const { nombre, email, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          onChange={(event) => handleInput(event)}
          value={nombre}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={(event) => handleInput(event)}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          onChange={(event) => handleInput(event)}
          value={edad}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
