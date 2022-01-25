import React, { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType = {
  type: 'incrementar'
};


const contadorReducer = (state: typeof initialState, action:ActionType) => {
  switch (action.type) {
    case 'incrementar':
        return{
            ...state,
             contador:state.contador + 1,
        }
    default:
        return state;
  }
};

export const ContadorRed = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState );

  return (                              
    <>
      <h1>useReff</h1>
      <h2> Contador: {contadorState.contador }</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
