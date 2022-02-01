import React, { ChangeEvent, useState } from "react";
import { useForm3 } from "../hooks/useForm3";
interface formData {
  nombre3: string;
  apellido3: string;
}
export const Formulario3 = () => {
  const { formulario4: formulario, handleChange3: HandleChange3 } =
    useForm3<formData>({
      nombre3: "fernando",
      apellido3: "correo@algo.com",
    });
  const { nombre3: nombre, apellido3: apellido } = formulario;

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
            value={nombre}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido 3</label>
          <input
            type="text"
            className="form-control"
            name="apellido3"
            onChange={(event) => HandleChange3(event)}
            value={apellido}
          />
        </div>
        <div>{JSON.stringify(formulario)}</div>
      </form>
    </div>
  );
};
