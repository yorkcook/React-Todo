import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form>
        <input placeholder="...To Do" />

        <button>Add ToDo</button>

        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
