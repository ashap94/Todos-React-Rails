import React, { useEffect, useState } from "react";

const TodoDetailView = props => {
  const deleteTodo = () => {
    props.removeTodo(props.todo.id);
  };

  return (
    <div>
      <p>{props.todo.body}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoDetailView;
