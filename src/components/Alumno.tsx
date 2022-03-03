import React from "react";
import useUser from "./memo/hooks/useUser";
export const Alumno = () => {
  const respuesta = useUser();
  return (
    <>
      <div>Alumno</div>
      <div>{JSON.stringify(respuesta)}</div>
    </>
  );
};
