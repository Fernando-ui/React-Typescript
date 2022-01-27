import React, { useEffect, useReducer } from "react";

const initialState = {
  contador: 10,
};

type ActionType =
  | {
      type: "incrementar";
    }
  | {
      type: "decrementar";
    }
  | {
      type: "establecer", payload:number;
    }
  |
    {
      type:'resetear'
    }
  ;

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };
    case "establecer":
      return {
        ...state,
        contador: action.payload,
      };
    case "resetear":
      return {
        ...state,
        contador: 0,
      };
    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h1>useReff</h1>
      <h2> Contador: {contadorState.contador}</h2>
      <button
        onClick={() => dispatch({ type: "incrementar" })}
        className="btn btn-outline-primary"
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ type: "decrementar" })}
        className="btn btn-outline-primary"
      >
        -1
      </button>
      <button
        onClick={() => dispatch({ type: "establecer",payload:300 })}
        className="btn btn-outline-primary"
      >
        100
      </button>
      <button
        onClick={() => dispatch({ type: "resetear" })}
        className="btn btn-outline-primary"
      >
        Resetear
      </button>
      <br />
      <br />

    </>
  );
};
