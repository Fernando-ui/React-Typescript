import React from "react";
import { TodoList2 } from "./components/TodoList2";
import { TodoProvider2 } from "./context/TodoProvider2";

export const Todo2 = () => {
    
  return (
    <div>
      <TodoProvider2>
        <h1>Todo:</h1>
        <h2>Componente o jsx que le mandamos al TodoProvider2</h2>
        <TodoList2 />
      </TodoProvider2>
    </div>
  );
};
