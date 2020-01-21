import React, { useState, useEffect } from "react";

const TodoListItem = props => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (props.todo.done === true) {
      setDone(true);
    }
    // no need for an else statement because done property of todo is already false
  }, []);

  const deleteTodo = () => {
    props.removeTodo(props.todo.id);
  };

  const updateTodo = () => {
    let newTodo;
    if (props.todo.done === true) {
      newTodo = Object.assign({}, props.todo, { done: false });
      setDone(false);
    } else {
      newTodo = Object.assign({}, props.todo, { done: true });
      setDone(true);
    }
    props.recieveTodo(newTodo);
  };

  let updateTitle = done === true ? "Undo" : "Done";

  return (
    <li>
      <h2>{props.todo.title}</h2>
      <p>{props.todo.body}</p>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={updateTodo}>{updateTitle}</button>
    </li>
  );
};

export default TodoListItem;
