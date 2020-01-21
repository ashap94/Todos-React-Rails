import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";
import { recieveTodo, removeTodo } from "../../actions/todo_actions";

const msp = state => {
  return {
    todos: allTodos(state)
  };
};

const mdp = dispatch => {
  return {
    recieveTodo: todo => dispatch(recieveTodo(todo)),
    removeTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(msp, mdp)(TodoList);
