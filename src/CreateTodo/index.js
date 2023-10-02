import { TodoContext } from "../TodoContext";
import "./CreateTodo.css"
import React from 'react'
import ReactDOM from 'react-dom';

function CreateTodo(props) {
  const {
    closeModal,
    addTodo,
    todoValue,
    setTodoValue
  } = React.useContext(TodoContext);

  let enterPress = (event) => {
    if (event.code === 'Enter') {
      addTodo(todoValue);
    } else if (event.code === 'Escape') {
      closeModal();
    }
  }

  let clickPress = () => {
    addTodo(todoValue);
  }

  return ReactDOM.createPortal (
    <div className="create_todo" onKeyPress={enterPress}>
      <span>
        <p onClick={closeModal} >X</p>
      </span>
      <label>New Task</label>
      <input autoFocus name="task" id="task" placeholder="task name..." required value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}

      ></input>
      <button onClick={clickPress} >Add ToDo Task</button>

    </div>,
    document.getElementById('modal')
  )
}

export { CreateTodo }