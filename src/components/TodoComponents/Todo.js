import React from "react";

const Todo = ({ task }) => {
  return <div onClick={toggleItem}>{task}</div>;
};

export default Todo;
