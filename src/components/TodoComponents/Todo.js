import React from "react";

const Todo = ({ toggleItem, item }) => {
  // const x = () => toggleItem(item.id);
  return (
    <div
      className={item.completed ? "todo-completed" : null}
      onClick={() => toggleItem(item.id)}
    >
      {item.task}
    </div>
  );
};

export default Todo;
