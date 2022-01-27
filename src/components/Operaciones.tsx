import React, { useReducer } from "react";
const initialState = {
  contador: 0,
};
type ActionType =
  | {
      type: "sumar";
    }
  | {
      type: "restar";
    };
const operacionesReducer = (state:typeof initialState, action:ActionType) => {

    switch (action.type) {
        case 'sumar':
            
            return{
                ...state,
                contador:state.contador + 1,
            };
        case 'restar':
            return{
                ...state,
                contador:state.contador - 1,
            }
    
        default:
            return state;
    }

}




export const Operaciones = () => {

    const [state, dispatch] = useReducer(operacionesReducer, initialState);

  return (
    <>
        <div>El estado es: {state.contador}</div>
        
      <button className="btn btn-primary" onClick={()=> dispatch({type:'sumar'})}>
        Sumar {state.contador}
      </button>
    </>
  );
};
