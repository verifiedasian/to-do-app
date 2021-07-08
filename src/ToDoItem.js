import React from "react";

function ToDoItem(props) {
  const completeStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => {
          props.handleClick(props.item.id);
        }}
      ></input>
      <p style={props.item.completed ? completeStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default ToDoItem;
