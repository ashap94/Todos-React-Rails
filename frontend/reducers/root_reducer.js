import { combineReducers } from "redux";
import todosReducer from "./todos_reducer";

const rootReducer = {
  todos: todosReducer
};

export default rootReducer;
