import { connect } from "react-redux";
import StepList from "./step_list";
import {
  recieveStep,
  recieveSteps,
  createStep
} from "../../actions/step_actions";
import { stepsByTodoId } from "../../reducers/selectors";

const msp = (state, ownProps) => {
  // may need to add logic for creating recieving steps that only associate with one
  // todo

  let steps = stepsByTodoId(state, ownProps.todo_id);
  // console.log("HERE ARE WHAT THE STEPS LOOK LIKE:   ", steps);

  return {
    steps,
    todo_id: ownProps.todo_id
  };
};

const mdp = dispatch => {
  return {
    recieveStep: step => dispatch(recieveStep(step)),
    createStep: step => dispatch(createStep(step))
  };
};

export default connect(msp, mdp)(StepList);
