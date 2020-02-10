import React, { useState, useEffect } from "react";
import StepListItemContainer from "./step_list_item_container";
import StepForm from "./step_form";

const StepList = props => {
  // steps for specific todo, utilize prop todo_id to

  let stepItems = props.steps.map(step => (
    <StepListItemContainer key={step.id} step={step} />
  ));

  return (
    <div>
      <ul>{stepItems}</ul>
      <StepForm createStep={props.createStep} todo_id={props.todo_id} />
    </div>
  );
};

export default StepList;
