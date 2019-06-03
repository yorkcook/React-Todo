// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return todos.map(({ task, id }) => <Todo key={id} task={task} />);
};

export default TodoList;
