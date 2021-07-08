import React from "react";

function ToDoItem(props) {
  return (
    <div class="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => {
          props.handleClick(props.item.id);
        }}
      ></input>
      <p>{props.item.text}</p>
    </div>
  );
}

export default ToDoItem;
