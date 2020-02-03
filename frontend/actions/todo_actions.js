export const RECIEVE_TODOS = "RECIEVE_TODOS";
export const RECIEVE_TODO = "RECIEVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as TodoAPIUtil from "../util/todo_api_util";
import { receiveErrors, RECEIVE_ERRORS } from "./error_actions";

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
  TodoAPIUtil.fetchTodos().then(todos => dispatch(recieveTodos(todos)));

export const createTodo = todo => dispatch =>
  TodoAPIUtil.createTodo(todo).then(
    todo => dispatch(recieveTodo(todo)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
