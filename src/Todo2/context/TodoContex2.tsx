import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces2";

export type TodoContextProps = {
  todoState: TodoState;
};
export const todoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
