import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";

const msp = state => {
  return {
    todos: allTodos(state)
  };
};

const mdp = dispatch => {
  return {
    recieveTodo: todo => dispatch(recieveTodo(todo))
  };
};

export default connect(msp, mdp)(TodoList);
