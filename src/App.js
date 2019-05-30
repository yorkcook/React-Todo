import React from "react";

import TodoList from "./components/TodoComponents/TodoList";

import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      task: "",
      completed: false,
      id: Date.now()
    };
  }

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem],
      task: ""
    });
  };

  toggleItem = id => {
    this.setState(prevState => {
      return {
        todos: prevState.task.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList
          todos={this.state.todos}
          handleCompletedChange={this.handleCompletedChange}
        />

        <TodoForm
          task={this.state.task}
          handleChange={this.handleChange}
          onSubmit={this.addItem}
        />
      </div>
    );
  }
}

export default App;
