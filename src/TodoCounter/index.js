import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
import React from 'react';

function TodoCounter() {
  const {totalTodos, completedTodos, } = React.useContext(TodoContext);
  return (
    <p className="counter">
        You have <em>F#&!d</em> {completedTodos} of {totalTodos} TODO's
    </p>
  );
}

export { TodoCounter };