import { connect } from "react-redux";
import StepList from "./step_list";
import { recieveStep, recieveSteps } from "../../actions/step_actions";
import { stepsByTodoId } from "../../reducers/selectors";

const msp = (state, ownProps) => {
  // may need to add logic for creating recieving steps that only associate with one
  // todo

  let todoId = ownProps.todoId;
  //   let steps = Object.keys(state.steps).filter(step => {
  //     step.todo_id === todoId;
  //   });

  return {
    steps: stepsByTodoId(state, todoId),
    todo_id: ownProps.todo_id
  };
};

const mdp = dispatch => {
  return {
    recieveStep: step => dispatch(recieveStep(step))
  };
};

export default connect(msp, mdp)(StepList);
