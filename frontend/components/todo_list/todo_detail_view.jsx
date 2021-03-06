import React, { useEffect, useState } from "react";
import StepListContainer from "../step_list/step_list_container";

const TodoDetailView = props => {
  useEffect(() => {
    props.fetchSteps(props.todo.id);
  }, []);

  const deleteTodo = () => {
    props.deleteTodo(props.todo.id);
  };

  return (
    <div>
      <p>{props.todo.body}</p>
      <StepListContainer todo_id={props.todo.id} />
      <ul>
        {props.todo.tags.map(tag => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
      <button onClick={deleteTodo}>Delete Todo</button>
    </div>
  );
};

export default TodoDetailView;
