import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

  // const { todoState } = useContext(TodoContext);
  // const { todos } = todoState;
  const { todos } = useTodos();
  console.log( todos, 'Tenemos los todos ')
  return (
    <ul>
      {todos.map((value) => (
        <TodoItem key={value.id} todo={ value } />
      ))}
    </ul>
  );
};
