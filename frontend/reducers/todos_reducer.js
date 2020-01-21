import {
  RECIEVE_TODO,
  RECIEVE_TODOS,
  REMOVE_TODO
} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECIEVE_TODOS:
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;

    case RECIEVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return Object.assign({}, state, newTodo);

    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todoId];
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
