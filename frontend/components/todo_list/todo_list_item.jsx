import React, { useState, useEffect } from "react";
import TodoDetailViewContainer from "./todo_detail_view_container";
import TodoDetailView from "./todo_detail_view";

const TodoListItem = props => {
  const [done, setDone] = useState(false);
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    if (props.todo.done === true) {
      setDone(true);
    }
    // no need for an else statement because done property of todo is already false
  }, []);

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

  const toggleDetail = () => {
    if (detail === false) {
      setDetail(true);
    } else {
      setDetail(false);
    }
  };

  // let updateTitle = done === true ? "Undo" : "Done";
  let detailDisplay;
  if (detail === true) {
    detailDisplay = <TodoDetailViewContainer todo={props.todo} />;
  }

  return (
    <li>
      <div>
        <h2 onClick={toggleDetail}>{props.todo.title}</h2>
        {/* <p>{props.todo.body}</p> */}
        <button onClick={updateTodo}>{done ? "Undo" : "Done"}</button>
      </div>
      {detailDisplay}
    </li>
  );
};

export default TodoListItem;
