import React, { useState, useEffect } from "react";
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

const TodoList = props => {
  useEffect(() => {
    console.log("HERE ARE THE TODOS:   ", props.todos);
  }, []);

  let list = props.todos.map(todo => {
    return (
      <TodoListItem
        todo={todo}
        removeTodo={props.removeTodo}
        recieveTodo={props.recieveTodo}
      />
    );
    // recieveTodo prop/action here in the list item is to change
    // 'done' boolean property as a button that will be rendered in component
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
