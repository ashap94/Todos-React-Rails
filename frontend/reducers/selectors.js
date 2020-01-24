export const allTodos = state => {
  return Object.keys(state.todos).map(id => state.todos[id]);
};

export const stepsByTodoId = ({ steps }, todo_id) => {
  let stepsByTodoId = [];
  Object.keys(steps).map(stepId => {
    let step = steps[stepId];
    if (step.todo_id === todo_id) stepsByTodoId.push(step);
  });
  return stepsByTodoId;
  //   return Object.keys(state.steps).map(id => state.steps[id]);
};
