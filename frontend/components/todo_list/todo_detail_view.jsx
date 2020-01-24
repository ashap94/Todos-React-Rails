import React, { useEffect, useState } from "react";
import StepListContainer from "../step_list/step_list_container";

const TodoDetailView = props => {
  const deleteTodo = () => {
    props.removeTodo(props.todo.id);
  };

  return (
    <div>
      <p>{props.todo.body}</p>
      <button onClick={deleteTodo}>Delete</button>
      <StepListContainer todo_id={props.todo.id} />
    </div>
  );
};

export default TodoDetailView;
