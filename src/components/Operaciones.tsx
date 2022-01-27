import React, { useReducer, useRef } from "react";

const initialState = {
  contador: 0,
  palabra:'palabras',
  
  
  
};

type ActionsType =
  | {
      type: "sumar";
    }
  | {
      type: "restar";
    };

const operacionesReducer = (state: typeof initialState, action:ActionsType) => {
  switch (action.type) {
    case 'sumar':
      return {
        ...state,
        contador: state.contador + 1,
        palabra: "adios",
      };
    case "restar":
      return {
        ...state,
        contador: state.contador - 1,
        palabra: 'otra palabra',
        prendido:true
      };

    default:
      return state;
  }
};
export const Operaciones = () => {
  const [state, dispatch] = useReducer(operacionesReducer, initialState);
  const texto = useRef<string>(state.palabra);
  
  
  console.log(texto,'Tenemos el objeto de nuestro use Ref')
  return (
    <>
      <h3>
        Tenemos el contador: {state.contador} Texto current: '{texto.current}'  Tenemos sin el current '{state.palabra} ' 
      </h3>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type:'sumar' })}
      >
        +1
        {state.palabra}
      </button>

      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type:'restar' })}
      >
        Restar con el Valor de ' {state.palabra} '
      </button>
    </>
  );
};
