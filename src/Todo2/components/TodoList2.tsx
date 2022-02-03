import React, { useContext } from "react";
import { todoContext } from "../context/TodoContex2";
import { TodoItem } from "./TodoItem";

export const TodoList2 = () => {
  const { todoState } = useContext(todoContext);
  const { todos } = todoState;
  console.log(todoState, "Tenemos el contexto");

  return (
    <>
      <ul>
        {todos.map((value) => (
          <TodoItem key={value.id} todo={value} />
        ))}
      </ul>
    </>
  );
};
