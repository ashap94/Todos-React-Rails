import { connect } from "react-redux";
import StepListItem from "./step_list_item";
import {
  removeStep,
  recieveStep,
  recieveSteps,
  updateStep,
  deleteStep
} from "../../actions/step_actions";

// const msp = state => {

//   return {

//   };
// };

const mdp = dispatch => {
  return {
    // recieveStep: step => dispatch(recieveStep(step)),
    // removeStep: id => dispatch(removeStep(id)),
    updateStep: step => dispatch(updateStep(step)),
    deleteStep: stepId => dispatch(deleteStep(stepId))
  };
};

export default connect(null, mdp)(StepListItem);
