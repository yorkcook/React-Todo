// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, toggleItem }) => {
  return todos.map(todo => (
    <Todo key={todo.id} item={todo} toggleItem={toggleItem} />
  ));
};

export default TodoList;
