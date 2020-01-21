import React, { useState, useEffect } from "react";
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

const TodoList = props => {
  useEffect(() => {
    console.log("HERE ARE THE TODOS:   ", props.todos);
  }, []);

  let list = props.todos.map(todo => {
    return <TodoListItem todo={todo} />;
  });

  return (
    <div>
      <h3>Todo List goes here!</h3>
      <TodoForm recieveTodo={props.recieveTodo} />
      <ul>{list}</ul>
    </div>
  );
};

export default TodoList;
