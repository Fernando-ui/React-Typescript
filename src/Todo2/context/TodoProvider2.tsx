import React from "react";
import { TodoState } from "../interfaces/interfaces2";
import { todoContext } from "./TodoContex2";

const initialState:TodoState = {
    todoCount: 0,
    todos: [
        {
            id:'1',
            desc:'Recolectar informacion de donde no nos imaginamos',
            completed:false,
        },
        {
            id:'1',
            desc:'Conseguir mas cosas',
            completed:false,
        }
    ],
    completed: 0,
    pending: 0
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider2 = ({ children }: props) => {
  return (
    <>
      <todoContext.Provider value={{ nombre: "algo mas" }}>
        {children}
      </todoContext.Provider>
    </>
  );
};
