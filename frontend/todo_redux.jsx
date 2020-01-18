import React from "react";
import ReactDom from "react-dom";
import configureStore from "./store/store";
import * as TodoActions from "./actions/todo_actions";
// import App from "./components/app";
import Root from "./components/root";
import { allTodos } from "./reducers/selectors";

console.log("WHAT ARE THE TODOS ACTIONS? :  ", TodoActions);

document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = {};
  const store = configureStore(preloadedState);
  window.store = store;
  window.recieveTodo = TodoActions.recieveTodo;
  window.recieveTodos = TodoActions.recieveTodos;
  window.allTodos = allTodos;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("content");
  ReactDom.render(<Root store={store} />, root);
});
