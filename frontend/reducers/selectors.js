export const allTodos = state => {
  return Object.keys(state.todos).map(id => state.todos[id]);
};

export const allSteps = state => {
  return Object.keys(state.steps).map(id => state.steps[id]);
};
