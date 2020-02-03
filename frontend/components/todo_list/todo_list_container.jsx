import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";
import {
  recieveTodo,
  removeTodo,
  fetchTodos,
  createTodo
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
    recieveTodo: todo => dispatch(recieveTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo)),
    clearErrors: () => dispatch(clearErrors())

    // removeTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(msp, mdp)(TodoList);
