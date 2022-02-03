import React from 'react';
import { Todo } from '../interfaces/interfaces2';
interface props {
    todo:Todo;
}


export const TodoItem = ({todo}:props) => {
    const handleClick = () => {
        console.log('Hemos hecho click', todo.desc)
    }
    
  return <li onClick={() => handleClick()}>
      { todo.desc }
  </li>;
};
