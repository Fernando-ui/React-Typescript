import React from "react";
import useUser from "../contexto3/hook/useUser";

export const Alumno = () => {
  const respuesta = useUser();
  
  return (
    <>
      <div>Alumno</div>
      <div>{JSON.stringify(respuesta)}</div>
    </>
  );
};
