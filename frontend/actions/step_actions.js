export const RECIEVE_STEPS = "RECIEVE_STEPS";
export const RECIEVE_STEP = "RECIEVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
import * as StepsAPIUtil from "../util/step_api_util";

export const recieveSteps = steps => ({
  type: RECIEVE_STEPS,
  steps
});

export const recieveStep = step => ({
  type: RECIEVE_STEP,
  step
});

export const removeStep = id => ({
  type: REMOVE_STEP,
  stepId: id
});

export const fetchSteps = todo_id => dispatch =>
  StepsAPIUtil.fetchSteps(todo_id).then(steps => dispatch(recieveSteps(steps)));

export const createStep = step => dispatch =>
  StepsAPIUtil.createStep(step).then(step => dispatch(recieveStep(step)));

export const updateStep = step => dispatch =>
  StepsAPIUtil.updateStep(step).then(step => dispatch(recieveStep(step)));

export const deleteStep = stepId => dispatch =>
  StepsAPIUtil.deleteStep(stepId).then(step => dispatch(removeStep(step.id)));
