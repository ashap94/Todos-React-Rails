export const RECIEVE_TODOS = "RECIEVE_TODOS";
export const RECIEVE_TODO = "RECIEVE_TODO";

export const recieveTodos = todos => ({
  type: RECIEVE_TODOS,
  todos
});
