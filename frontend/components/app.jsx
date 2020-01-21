import React from "react";
import { useEffect, useState } from "react";
import TodoListContainer from "../components/todos/todo_list_container";

const App = () => (
  <div className="app">
    <h1>Super Awesome Todo App</h1>
    <TodoListContainer />
  </div>
);

export default App;
