import React, { useState } from "react";

export const SumaNumero = () => {
  const [operation, setOperation] = useState(0);

  const handleSumar = (first: number, second: number): any => {
    setOperation(operation + first + second);
  };
  const handleMultiplicar = (first: number, second: number): any => {
    setOperation(operation + first * second);
  };
  const handleDividir = (first: number, second: number): any => {
    setOperation(operation + first / second);
  };
  const handleRestar = (first: number, second: number): any => {
    setOperation(operation + first - second);
  };
  const handleResetear = () => {
    setOperation(0);
  };

  return (
    <div>
      <div className="Operaciones">
        <div>
          <span>El resultado de la suma: {operation}</span>
          <br />
          <button
            className="btn btn-outline-primary"
            onClick={() => handleSumar(3, 4)}
          >
            Sumar
          </button>
        </div>
        <div>
          <span>El resultado de la Multiplicar: {operation}</span>
          <br />
          <button
            className="btn btn-outline-primary"
            onClick={() => handleMultiplicar(3, 4)}
          >
            Multiplicar
          </button>
        </div>
        <div>
          <span>El resultado de la Dividir: {operation}</span>
          <br />
          <button
            className="btn btn-outline-primary"
            onClick={() => handleDividir(3, 4)}
          >
            Dividir
          </button>
        </div>
        <div>
          <span>El resultado de la Restar: {operation}</span>
          <br />
          <button
            className="btn btn-outline-primary"
            onClick={() => handleRestar(3, 4)}
          >
            Restar
          </button>
        </div>
        <div>
          <br />
          <button
            className="btn btn-outline-primary"
            onClick={() => handleResetear()}
          >
            Resetear
          </button>
        </div>
      </div>
    </div>
  );
};
