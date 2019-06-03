import React from "react";

const TodoForm = ({ task, handleChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={task} onChange={handleChange} placeholder="...To Do" />

      <button>Add ToDo</button>

      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
