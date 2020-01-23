export const RECIEVE_STEPS = "RECIEVE_STEPS";
export const RECIEVE_STEP = "RECIEVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const recieveSteps = steps => ({
  type: RECIEVE_STEPS,
  steps
});

export const recieveStep = step => ({
  type: RECIEVE_STEP,
  step
});

export const removeStep = id => ({
  type: REMOVE_TODO,
  stepId: id
});
