import React from "react";

const TodoItem =(props)=>{
  return(
    <li className="todo-item">
      <span >
        {props.completed ?<></> :<input type="checkbox" className="check-box" /> }
        <span className="todo-item-list">{props.text}</span>
      </span>
      <p>...</p>
    </li>
  );
};
export default TodoItem;