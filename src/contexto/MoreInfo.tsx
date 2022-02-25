import React, { useContext } from "react";
import useUser from "./hooks/useUser";

export const MoreInfo = (props:any) => {
  const [contenido1, contenido2] = useUser();
    console.log(props,'Recibiendo el contexto de morInfo');
    

  return (
    <>
      <h1>Tenemos informacion de nuestro contexto</h1>
      <h2>
        Tenemos los props
      {JSON.stringify(props)}
      </h2>
    </>
  );
};
