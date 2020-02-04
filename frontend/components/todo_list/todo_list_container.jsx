import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";
import {
  recieveTodo,
  fetchTodos,
  createTodo,
  updateTodo
} from "../../actions/todo_actions";
import { clearErrors } from "../../actions/error_actions";

const msp = state => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mdp = dispatch => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo)),
    clearErrors: () => dispatch(clearErrors()),
    updateTodo: todo => dispatch(updateTodo(todo))
  };
};

export default connect(msp, mdp)(TodoList);
