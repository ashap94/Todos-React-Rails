export const RECIEVE_TODOS = "RECIEVE_TODOS";
export const RECIEVE_TODO = "RECIEVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from "../util/todo_api_util";

export const recieveTodos = todos => ({
  type: RECIEVE_TODOS,
  todos
});

export const recieveTodo = todo => ({
  type: RECIEVE_TODO,
  todo
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  todoId: id
});

export const fetchTodos = () => dispatch =>
  APIUtil.fetchTodos().then(todos => dispatch(recieveTodos(todos)));
