import React from "react";
import ToDoItem from "./ToDoItem";
import tododata from "./tododata";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: tododata,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState((prevState) => {
      const newToDo = prevState.todos.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return newToDo;
    });
  }

  render() {
    const toDoItems = this.state.todos.map((item) => (
      <ToDoItem key={item.id} item={item} handleClick={this.handleClick} />
    ));

    return <div class="todo-list">{toDoItems}</div>;
  }
}

export default App;
