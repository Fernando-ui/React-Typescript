import React, { useCallback, useMemo, useState } from "react";
import { suma } from "./SumaFuncion";

export const ReactMemo = () => {
  const [count1, setCount1] = useState(1);
  const [parametro, setParametro] = useState("adios");

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Hola mundo desde React");
      setCount1(count1 + 1);
    },
    [count1]
  );
  // console.log(handleClick);

  const handleCambioPalabra = useCallback(() => {
    setParametro((valor) => valor + 'Algo agregado');
  },[setParametro]);

//   const handleClick2 = useMemo(() => suma(parametro), [parametro]);
//   console.log(handleClick2, "contenido del useMemo5");
 const handleClick2 = () => {
    setParametro( '');
    console.log('Dentro de la handleClick2');
    
  };
  

  return (
    <>
      <div>React Memo</div>
      <button onClick={(e) => handleClick(e)}>Hola +1</button>
      <div>Informacion Suma : {count1} </div>
      {/* <div>Tenemnos en la primera funcion {handleClick}</div> */}
      <button onClick={() => handleCambioPalabra()}>
        Cambio de palara:{parametro}
      </button>
      <button onClick={()=> handleClick2()}>
          Boton del handleClick2
      </button>
      {/* <div>Informacion Suma : {count2}</div> */}
    </>
  );
};
