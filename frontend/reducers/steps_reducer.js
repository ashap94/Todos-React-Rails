import {
  RECIEVE_STEPS,
  RECIEVE_STEP,
  REMOVE_STEP
} from "../actions/step_actions";

const initialState = {
  1: {
    id: 1,
    title: "walk to store",
    body: "avoid homeless people",
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: "buy soap",
    body: "need kitchen and bath soap",
    done: false,
    todo_id: 1
  }
};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECIEVE_STEPS:
      action.steps.forEach(step => {
        newState[step.id] = step;
      });
      return newState;

    case RECIEVE_STEP:
      newState = Object.assign({}, state, { [action.step.id]: action.step });
      return newState;

    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.stepId];
      return newState;

    default:
      return state;
  }
};

export default stepsReducer;
