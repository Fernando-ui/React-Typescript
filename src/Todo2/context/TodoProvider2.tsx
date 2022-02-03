import React, { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces2";
import { todoContext } from "./TodoContex2";
import { todoReducer } from "./todoReducer2";

const initialState:TodoState = {
    todoCount: 0,
    todos: [
        {
            id:'1',
            desc:'Recolectar informacion de donde no nos imaginamos',
            completed:false,
        },
        {
            id:'2',
            desc:'Conseguir mas cosas',
            completed:false,
        }
    ],
   
    pending: 0,
    completed:0
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider2 = ({ children }: props) => {
  const [todoState, dispatch] = useReducer( todoReducer, initialState);
  return (
    <>
      <todoContext.Provider value={{ todoState }}>
        {children}
      </todoContext.Provider>
    </>
  );
};
