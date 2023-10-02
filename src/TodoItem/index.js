import "./TodoItem.css"
import React from 'react'

function TodoItem(props) {
  return (
    <li className={props.key}>
      <input type="checkbox" id={props.id}
      checked={props.completed ? true : false}
      onChange={props.onComplete}
      />
      <label htmlFor={props.id}>{ '\xa0'}{ props.text}{ '\xa0'}</label>
      <span onClick={props.onDelete}>X</span>
    </li>
  );
}

export { TodoItem }