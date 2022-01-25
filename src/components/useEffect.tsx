import React, { useEffect, useRef, useState } from "react";

export const Effecto = () => {
  const [numero, setnumero] = useState(0);
    const inputRef = useRef<string>('fernando');

  const [boton2, setboton2] = useState(0);

  const handleHola = (): any => {
    console.log("Hola amigos desde hook");
    setnumero(numero + 1);
  };

  const handleAdios = () => {
      setboton2(boton2 + 1);
      inputRef.current = 'Maria';
  };

  useEffect(() => {
      console.log('Ha cambiado handle hola ');
      
    return () => {
      console.log("Se ha limpiado la consola");
    };
  }, [numero]);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleHola()}>
        {numero}
      </button>
      <button className="btn btn-primary" onClick={() => handleAdios()}>
        {boton2}
      </button>
       <p> { inputRef.current } </p>
    </div>
  );
};
