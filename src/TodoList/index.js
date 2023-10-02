import "./TodoList.css"
import React from 'react'

function TodoList(props) {
  return (
    <div className="list">
      <div id="checklist">
        <ul>
          {props.children}
        </ul>
      </div>
    </div>
  );
}

export { TodoList }