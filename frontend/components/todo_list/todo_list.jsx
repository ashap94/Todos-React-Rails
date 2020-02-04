import React, { useState, useEffect } from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const TodoList = props => {
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    props.fetchTodos().then(() => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  // useEffect(() => {}, [props.todos]);

  if (!loaded) {
    return null;
  }

  let list = props.todos.map(todo => {
    return (
      <TodoListItem
        todo={todo}
        key={todo.id}
        clearErrors={props.clearErrors}
        updateTodo={props.updateTodo}
      />
    );
    // recieveTodo prop/action here in the list item is to change
    // 'done' boolean property as a button that will be rendered in component
  });

  return (
    <div>
      <h3>Todo List goes here!</h3>
      <TodoForm
        createTodo={props.createTodo}
        errors={errors}
        clearErrors={props.clearErrors}
      />
      <ul>{list}</ul>
    </div>
  );
};

export default TodoList;
