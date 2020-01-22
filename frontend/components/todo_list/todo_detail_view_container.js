import { connect } from "react-redux";
import { removeTodo } from "../../actions/todo_actions";
import TodoDetailView from "../todo_list/todo_detail_view";

const mdp = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(null, mdp)(TodoDetailView);
