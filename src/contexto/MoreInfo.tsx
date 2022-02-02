import React, { useContext } from "react";
import useUser from "./hooks/useUser";

export const MoreInfo = () => {
  const [contenido1, contenido2] = useUser();
    
console.log( contenido1, 'Tenemos el contenido ' );
console.log( contenido2, 'Tenemos el contenido2 ' );
  return (
    <>
      <h1>Tenemos informacion de nuestro contexto</h1>
      <h2>
      
      </h2>
    </>
  );
};
