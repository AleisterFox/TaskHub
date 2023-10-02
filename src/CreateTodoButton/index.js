import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";
import React from 'react';

function CreateTodoButton() {
  const {showModal} = React.useContext(TodoContext);
  return (
    <div className="add_button">
      <button onClick={showModal}>+</button>
    </div>
  );
}

export {CreateTodoButton}