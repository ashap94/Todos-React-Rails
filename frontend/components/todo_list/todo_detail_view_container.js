import { connect } from "react-redux";
import { deleteTodo } from "../../actions/todo_actions";
import { recieveSteps } from "../../actions/step_actions";
import TodoDetailView from "../todo_list/todo_detail_view";
import { stepsByTodoId } from "../../reducers/selectors";

const mdp = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

export default connect(null, mdp)(TodoDetailView);
