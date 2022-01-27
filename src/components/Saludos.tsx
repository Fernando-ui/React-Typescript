import React, { useReducer } from "react";

const initialState = {
  contador: 0,
  nombre: "sin nombre",
  apellido: "sin apellido",
};

type ActionType =
  | {
      type: "sumar";
    }
  | {
      type: "nombre";
    }
  | {
      type: "apellido";
    };

const asignarReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "sumar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "nombre":
      return {
        ...state,
        nombre: "Anacleto",
      };
    case "apellido":
      return {
        ...state,
        apellido: "Soss",
      };

    default:
      return state;
  }
};

export const Saludos = () => {
  const [state, dispatch] = useReducer(asignarReducer, initialState);
  return (
    <div>
      <h5>Contador: {state.contador}</h5>
      <h5>nombre: {state.nombre}</h5>
      <h5>apellido: {state.apellido}</h5>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "sumar" })}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "nombre" })}
      >
        nombre
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "apellido" })}
      >
        Apellido
      </button>
    </div>
  );
};
