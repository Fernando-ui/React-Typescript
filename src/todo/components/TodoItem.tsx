import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";
interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useContext(TodoContext);

  const handleDBclick = () => {
      toggleTodo( todo.id );
  };

  return (
    <li
      onDoubleClick={() => handleDBclick()}
      style={{
        cursor: "pointer",
        textDecoration: todo.complete ? "line-through" : "",
      }}
    >
      {todo.desc}
    </li>
  );
};
