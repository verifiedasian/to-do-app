import React from "react";
import ToDoItem from "./ToDoItem";
import tododata from "./tododata";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todos: tododata
    }


  }


  render() {
    const toDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)


    return (
      <div class="todo-list">
        {toDoItems}
      </div>
    );
  }
}

export default App;
