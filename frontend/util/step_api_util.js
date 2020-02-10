export const fetchSteps = todo_id =>
  $.ajax({
    method: `GET`,
    url: `/api/todos/${todo_id}/steps`
  });

export const createStep = step =>
  $.ajax({
    method: `POST`,
    url: `/api/todos/${step.todo_id}/steps`,
    data: { step }
  });

export const updateStep = step =>
  $.ajax({
    method: `PATCH`,
    url: `/api/steps/${step.id}`,
    data: { step }
  });

export const deleteStep = stepId =>
  $.ajax({
    method: `DELETE`,
    url: `/api/steps/${stepId}`
  });
